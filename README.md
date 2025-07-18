# 🍰 Doce Sabor - Doceria Artesanal (Site Estático de Portfólio)

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)

Este é um projeto de site **fictício** desenvolvido com o propósito de demonstrar minhas habilidades em desenvolvimento web **front-end**, design e criação de interfaces de usuário. Ele simula a presença online de uma doceria artesanal, focando em um design inovador, vibrante e convidativo.

---

## ✨ Visão Geral do Projeto

O site "Doce Sabor" é uma vitrine virtual para uma doceria artesanal, projetado para atrair clientes através de um visual apetitoso e uma experiência de navegação agradável. O foco principal foi a criação de um design visualmente rico que transmita a essura dos doces e o aconchego do ambiente.

---

## 🚀 Tecnologias Utilizadas

* **HTML5**: Estruturação semântica do conteúdo da página.
* **CSS3**: Estilização completa do layout, com foco em:
    * Paleta de cores vibrantes e harmoniosas inspiradas em doces.
    * Design responsivo para diversas telas (mobile, tablet, desktop).
    * Uso de variáveis CSS para fácil manutenção da paleta.
* **JavaScript**: Para adicionar interatividade e efeitos visuais sutis:
    * Animação de "Scroll Reveal" (elementos aparecendo suavemente ao rolar).
    * Efeito Parallax na seção principal (Hero Section).
    * Navegação suave (smooth scroll) entre as seções.
    * Sistema de Lightbox/Carrossel de imagens para a galeria.
* **Font Awesome**: Para ícones modernos e escaláveis.
* **Google Fonts**: Para tipografia atraente (`Dancing Script` para títulos e `Open Sans` para o corpo).
* **Git & GitHub**: Controle de versão e hospedagem do código-fonte.

---

## ✨ Funcionalidades

O site "Doce Sabor" apresenta as seguintes seções e características:

* **Header & Navegação:** Um cabeçalho moderno com logo e navegação intuitiva para as seções da página.
* **Hero Section:** Uma seção de destaque com uma mensagem convidativa e efeito parallax.
* **Sobre Nós:** Detalhes sobre a história e a paixão por trás da doceria.
* **Nosso Menu:** Exibição de produtos principais com fotos, descrições e preços, em um layout de grade atraente.
* **Galeria de Imagens ("Momentos de Doçura"):**
    * Grid de miniaturas de fotos de alta qualidade de doces e do ambiente da doceria.
    * Sistema de **Lightbox/Carrossel:** Ao clicar em uma miniatura, uma janela modal se abre exibindo a imagem ampliada e permitindo a navegação entre as fotos da galeria.
* **Seção de Contato:** Informações de contato, horário de funcionamento e um formulário de contato estático.
* **Rodapé:** Informações de copyright e links para redes sociais.
* **Animações e Interatividade:** Transições suaves em hover, elementos que surgem ao rolar a página para uma experiência dinâmica.

---

## 🛠️ Como Rodar o Projeto Localmente

Este é um projeto **estático** e muito fácil de configurar!

### Pré-requisitos
* Um navegador web moderno (Chrome, Firefox, Edge, Safari, etc.).

### Configuração
1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/doceria-doce-sabor.git](https://github.com/seu-usuario/doceria-doce-sabor.git)
    ```
    Navegue até a pasta do projeto:
    ```bash
    cd doceria-doce-sabor
    ```

2.  **Abra no Navegador:**
    * Você pode simplesmente abrir o arquivo `index.html` diretamente no seu navegador. Navegue até a pasta onde clonou o projeto e clique duas vezes em `index.html`.
    * **Alternativa (Recomendada para desenvolvimento):** Use uma extensão como "Live Server" (para VS Code) ou inicie um servidor HTTP simples na pasta raiz do projeto. Isso garante que todos os caminhos de recursos (CSS, JS, Imagens) sejam carregados corretamente, especialmente se você tiver problemas de CORS com imagens de placeholders.

### Estrutura de Pastas (Essencial)
Certifique-se de que a estrutura de pastas dentro do projeto está conforme abaixo para que os caminhos dos assets funcionem corretamente:

doceria-doce-sabor/
├── index.html                  # Página principal do site
├── public/
│   ├── css/
│   │   └── style.css           # Estilos CSS do site
│   ├── js/
│   │   └── script.js           # Lógica JavaScript para animações e galeria
│   └── uploads/
│       └── img/                # Imagens de doces e ambiente (miniaturas e full-size)
│           ├── chocolate-cake.png
│           ├── brigadeiro-gourmet.png
│           ├── ... (todas as suas imagens)
│           └── galery-1-full.png # Exemplo de imagem de galeria em tamanho real
└── README.md                   # Este arquivo

---

## 🎯 Melhorias Futuras (Roadmap)

* **Formulário de Contato Funcional:** Integrar um serviço de backend (PHP/Node.js) ou um serviço de terceiros (ex: Formspree) para enviar mensagens do formulário de contato.
* **Páginas Internas:** Criar páginas separadas para "Sobre Nós", "Menu Completo", "Eventos/Encomendas".
* **Sistema de Pedidos Online:** (Projeto mais complexo) Adicionar um carrinho de compras e sistema de pedidos.
* **Otimização de Performance:** Otimizar o carregamento de imagens e assets para uma performance ainda mais rápida.
* **Mais Animações:** Explorar bibliotecas de animação CSS/JS para efeitos mais complexos.

---

## 👨‍💻 Autor

* **Mika** - [LinkedIn](https://www.linkedin.com/in/gustavo-ev) | [Portfólio](https://gustavoevieira.github.io/portfolio/) | [GitHub](https://github.com/gustavoevieira)

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.
