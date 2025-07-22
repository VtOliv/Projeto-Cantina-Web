# Projeto Cantina Web

Interface web para o sistema de gerenciamento de cantina. Este projeto consome a API do [Projeto Cantina Service](https://github.com/VtOliv/Projeto-Cantina-Service) e oferece uma experiência interativa para clientes e operadores.

---

## 🔗 Acesso Online

O sistema está disponível gratuitamente para testes no seguinte endereço:

**➞ [https://projeto-cantina-web.onrender.com/](https://projeto-cantina-web.onrender.com/)**

---

## 🪰 Tecnologias Utilizadas

* **Angular 13**
* **Angular Material**
* **RxJS**
* **TypeScript**
* **HTML/CSS**

---

## ✨ Funcionalidades

* Visualização e filtro de produtos por categoria
* Exibição de cards com informações de produtos
* Tabela com produtos e paginação
* Filtro por nome/descrição
* Cadastro e gerenciamento de produtos via dialog
* Interface responsiva com menu lateral

---

## 📁 Estrutura do Projeto

```bash
src/
 ├── app/
 │   ├── components/           # Componentes reutilizáveis (cards, tabelas, dialogs)
 │   ├── pages/                # Páginas principais (ex: home, gerenciamento)
 │   ├── services/             # Serviços de comunicação com API
 │   └── app-routing.module.ts
 └── assets/                   # Imagens e recursos estáticos
```

---

## 🚀 Como Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/VtOliv/Projeto-Cantina-Web.git
cd Projeto-Cantina-Web
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar o projeto

```bash
ng serve
```

Acesse em `http://localhost:4200/`

---

## ⚙️ Configuração de API

Certifique-se de que a API [Projeto Cantina Service](https://github.com/VtOliv/Projeto-Cantina-Service) esteja rodando localmente ou atualize as URLs nos serviços para apontar para o endpoint correto.

---

## 📞 Contato

Desenvolvido por **Vitor Oliveira**

* [LinkedIn](https://www.linkedin.com/in/vtoliv/)
* [GitHub](https://github.com/VtOliv)

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
