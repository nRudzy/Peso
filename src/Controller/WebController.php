<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Cookie;

class WebController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/login', name: 'app_login')]
    public function login(): Response
    {
        // Si l'utilisateur est déjà connecté, rediriger vers le dashboard
        if ($this->getUser()) {
            return $this->redirectToRoute('app_dashboard');
        }

        return $this->render('auth/login.html.twig');
    }

    #[Route('/register', name: 'app_register')]
    public function register(): Response
    {
        // Si l'utilisateur est déjà connecté, rediriger vers le dashboard
        if ($this->getUser()) {
            return $this->redirectToRoute('app_dashboard');
        }

        return $this->render('auth/register.html.twig');
    }

    #[Route('/dashboard', name: 'app_dashboard')]
    public function dashboard(): Response
    {
        // Vérifier que l'utilisateur est connecté
        $this->denyAccessUnlessGranted('ROLE_USER');

        return $this->render('dashboard/index.html.twig');
    }

    #[Route('/journal', name: 'app_journal')]
    public function journal(): Response
    {
        // Vérifier que l'utilisateur est connecté
        $this->denyAccessUnlessGranted('ROLE_USER');

        return $this->render('journal/index.html.twig');
    }

    #[Route('/profile', name: 'app_profile')]
    public function profile(): Response
    {
        // Vérifier que l'utilisateur est connecté
        $this->denyAccessUnlessGranted('ROLE_USER');

        return $this->render('profile/index.html.twig');
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): Response
    {
        // Créer une réponse de redirection
        $response = $this->redirectToRoute('app_home');
        
        // Supprimer le cookie JWT
        $cookie = new Cookie('jwt_token', '', time() - 3600, '/', null, false, false);
        $response->headers->setCookie($cookie);
        
        return $response;
    }
} 