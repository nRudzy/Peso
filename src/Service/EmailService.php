<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class EmailService
{
    public function __construct(
        private MailerInterface $mailer,
        private UrlGeneratorInterface $urlGenerator
    ) {}

    /**
     * Envoie un email de confirmation de compte
     */
    public function sendAccountConfirmationEmail(User $user, string $confirmationToken): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('noreply@peso-app.com', 'Peso App'))
            ->to(new Address($user->getEmail(), $user->getName() ?? $user->getEmail()))
            ->subject('Confirmez votre compte Peso')
            ->htmlTemplate('emails/account_confirmation.html.twig')
            ->context([
                'user' => $user,
                'confirmationUrl' => $this->urlGenerator->generate(
                    'app_confirm_account',
                    ['token' => $confirmationToken],
                    UrlGeneratorInterface::ABSOLUTE_URL
                ),
                'expiresAt' => new \DateTimeImmutable('+24 hours')
            ]);

        $this->mailer->send($email);
    }

    /**
     * Envoie un email de réinitialisation de mot de passe
     */
    public function sendPasswordResetEmail(User $user, string $resetToken): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('noreply@peso-app.com', 'Peso App'))
            ->to(new Address($user->getEmail(), $user->getName() ?? $user->getEmail()))
            ->subject('Réinitialisation de votre mot de passe')
            ->htmlTemplate('emails/password_reset.html.twig')
            ->context([
                'user' => $user,
                'resetUrl' => $this->urlGenerator->generate(
                    'app_reset_password',
                    ['token' => $resetToken],
                    UrlGeneratorInterface::ABSOLUTE_URL
                ),
                'expiresAt' => new \DateTimeImmutable('+1 hour')
            ]);

        $this->mailer->send($email);
    }

    /**
     * Envoie un email de bienvenue
     */
    public function sendWelcomeEmail(User $user): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('welcome@peso-app.com', 'Peso App'))
            ->to(new Address($user->getEmail(), $user->getName() ?? $user->getEmail()))
            ->subject('Bienvenue sur Peso !')
            ->htmlTemplate('emails/welcome.html.twig')
            ->context([
                'user' => $user,
                'dashboardUrl' => $this->urlGenerator->generate('app_dashboard', [], UrlGeneratorInterface::ABSOLUTE_URL)
            ]);

        $this->mailer->send($email);
    }

    /**
     * Envoie un email de rappel pour l'enregistrement du poids
     */
    public function sendWeightReminderEmail(User $user): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('reminders@peso-app.com', 'Peso App'))
            ->to(new Address($user->getEmail(), $user->getName() ?? $user->getEmail()))
            ->subject('Rappel : Enregistrez votre poids aujourd\'hui')
            ->htmlTemplate('emails/weight_reminder.html.twig')
            ->context([
                'user' => $user,
                'addWeightUrl' => $this->urlGenerator->generate('app_add_weight', [], UrlGeneratorInterface::ABSOLUTE_URL)
            ]);

        $this->mailer->send($email);
    }

    /**
     * Envoie un email de félicitations pour un objectif atteint
     */
    public function sendGoalAchievedEmail(User $user, float $targetWeight, float $currentWeight): void
    {
        $email = (new TemplatedEmail())
            ->from(new Address('congratulations@peso-app.com', 'Peso App'))
            ->to(new Address($user->getEmail(), $user->getName() ?? $user->getEmail()))
            ->subject('🎉 Félicitations ! Vous avez atteint votre objectif !')
            ->htmlTemplate('emails/goal_achieved.html.twig')
            ->context([
                'user' => $user,
                'targetWeight' => $targetWeight,
                'currentWeight' => $currentWeight,
                'weightLost' => $user->getInitialWeight() - $currentWeight,
                'dashboardUrl' => $this->urlGenerator->generate('app_dashboard', [], UrlGeneratorInterface::ABSOLUTE_URL)
            ]);

        $this->mailer->send($email);
    }

    /**
     * Envoie un email simple (sans template)
     */
    public function sendSimpleEmail(string $to, string $subject, string $body): void
    {
        $email = (new Email())
            ->from(new Address('noreply@peso-app.com', 'Peso App'))
            ->to(new Address($to))
            ->subject($subject)
            ->html($body);

        $this->mailer->send($email);
    }
} 