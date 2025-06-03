    const meuBotao = document.getElementById("meubtn");
    const menu = document.getElementById("menu");

    meuBotao.addEventListener("click", function() {
       if (menu.style.visibility === "hidden"){
        menu.style.visibility = "visible"
       }
       else{
        menu.style.visibility = "hidden"
       }
    });