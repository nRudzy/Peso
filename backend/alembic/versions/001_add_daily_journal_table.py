"""add daily journal table

Revision ID: 001
Revises: 
Create Date: 2024-01-01 12:00:00.000000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '001'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Create daily_journals table
    op.create_table('daily_journals',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('date', sa.DateTime(timezone=True), nullable=False),
        sa.Column('sleep_quality', sa.Integer(), nullable=True),
        sa.Column('energy_level', sa.Integer(), nullable=True),
        sa.Column('notes', sa.Text(), nullable=True),
        sa.Column('user_id', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    
    # Create index on user_id for better performance
    op.create_index(op.f('ix_daily_journals_id'), 'daily_journals', ['id'], unique=False)
    op.create_index(op.f('ix_daily_journals_user_id'), 'daily_journals', ['user_id'], unique=False)
    op.create_index(op.f('ix_daily_journals_date'), 'daily_journals', ['date'], unique=False)


def downgrade() -> None:
    # Drop indexes
    op.drop_index(op.f('ix_daily_journals_date'), table_name='daily_journals')
    op.drop_index(op.f('ix_daily_journals_user_id'), table_name='daily_journals')
    op.drop_index(op.f('ix_daily_journals_id'), table_name='daily_journals')
    
    # Drop table
    op.drop_table('daily_journals')
