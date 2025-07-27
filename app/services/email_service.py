from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from app.core.config import settings
from typing import Optional
import logging

logger = logging.getLogger(__name__)


class EmailService:
    def __init__(self):
        # Configure email settings based on environment
        use_credentials = bool(settings.SMTP_USER and settings.SMTP_PASSWORD)
        use_tls = settings.SMTP_HOST != "mailhog"  # Disable TLS for MailHog
        
        self.conf = ConnectionConfig(
            MAIL_USERNAME=settings.SMTP_USER,
            MAIL_PASSWORD=settings.SMTP_PASSWORD,
            MAIL_FROM=settings.FROM_EMAIL,
            MAIL_PORT=settings.SMTP_PORT,
            MAIL_SERVER=settings.SMTP_HOST,
            MAIL_STARTTLS=use_tls,
            MAIL_SSL_TLS=False,
            USE_CREDENTIALS=use_credentials
        )
        self.fastmail = FastMail(self.conf)

    async def send_verification_email(self, email: str, token: str) -> bool:
        """Send email verification email"""
        try:
            verification_url = f"http://localhost:3000/verify-email?token={token}"
            
            message = MessageSchema(
                subject="Vérifiez votre adresse email - Peso",
                recipients=[email],
                body=f"""
                <html>
                    <body>
                        <h2>Bienvenue sur Peso !</h2>
                        <p>Merci de vous être inscrit. Veuillez cliquer sur le lien ci-dessous pour vérifier votre adresse email :</p>
                        <p><a href="{verification_url}">Vérifier mon email</a></p>
                        <p>Si le lien ne fonctionne pas, copiez et collez cette URL dans votre navigateur :</p>
                        <p>{verification_url}</p>
                        <p>Ce lien expirera dans 24 heures.</p>
                        <p>Cordialement,<br>L'équipe Peso</p>
                    </body>
                </html>
                """,
                subtype="html"
            )
            
            await self.fastmail.send_message(message)
            logger.info(f"Verification email sent to {email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send verification email to {email}: {str(e)}")
            return False

    async def send_password_reset_email(self, email: str, token: str) -> bool:
        """Send password reset email"""
        try:
            reset_url = f"http://localhost:3000/reset-password?token={token}"
            
            message = MessageSchema(
                subject="Réinitialisation de mot de passe - Peso",
                recipients=[email],
                body=f"""
                <html>
                    <body>
                        <h2>Réinitialisation de mot de passe</h2>
                        <p>Vous avez demandé la réinitialisation de votre mot de passe.</p>
                        <p>Cliquez sur le lien ci-dessous pour définir un nouveau mot de passe :</p>
                        <p><a href="{reset_url}">Réinitialiser mon mot de passe</a></p>
                        <p>Si le lien ne fonctionne pas, copiez et collez cette URL dans votre navigateur :</p>
                        <p>{reset_url}</p>
                        <p>Ce lien expirera dans 1 heure.</p>
                        <p>Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>
                        <p>Cordialement,<br>L'équipe Peso</p>
                    </body>
                </html>
                """,
                subtype="html"
            )
            
            await self.fastmail.send_message(message)
            logger.info(f"Password reset email sent to {email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send password reset email to {email}: {str(e)}")
            return False

    async def send_welcome_email(self, email: str, first_name: Optional[str] = None) -> bool:
        """Send welcome email after successful registration"""
        try:
            name = first_name or "Utilisateur"
            
            message = MessageSchema(
                subject="Bienvenue sur Peso !",
                recipients=[email],
                body=f"""
                <html>
                    <body>
                        <h2>Bienvenue sur Peso, {name} !</h2>
                        <p>Votre compte a été créé avec succès et votre email a été vérifié.</p>
                        <p>Vous pouvez maintenant commencer à suivre votre progression de perte de poids.</p>
                        <p>Connectez-vous à votre compte pour ajouter votre première entrée de poids.</p>
                        <p>Cordialement,<br>L'équipe Peso</p>
                    </body>
                </html>
                """,
                subtype="html"
            )
            
            await self.fastmail.send_message(message)
            logger.info(f"Welcome email sent to {email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send welcome email to {email}: {str(e)}")
            return False 