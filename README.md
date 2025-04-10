# 🚗 RUIDCAR — Sistema de Agendamento de Diagnóstico Veicular

Plataforma web para conectar oficinas mecânicas e motoristas, permitindo o agendamento de diagnósticos veiculares de forma prática, organizada e eficiente.

## 📌 Visão Geral

O **RUIDCAR** facilita o processo de marcação de diagnósticos veiculares, permitindo que clientes escolham horários disponíveis em oficinas cadastradas. Oficinas têm total controle sobre sua agenda, podendo gerenciar atendimentos, horários e avaliações.

---

## ⚙️ Tecnologias Utilizadas

- **Frontend:** React + TailwindCSS
- **Backend:** Node.js + Express
- **Banco de Dados:** PostgreSQL
- **Autenticação:** JWT
- **Email (Notificações):** Nodemailer + SMTP (Google Workspace)
- **Hospedagem:** (ex: Render, Railway ou Vercel)

---

## 📁 Estrutura do Projeto (inicial)

```plaintext
ruidcar/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
├── database/
│   └── schema.sql
├── LICENSE
└── README.md
