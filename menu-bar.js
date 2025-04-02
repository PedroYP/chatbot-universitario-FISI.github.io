let menu = document.querySelector('.menu-bar');
let menu_select = document.querySelector('.menu-bar__input');
let menuOptions = document.querySelector('.menu-bar__options');
let visual_title = document.getElementById('malla-title');

//cerrar menu si haces click fuera
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target)) { // Si el clic no está dentro del menú
        menu.classList.remove('active');
    }
});

//mostrar menu
menu_select.addEventListener('click', function(event) {
    menu.classList.toggle('active');
    event.stopPropagation(); //por si acaso
});

// Función para manejar la selección de opciones
let opciones = document.querySelectorAll('.menu-bar__ep');
opciones.forEach(opcion => {
    opcion.addEventListener('click', function() {
        // el texto del menu_select de acuerdo a lo seleccionado (obvio)
        menu_select.value = opcion.textContent;
        
        actualizarEAP(menu_select.value);

        //cerrar menu tras haber seleccionado la opcion
        menu.classList.remove('active');
    });
});

function actualizarEAP(EAP) {
    document.getElementById('chat-container').innerHTML = ''
    console.log("HAS SELECCIONADO: ",EAP, "🤖");
    if(EAP === "Ingeniería de Software"){
        cursos = cursos_software;
    }else if(EAP === "Ingeniería de Sistemas"){
        cursos = cursos_sistemas;
    }else if(EAP === "Ciencias de la Computación"){
        cursos = cursos_cc;
    }
    const listaCursos = Object.values(cursos);
    document.getElementById('visual').innerHTML = '';
    bot.cursosAprobados.clear(); //Para empezar una sesion nueva
    setTimeout(() => {
        generarArbol(listaCursos, 'visual');
        visual_title.textContent = "Malla Académica Curricular de "+EAP; //titulo de visual
    }, 600);
    setTimeout(() => {
        const bot = new Chatbot();
        addMessage(`Has seleccionado ${EAP}`, false);
        addMessage("Puedes preguntarme sobre horarios, créditos y requisitos de cursos.", false);
    }, 300);
}



//ELECCION INICIAL DEL CURSO

document.addEventListener('DOMContentLoaded', function() {
    const inputContainer = document.querySelector('.input-container');
    const menuBarInput = document.querySelector('.menu-bar');
    const helpText = document.querySelector('.help-text');
  
    inputContainer.classList.add('disabled');
    menuBarInput.classList.add('disabled');
    helpText.classList.add('disabled');
  });
  
let eap_inicial = document.querySelectorAll('.option-message--inicial');
eap_inicial.forEach(eap => {
    eap.addEventListener('click', function() {
        actualizarEAP(eap.innerHTML);
        menu_select = document.querySelector('.menu-bar__input');
        menu_select.value = eap.textContent;
        const inputContainer = document.querySelector('.input-container');
        const menuBarInput = document.querySelector('.menu-bar');
        const helpText = document.querySelector('.help-text');
      
        setTimeout(() => {
            inputContainer.classList.remove('disabled');
            menuBarInput.classList.remove('disabled');
            helpText.classList.remove('disabled');
        }, 300)

    });
});