<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use App\DataProvider\UserDataProvider;

class JWTAuthenticationListener implements EventSubscriberInterface
{
    public function __construct(
        private JWTEncoderInterface $jwtEncoder,
        private UserDataProvider $userProvider,
        private TokenStorageInterface $tokenStorage
    ) {}

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => ['onKernelRequest', 8], // Priorité élevée
        ];
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();
        
        // Ne traiter que les requêtes web (pas API)
        if (str_starts_with($request->getPathInfo(), '/api')) {
            return;
        }

        // Vérifier si l'utilisateur est déjà authentifié
        if ($this->tokenStorage->getToken() && $this->tokenStorage->getToken()->isAuthenticated()) {
            return;
        }

        // Récupérer le token JWT depuis le cookie ou l'en-tête
        $jwtToken = $this->extractJWTToken($request);
        
        if (!$jwtToken) {
            return;
        }

        try {
            // Décoder le token JWT
            $payload = $this->jwtEncoder->decode($jwtToken);
            
            // Récupérer l'utilisateur
            $user = $this->userProvider->getUserByEmail($payload['email']);
            
            // Créer le token Symfony
            $token = new UsernamePasswordToken(
                $user,
                'main',
                $user->getRoles()
            );
            
            // Stocker le token
            $this->tokenStorage->setToken($token);
            
        } catch (JWTDecodeFailureException $e) {
            // Token invalide, on ne fait rien
            dump($e);die;
            return;
        }
    }

    private function extractJWTToken($request): ?string
    {
        // Essayer de récupérer depuis le cookie
        $jwtToken = $request->cookies->get('jwt_token');
        
        if ($jwtToken) {
            return $jwtToken;
        }

        // Essayer de récupérer depuis l'en-tête Authorization
        $authHeader = $request->headers->get('Authorization');
        if ($authHeader && str_starts_with($authHeader, 'Bearer ')) {
            return substr($authHeader, 7);
        }

        return null;
    }
} 