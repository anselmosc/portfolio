function toggleMode() { //Função que alterna entre os modos claro e escuro
    const html = document.documentElement; //Seleciona o elemento HTML (<html>) da página
    html.classList.toggle("light"); //Alterna a classe light no elemento HTML. Se a classe existir, ela é removida; se não, ela é adicionada

    //Alterar imagem do perfil
    const img = document.querySelector("#profile img"); //Seleciona a imagem dentro do elemento com o id profile (a foto do perfil)

    //Condicional para verificar se a classe "light" foi adicionada ao elemento HTML
    if (html.classList.contains("light")) { //Verifica se o elemento HTMLcontém a classe light (modo claro)
        img.setAttribute("src", "./img/imagem linkedin.jfif"); //Se estiver no modo claro, altera a imagem
    } else {
        img.setAttribute("src", "./img/Anselmo_social.jpeg"); //Se não estiver no modo claro (modo escuro), mantém ou coloca a imagem
    }        

    }
