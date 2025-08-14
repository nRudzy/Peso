from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from app.core.config import settings
from typing import Optional
import logging

logger = logging.getLogger(__name__)


class EmailService:
    def __init__(self):
        # Configure email settings based on environment
        use_credentials = bool(settings.SMTP_USER and settings.SMTP_PASSWORD)
        use_tls = settings.SMTP_HOST != "mailpit"  # Disable TLS for Mailpit

        self.conf = ConnectionConfig(
            MAIL_USERNAME=settings.SMTP_USER,
            MAIL_PASSWORD=settings.SMTP_PASSWORD,
            MAIL_FROM=settings.FROM_EMAIL,
            MAIL_PORT=settings.SMTP_PORT,
            MAIL_SERVER=settings.SMTP_HOST,
            MAIL_STARTTLS=use_tls,
            MAIL_SSL_TLS=False,
            USE_CREDENTIALS=use_credentials,
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
                subtype="html",
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
                subtype="html",
            )

            await self.fastmail.send_message(message)
            logger.info(f"Password reset email sent to {email}")
            return True

        except Exception as e:
            logger.error(f"Failed to send password reset email to {email}: {str(e)}")
            return False

    async def send_welcome_email(
        self, email: str, first_name: Optional[str] = None
    ) -> bool:
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
                subtype="html",
            )

            await self.fastmail.send_message(message)
            logger.info(f"Welcome email sent to {email}")
            return True

        except Exception as e:
            logger.error(f"Failed to send welcome email to {email}: {str(e)}")
            return False

    async def send_weekly_progress_email(
        self, 
        email: str, 
        first_name: str,
        weight_stats: dict,
        journal_stats: dict,
        weight_change: float,
        target_weight: float,
        current_weight: float
    ) -> bool:
        """Send weekly progress summary email with personalized encouragement"""
        try:
            # Generate personalized encouragement based on progress
            encouragement = self._generate_encouragement(weight_change, journal_stats)
            
            # Format weight change
            weight_change_text = f"{weight_change:+.1f} kg" if weight_change != 0 else "0 kg"
            
            # Calculate progress percentage towards target
            if target_weight and current_weight:
                initial_weight = current_weight - weight_change
                total_to_lose = initial_weight - target_weight
                progress_percentage = min(100, max(0, ((initial_weight - current_weight) / total_to_lose) * 100)) if total_to_lose > 0 else 0
            else:
                progress_percentage = 0

            message = MessageSchema(
                subject="📊 Votre résumé hebdomadaire Peso",
                recipients=[email],
                body=f"""
                <html>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                            <h2 style="color: #2563eb;">Bonjour {first_name} ! 👋</h2>
                            
                            <p>Voici votre résumé hebdomadaire de progression :</p>
                            
                            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                <h3 style="color: #1e40af; margin-top: 0;">📈 Progression du poids</h3>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="margin: 10px 0;">🎯 <strong>Variation cette semaine :</strong> {weight_change_text}</li>
                                    <li style="margin: 10px 0;">⚖️ <strong>Poids actuel :</strong> {current_weight} kg</li>
                                    <li style="margin: 10px 0;">📊 <strong>Progression vers l'objectif :</strong> {progress_percentage:.1f}%</li>
                                </ul>
                            </div>
                            
                            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                <h3 style="color: #1e40af; margin-top: 0;">📝 Journal quotidien</h3>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="margin: 10px 0;">📅 <strong>Entrées journalières :</strong> {journal_stats.get('total_entries', 0)}</li>
                                    <li style="margin: 10px 0;">😴 <strong>Qualité de sommeil moyenne :</strong> {journal_stats.get('average_sleep_quality', 'N/A')}/5</li>
                                    <li style="margin: 10px 0;">⚡ <strong>Niveau d'énergie moyen :</strong> {journal_stats.get('average_energy_level', 'N/A')}/5</li>
                                </ul>
                            </div>
                            
                            <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
                                <h3 style="color: #1e40af; margin-top: 0;">💪 Encouragement personnalisé</h3>
                                <p style="font-style: italic; margin: 0;">{encouragement}</p>
                            </div>
                            
                            <p style="text-align: center; margin-top: 30px;">
                                <a href="http://localhost:3000/dashboard" 
                                   style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                                    Voir mon tableau de bord
                                </a>
                            </p>
                            
                            <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px;">
                                Continuez votre excellent travail ! 💪<br>
                                L'équipe Peso
                            </p>
                        </div>
                    </body>
                </html>
                """,
                subtype="html",
            )

            await self.fastmail.send_message(message)
            logger.info(f"Weekly progress email sent to {email}")
            return True

        except Exception as e:
            logger.error(f"Failed to send weekly progress email to {email}: {str(e)}")
            return False

    def _generate_encouragement(self, weight_change: float, journal_stats: dict) -> str:
        """Generate personalized encouragement based on user's progress and journal data"""
        encouragements = []
        
        # Weight-based encouragement
        if weight_change < 0:
            encouragements.append("Félicitations ! Vous avez perdu du poids cette semaine. Votre persévérance porte ses fruits ! 🌟")
        elif weight_change > 0:
            encouragements.append("Ne vous découragez pas ! Les fluctuations de poids sont normales. Concentrez-vous sur vos habitudes saines. 💪")
        else:
            encouragements.append("Vous maintenez votre poids stable, c'est déjà un excellent résultat ! Continuez sur cette lancée. 🎯")
        
        # Sleep-based encouragement
        avg_sleep = journal_stats.get('average_sleep_quality')
        if avg_sleep is not None:
            if avg_sleep >= 4:
                encouragements.append("Votre qualité de sommeil est excellente ! Cela contribue grandement à votre bien-être. 😴✨")
            elif avg_sleep >= 3:
                encouragements.append("Votre sommeil est correct. Essayez de vous coucher un peu plus tôt pour améliorer encore plus votre récupération. 🌙")
            else:
                encouragements.append("Votre sommeil pourrait être amélioré. Un bon repos est essentiel pour votre santé et votre progression. 💤")
        
        # Energy-based encouragement
        avg_energy = journal_stats.get('average_energy_level')
        if avg_energy is not None:
            if avg_energy >= 4:
                encouragements.append("Votre niveau d'énergie est au top ! Gardez cette dynamique positive. ⚡")
            elif avg_energy >= 3:
                encouragements.append("Votre énergie est stable. Continuez à maintenir vos bonnes habitudes. 🔋")
            else:
                encouragements.append("Votre énergie semble un peu basse. N'oubliez pas de bien vous hydrater et de faire de l'exercice modéré. 💧")
        
        # Combine encouragements
        if encouragements:
            return " ".join(encouragements[:2])  # Limit to 2 encouragements
        else:
            return "Continuez votre excellent travail ! Chaque petit pas compte vers votre objectif. 🎯"
