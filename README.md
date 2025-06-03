# Interface de Loja - Projeto React Native

Este projeto é uma demonstração prática do meu aprendizado em React Native, desenvolvendo uma interface de loja completa com diversas funcionalidades.

## 🚀 Funcionalidades

- **Navegação entre Telas**: Implementação de navegação usando Expo Router
- **Listagem de Produtos**: Exibição de produtos em cards com imagens e informações
- **Categorias**: Organização dos produtos por categorias
- **Detalhes do Produto**: Visualização detalhada de cada produto
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- **Componentes Reutilizáveis**: Criação de componentes customizados

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- Expo Router
- React Navigation

## 📱 Telas do Aplicativo

### Home
- Lista principal de produtos
- Navegação para categorias
- Botão de retorno personalizado

### Categorias
- Lista de categorias disponíveis
- Navegação para produtos específicos de cada categoria
- Interface intuitiva

### Detalhes do Produto
- Visualização completa do produto
- Imagem em destaque
- Descrição detalhada
- Preço
- Botão de compra

### Sobre
- Informações sobre o desenvolvedor
- Links para redes sociais
- Foto de perfil
- Descrição pessoal

## 🎨 Estilização

- Design moderno e limpo
- Cores harmoniosas
- Componentes estilizados
- Animações suaves
- Feedback visual nas interações

## 📦 Estrutura do Projeto

```
interface-loja/
├── app/
│   ├── (tabs)/
│   │   ├── home.tsx
│   │   ├── about.tsx
│   │   └── categories/
│   │       ├── list.tsx
│   │       └── [id].tsx
│   └── product/
│       └── [id].tsx
├── components/
│   ├── category-item.tsx
│   └── products-item.tsx
├── services/
│   ├── category.ts
│   └── product.ts
└── assets/
    └── images/
```

## 🚀 Como Executar

1. Clone o repositório
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npx expo start
```

## 📝 Aprendizados

Este projeto foi desenvolvido como forma de praticar e demonstrar meus conhecimentos em:
- Desenvolvimento mobile com React Native
- Navegação entre telas
- Gerenciamento de estado
- Componentização
- Estilização
- TypeScript
- Boas práticas de desenvolvimento

## 👨‍💻 Autor

Rafael Reis
- GitHub: [RafaGomesReis](https://github.com/RafaGomesReis)
- Instagram: [@rfl_reiss](https://www.instagram.com/rfl_reiss/)

## 📄 Licença

Este projeto está sob a licença MIT. 