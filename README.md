# 📘 Teste Cogna

## 🚀 Visão geral do projeto

Este projeto é uma aplicação full-stack baseada em:

- Next.js (App Router) no frontend
- Strapi (Headless CMS) no backend
- GraphQL API para comunicação entre frontend e CMS
- Render para deploy do backend e frontend

O objetivo é gerar páginas dinâmicas baseadas em conteúdo do CMS, com SEO completo e estrutura escalável.

---

## 🧱 Stack utilizada

### Frontend

- Next.js 16 (App Router)
- TypeScript

### Backend

- Strapi v5
- GraphQL plugin

### Infra

- Render (Strapi/Next.js)

---

## 📁 Estrutura de rotas

/categoria → Página hub (ex: soluções)
/categoria/slug → Página dinâmica (conteúdo)

Exemplo:

/solucoes  
/solucoes/ensino-superior

---

## ⚙️ Funcionalidades implementadas

### 🧩 CMS dinâmico (Strapi)

- Criação de páginas via Strapi
- Componentes reutilizáveis (Hero, CTA, Soluções etc.)
- Renderização baseada em \_\_typename

---

### 🔌 Integração GraphQL

- Queries dinâmicas (getPage)
- Filtros por slug e categoria
- Consumo de API Strapi no Next.js

---

### 🧱 Renderização de blocos

Sistema de componentes dinâmicos:

- HeroBanner
- SolutionsSection
- Testimonials
- CTA Section
- Education Hero
- Benefits Section

---

## 🤖 Ferramentas utilizadas (IA e apoio)

Durante o desenvolvimento, foram utilizadas as seguintes ferramentas de apoio:

- **ChatGPT**
    - Auxílio na resolução de erros
    - Melhoria de arquitetura do projeto
    - Criação e evolução do design system
    - Suporte na integração Next.js + Strapi
    - Explicação de conceitos de SEO, deploy e GraphQL

- **GitHub Copilot**
    - Autocompletar código no desenvolvimento
    - Auxílio na escrita de funções e componentes React
    - Agilidade na implementação de padrões repetitivos
    - Commits semânticos

- **Google Stitch**
    - Criação do design inicial da interface
    - Prototipação visual do projeto
    - Base para estrutura de UI/UX

---

## 🎨 Design utilizado

O design do projeto foi criado no Figma abaixo:

🔗 https://www.figma.com/design/0deL1E3Dmblv4Nm2eImN78/Teste-Cogna-Educa%C3%A7%C3%A3o?node-id=0-1&t=flwPG7h5BLPjR4A6-1

---

## 🚀 Deploy do projeto

### Frontend (Next.js)

🔗 https://teste-cogna.onrender.com

### Backend (Strapi)

🔗 https://perfect-acoustics-ff59d9f611.strapiapp.com/admin

---

## 📌 Resultado final

O projeto entrega:

- CMS totalmente editável via Strapi
- Páginas dinâmicas geradas automaticamente
- SEO completo por página (title, description, OG)
- Estrutura escalável de componentes
- Deploy funcional em ambiente de produção
