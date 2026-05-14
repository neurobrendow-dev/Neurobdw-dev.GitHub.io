-- =============================================================
-- Migration: Prontuário Multi-tenant
-- Permite que múltiplos médicos usem o sistema com isolamento
-- total de dados por doctor_id = auth.uid().
--
-- Execute no Supabase Dashboard → SQL Editor
-- =============================================================

-- 1. Perfil do médico (informações personalizáveis)
CREATE TABLE IF NOT EXISTS doctor_profiles (
  id            uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name  text NOT NULL DEFAULT '',       -- "Dr. João Silva"
  legal_name    text NOT NULL DEFAULT '',       -- Nome completo para receitas e assinaturas
  specialty     text NOT NULL DEFAULT '',       -- "Médico Cardiologista"
  crm_number    text NOT NULL DEFAULT '',       -- "12345"
  crm_uf        text NOT NULL DEFAULT '',       -- "SP"
  rqe           text DEFAULT '',               -- "RQE 9999" (opcional)
  address       text DEFAULT '',               -- Endereço do consultório
  city          text DEFAULT '',               -- "São Paulo - SP"
  phone         text DEFAULT '',
  email         text DEFAULT '',
  website       text DEFAULT '',
  onboarding_done boolean NOT NULL DEFAULT false,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE doctor_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Médico lê próprio perfil"    ON doctor_profiles;
DROP POLICY IF EXISTS "Médico cria próprio perfil"   ON doctor_profiles;
DROP POLICY IF EXISTS "Médico atualiza próprio perfil" ON doctor_profiles;

CREATE POLICY "Médico lê próprio perfil"
  ON doctor_profiles FOR SELECT USING (id = auth.uid());

CREATE POLICY "Médico cria próprio perfil"
  ON doctor_profiles FOR INSERT WITH CHECK (id = auth.uid());

CREATE POLICY "Médico atualiza próprio perfil"
  ON doctor_profiles FOR UPDATE USING (id = auth.uid());

-- 2. Adiciona doctor_id a todas as tabelas EMR
ALTER TABLE emr_patients        ADD COLUMN IF NOT EXISTS doctor_id uuid REFERENCES auth.users(id);
ALTER TABLE emr_medical_history ADD COLUMN IF NOT EXISTS doctor_id uuid REFERENCES auth.users(id);
ALTER TABLE emr_consultations   ADD COLUMN IF NOT EXISTS doctor_id uuid REFERENCES auth.users(id);
ALTER TABLE emr_documents       ADD COLUMN IF NOT EXISTS doctor_id uuid REFERENCES auth.users(id);
ALTER TABLE emr_health_plans    ADD COLUMN IF NOT EXISTS doctor_id uuid REFERENCES auth.users(id);
ALTER TABLE emr_exam_groups     ADD COLUMN IF NOT EXISTS doctor_id uuid REFERENCES auth.users(id);

-- 3. Índices para performance
CREATE INDEX IF NOT EXISTS emr_patients_doctor_idx        ON emr_patients(doctor_id);
CREATE INDEX IF NOT EXISTS emr_consultations_doctor_idx   ON emr_consultations(doctor_id);
CREATE INDEX IF NOT EXISTS emr_documents_doctor_idx       ON emr_documents(doctor_id);
CREATE INDEX IF NOT EXISTS emr_health_plans_doctor_idx    ON emr_health_plans(doctor_id);
CREATE INDEX IF NOT EXISTS emr_exam_groups_doctor_idx     ON emr_exam_groups(doctor_id);

-- 4. RLS nas tabelas EMR — médico vê/edita apenas seus próprios dados
--    (as políticas existentes de role='doctor' podem coexistir para o prontuário legado)

-- emr_patients
DROP POLICY IF EXISTS "Médico multi acessa próprios pacientes" ON emr_patients;
CREATE POLICY "Médico multi acessa próprios pacientes"
  ON emr_patients FOR ALL
  USING (doctor_id = auth.uid())
  WITH CHECK (doctor_id = auth.uid());

-- emr_medical_history
DROP POLICY IF EXISTS "Médico multi acessa próprio histórico" ON emr_medical_history;
CREATE POLICY "Médico multi acessa próprio histórico"
  ON emr_medical_history FOR ALL
  USING (doctor_id = auth.uid())
  WITH CHECK (doctor_id = auth.uid());

-- emr_consultations
DROP POLICY IF EXISTS "Médico multi acessa próprias consultas" ON emr_consultations;
CREATE POLICY "Médico multi acessa próprias consultas"
  ON emr_consultations FOR ALL
  USING (doctor_id = auth.uid())
  WITH CHECK (doctor_id = auth.uid());

-- emr_documents
DROP POLICY IF EXISTS "Médico multi acessa próprios documentos" ON emr_documents;
CREATE POLICY "Médico multi acessa próprios documentos"
  ON emr_documents FOR ALL
  USING (doctor_id = auth.uid())
  WITH CHECK (doctor_id = auth.uid());

-- emr_health_plans
DROP POLICY IF EXISTS "Médico multi acessa próprios convênios" ON emr_health_plans;
CREATE POLICY "Médico multi acessa próprios convênios"
  ON emr_health_plans FOR ALL
  USING (doctor_id = auth.uid())
  WITH CHECK (doctor_id = auth.uid());

-- emr_exam_groups
DROP POLICY IF EXISTS "Médico multi acessa próprios grupos de exame" ON emr_exam_groups;
CREATE POLICY "Médico multi acessa próprios grupos de exame"
  ON emr_exam_groups FOR ALL
  USING (doctor_id = auth.uid())
  WITH CHECK (doctor_id = auth.uid());

-- 5. A view emr_patient_summary precisa ser recriada incluindo doctor_id
--    Execute apenas se a view existir no seu projeto:
/*
DROP VIEW IF EXISTS emr_patient_summary;
CREATE VIEW emr_patient_summary AS
  SELECT
    p.id, p.full_name, p.birth_date, p.sex, p.cpf, p.phone,
    p.health_plan, p.doctor_id,
    COUNT(c.id)::int          AS total_consultations,
    MAX(c.consultation_date)  AS last_consultation_at
  FROM emr_patients p
  LEFT JOIN emr_consultations c ON c.patient_id = p.id AND c.doctor_id = p.doctor_id
  GROUP BY p.id;
*/

-- 6. (Opcional) Migrar dados existentes do Dr. Brendow:
--    Substitua <SEU_USER_ID> pelo UUID do seu usuário no Supabase Auth.
/*
UPDATE emr_patients        SET doctor_id = '<SEU_USER_ID>' WHERE doctor_id IS NULL;
UPDATE emr_medical_history SET doctor_id = '<SEU_USER_ID>' WHERE doctor_id IS NULL;
UPDATE emr_consultations   SET doctor_id = '<SEU_USER_ID>' WHERE doctor_id IS NULL;
UPDATE emr_documents       SET doctor_id = '<SEU_USER_ID>' WHERE doctor_id IS NULL;
UPDATE emr_health_plans    SET doctor_id = '<SEU_USER_ID>' WHERE doctor_id IS NULL;
UPDATE emr_exam_groups     SET doctor_id = '<SEU_USER_ID>' WHERE doctor_id IS NULL;

INSERT INTO doctor_profiles (id, display_name, legal_name, specialty, crm_number, crm_uf, rqe, address, city, phone, email, website, onboarding_done)
VALUES (
  '<SEU_USER_ID>',
  'Dr. Brendow Mártin', 'Brendow Martin Freitas Gadelha',
  'Médico Neurologista', '22318', 'CE', 'RQE 18935',
  'Rua Senador Pompeu, 834, Sala 415', 'Fortaleza - CE',
  '(85) 98202-0796', 'neuro.brendow@gmail.com', 'neurobrendow.com.br',
  true
) ON CONFLICT (id) DO NOTHING;
*/
