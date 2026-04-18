![Capa do projeto](src/assets/ecommerce.jpeg)

## Ecommerce (Front-end)

Aplicação de e-commerce construída em React com catálogo vindo do **Firestore** (Firebase) e autenticação via **Firebase Auth**. O fluxo de pagamento usa um **backend HTTP** (configurado por `VITE_API_URL`) para criar a sessão de checkout e redirecionar o usuário para o provedor de pagamento.

## Funcionalidades

- **Home** com seções de categorias/destaques
- **Explorar categorias** e visualizar produtos por categoria
- **Carrinho** (drawer) com:
  - adicionar/remover itens
  - aumentar/diminuir quantidades
  - totalizador
  - persistência no navegador (Zustand persist)
- **Autenticação**
  - login com email/senha (Firebase Auth)
  - login com Google (popup)
  - cadastro com email/senha + criação do usuário no Firestore
- **Checkout**
  - cria sessão no backend (`POST /create-checkout-session`)
  - redireciona para `data.url`
  - página de confirmação lê `?success=true|false` e limpa o carrinho em sucesso

## Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **React Router 7**
- **Tailwind CSS 4** (`@tailwindcss/vite`) + `tailwind-merge`
- **Zustand** (estado global + persistência do carrinho)
- **Firebase** (Auth + Firestore)
- **Axios** (integração com backend do checkout)
- **Vitest** + Testing Library (testes unitários e de integração)
- **ESLint + Prettier** (com `prettier-plugin-tailwindcss`)

## Arquitetura (alto nível)

- **Dados de catálogo**: coleção `categories` no Firestore.
- **Usuários**: coleção `users` no Firestore + sessão no Firebase Auth.
- **Carrinho**: store Zustand em `cart-store` (persistido como `cart-products`).
- **Rotas**: `/`, `/explore`, `/category/:id`, `/checkout`, `/payment-confirmation`, `/login`, `/signup`.

## Backend integrado

Este front usa **dois “backends”**:

1) **Firebase (BaaS)**
- Auth: login/cadastro + Google
- Firestore: `categories` (catálogo) e `users` (perfil)

2) **Backend HTTP do Checkout**
- Base URL em `VITE_API_URL`
- Endpoint esperado: `POST {VITE_API_URL}/create-checkout-session`
- Body: `{ products: CartProduct[] }`
- Resposta: `{ url: string }` (o front faz `window.location = url`)
- O provedor de pagamento retorna para `/payment-confirmation?success=true|false` (ou `canceled=true`)

## Variáveis de ambiente

Crie um `.env` na raiz (Vite):

```env
VITE_API_URL=http://localhost:3333

VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

## Como rodar

```bash
npm install
npm run dev
```

## Testes

```bash
npm run test
npm run test:ui
npm run test:coverage
```

## Seed de dados (Firestore)

Existe um script em `src/scripts/firebase-script.cjs` para popular categorias/produtos no Firestore. Use apenas em ambiente de desenvolvimento e evite expor credenciais/chaves em repositório público.

## Futuras features (ideias)

- **Busca real** (por nome/categoria) e filtros (preço, ordenação)
- **Página de produto** + galeria e avaliações
- **Página de favoritos**
- **Cupons e frete** no checkout
- **Orders** no Firestore (histórico de compras com todas as informações de entrega)
- **Novas coleções no firestore** orders, favorites, address e cart(para uma melhor persistência, atualmente com localStorage)
- **Melhor tratamento de erros** (toast/alertas + observabilidade)
- **Futuros testes e refatorações nos códigos existentes**

