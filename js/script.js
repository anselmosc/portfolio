function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    //Alterar imagem do perfil
    const img = document.querySelector("#profile img");

    //Condicional para verificar se a classe "light" foi adicionada ao elemento HTML
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./img/imagem linkedin.jfif");
    } else {
        img.setAttribute("src", "./img/Anselmo_social.jpeg");
    }        

    }
