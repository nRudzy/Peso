<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240101000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Création des tables User et WeightEntry';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE "user" (id SERIAL NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, name VARCHAR(255) DEFAULT NULL, gender VARCHAR(10) NOT NULL, age INTEGER NOT NULL, height DOUBLE PRECISION NOT NULL, initial_weight DOUBLE PRECISION NOT NULL, target_weight DOUBLE PRECISION NOT NULL, weight_unit VARCHAR(3) NOT NULL, height_unit VARCHAR(4) NOT NULL, is_profile_public BOOLEAN NOT NULL, is_email_verified BOOLEAN NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
        $this->addSql('CREATE TABLE weight_entry (id SERIAL NOT NULL, user_id INTEGER NOT NULL, weight DOUBLE PRECISION NOT NULL, date TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, comment TEXT DEFAULT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_WEIGHT_ENTRY_USER_ID ON weight_entry (user_id)');
        $this->addSql('ALTER TABLE weight_entry ADD CONSTRAINT FK_WEIGHT_ENTRY_USER_ID FOREIGN KEY (user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE weight_entry DROP CONSTRAINT FK_WEIGHT_ENTRY_USER_ID');
        $this->addSql('DROP INDEX IDX_WEIGHT_ENTRY_USER_ID');
        $this->addSql('DROP TABLE weight_entry');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74');
        $this->addSql('DROP TABLE "user"');
    }
} 