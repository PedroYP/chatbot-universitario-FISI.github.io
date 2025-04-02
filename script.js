



let cursos;







class Chatbot {
    constructor() {
        this.cursosAprobados = new Set();  //Set para evitar duplicados, strings
        this.historial = [];
    }

    // Función para aprobar un curso y sus requisitos
    aprobarCurso(curso) {
        // Verificar si el curso ya fue aprobado
        if (this.cursosAprobados.has(curso)) {
            return `El curso ${curso} ya ha sido aprobado.`;
        }

        // Aprobamos el curso y los requisitos previos usando DFS
        this.cursosAprobados.add(curso);
        this.aprobarRequisitosPrevios(curso);

        resaltarNodos(cursos[curso], 'yellow', "800", "black");
        buscarNodoPorTexto(curso).classList.add('aprobado');


        console.log("Se procede a marcar los requisitos aprobados de ", curso);

        return `Has aprobado el curso <strong>${curso}</strong>.`;
    }

    //RECURSIVIDAD
    aprobarRequisitosPrevios(curso) { //Curso es un string
        console.log("recurseando: ", curso)
        if (cursos[curso].requisitos.size > 0) { //accedo a los requisitos del obj correspondiente al nombre del string (este if ya no se ejecutará cuando se llegue al curso primitivo, sin requisitos)
            cursos[curso].requisitos.forEach(requisito => { //obtengo los nombrs (string)
            this.aprobarRequisitosPrevios(requisito.nombre); //recursividad, aplico este metodo a cada requisito de los requisitos
        });
        }

        // Si este requisito no ha sido aprobado previamente, aprobarlo
        if (!this.cursosAprobados.has(curso)) {
            this.cursosAprobados.add(curso);
            resaltarNodos(cursos[curso], 'yellow', "800", "black");
            buscarNodoPorTexto(curso).classList.add('aprobado');
            
        }    
    }

    // Función para verificar si un curso puede ser tomado
    puedeTomar(curso) {
        const requisitos = cursos[curso].requisitos;
        const nombresRequisitosFaltantes = [];
        console.log("REQUISITOS EN BRUTO: ",requisitos);
        console.log("APROBADOS",this.cursosAprobados);

        requisitos.forEach(requisito => {
        if (!this.cursosAprobados.has(requisito.nombre)) { //Si el requisito no está en mi lista de aprobados
            nombresRequisitosFaltantes.push(requisito.nombre);
        }
        });


        if (nombresRequisitosFaltantes.length === 0) {
            return `Sí, puedes tomar <strong>${curso}</strong>.`;
        } else {
            return `No puedes tomar <strong>${curso}</strong> aún. Faltan los siguientes cursos: </br>- ${nombresRequisitosFaltantes.join('</br>- ')}`;
        }
    }

    // Función para obtener los cursos aprobados por el usuario
    obtenerCursosAprobados() {
        if (this.cursosAprobados.size === 0) {
            return "Aún no has aprobado ningún curso.";
        }
        const cursosAprobadosOrdenado = this.ordenarPorCiclo(this.cursosAprobados);
        let texto = '';

        for (let ciclo in cursosAprobadosOrdenado) {
            let cursosAprobadosNombres = cursosAprobadosOrdenado[ciclo].map(curso => curso.nombre).join(', ');
            texto += `</br><strong>Ciclo ${ciclo}</strong>: ${cursosAprobadosNombres}.`;
        }
        return `Tus cursos aprobados: ${texto}`;
    }

    averiguarCiclo(curso){
        return `El curso <strong>${curso}</strong> es de ${cursos[curso].ciclo}° ciclo (Malla 2023)`;
    }

    averiguarHorario(curso){
        return `El horario de <strong>${curso}</strong> es: ${cursos[curso].horario}`;
    }

    averiguarProfesor(curso){
        return `El curso <strong>${curso}</strong> es dictado por: Prof. ${cursos[curso].profesor}`;
    }
    averiguarCreditos(curso){
        return `El curso <strong>${curso}</strong> vale ${cursos[curso].creditos} créditos`;
    }
    averiguarEstatus(curso){
        if(this.cursosAprobados.has(curso)){
            return `Estatus: <strong>APROBADO</strong>`
        }else{
            return `Estatus: <strong>NO APROBADO</strong>`
        }
    }
    averiguarRequisitos(curso){
        if (cursos[curso]) {
            const requisitos = cursos[curso].requisitos;
            if (requisitos.size === 0) {
                return `El curso ${curso} no tiene requisitos previos.`;
            } else {
                const nombresRequisitos = [...requisitos].map(curso => curso.nombre);
                return `Los requisitos para tomar <strong>${curso}</strong> son: </br>- ${nombresRequisitos.join('</br>- ')}`;
            }
        }else{
            return `Curso no encontrado en la Malla Académica 2023 de <strong>${menu_select.value}</strong>. Por favor, asegúrate de ingresar correctamente el nombre del curso.`
        }
    }


    //RESPUESTAS Y CASOS
    procesarPregunta(pregunta) {
        const preguntaLower = this.quitarTildes(pregunta.toLowerCase());
        const curso = this.extraerCursoDePregunta(pregunta);


        console.log("Pregunta: ",pregunta);
        console.log("Pregunta Lower: ",preguntaLower);
        console.log("Extraer Curso: ",this.extraerCursoDePregunta(pregunta));
        
        //RESUMEN
        if(preguntaLower === this.quitarTildes(curso.toLowerCase())||preguntaLower.includes("resumen")){
            const resumenCiclo = this.averiguarCiclo(curso);
            const resumenCreditos = this.averiguarCreditos(curso);
            const resumenProfesor = this.averiguarProfesor(curso);
            const resumenHorario = this.averiguarHorario(curso);
            const resumenEstatus = this.averiguarEstatus(curso);
            const resumenRequisitos = this.averiguarRequisitos(curso);

            
            return `RESUMEN: </br>-> ${resumenCiclo}</br>-> ${resumenCreditos}</br>-> ${resumenProfesor}</br>-> ${resumenHorario}</br>-> ${resumenEstatus}</br>-> ${resumenRequisitos}`;
        }

        // Cursos aprobados
        if (preguntaLower.includes('que cursos aprobe') || preguntaLower.includes('mis cursos') || preguntaLower.includes('cursos aprobados')) {
            return this.obtenerCursosAprobados();
        }

        // Puedo tomar un curso
        if (preguntaLower.includes('puedo tomar') || preguntaLower.includes('puedo llevar')) {
            if (!curso){ //Si el curso que ingreso no se identifico en la BD
                return `Dicho curso no se encuentra en la Malla Académica 2023 de <strong>${menu_select.value}</strong>. Por favor, asegúrate de ingresar el nombre del curso completo y sin errores.`;
            }
            if (this.cursosAprobados.has(curso)){
                return `Ya has aprobado <strong>${curso}</strong>`;
            }
            return this.puedeTomar(curso);
        }

        // REQUISITOS de un curso
        if (preguntaLower.includes('requisitos') || preguntaLower.includes('que necesito') || preguntaLower.includes('cuales son los requisitos')) {
            
            return this.averiguarRequisitos(curso);
        }

        // Si aprueba un curso
        if (preguntaLower.includes('aprobe') || preguntaLower.includes('aprobado')) {
            if (!curso) {
                return `Curso ${curso} no encontrado en la Malla Académica 2023 de <strong>${menu_select.value}</strong>. Por favor, asegúrate de ingresar correctamente el nombre completo del curso.`;
            }
            return this.aprobarCurso(curso);
        }


        // AVERIGUAR HORARIOS
        if (preguntaLower.includes('horario') || preguntaLower.includes('cuando')) {            
            if (!curso) {
                return "No se encontró horario para ese curso. Por favor, asegúrate de especificar correctamente el nombre completo del curso.";
            }
            
            return this.averiguarHorario(curso);
        }

        // AVERIGUAR PROFESORES
        if (preguntaLower.includes('ensena') || preguntaLower.includes('profesor') || preguntaLower.includes('dicta')){
            if (!curso){
                return `Dicho curso no se encuentra en la Malla Académica 2023 de <strong>${menu_select.value}</strong>. Por favor, asegúrate de ingresar el nombre del curso completo y sin errores.`;
            }
            return this.averiguarProfesor(curso);
        }

        // Averiguar CICLO
        if (preguntaLower.includes('ciclo') || preguntaLower.includes('semestre')){
            if (!curso){
                return `Dicho curso no se encuentra en la Malla Académica 2023 de <strong>${menu_select.value}</strong>. Por favor, asegúrate de ingresar el nombre del curso completo y sin errores.`;
            }
            return this.averiguarCiclo(curso);
        }


        //creditos
        if (preguntaLower.includes('creditos')){
            if(this.extraerCursoDePregunta(pregunta)){
                return this.averiguarCreditos(curso);
            }
            else{
                const totalCreditos = [...this.cursosAprobados].reduce((suma, curso) => suma + cursos[curso].creditos, 0);
                return `Tienes un total de <strong>${totalCreditos}</strong> créditos`;
            }
        }


        //PREGUNTAS LOGICAS
        if (preguntaLower.includes('evalua')){
            if(preguntaLower.includes(' and ')){
                const partes = preguntaLower.split(" and ");
                const cursoA = this.extraerCursoDePregunta(partes[0].trim()); //hasta antes del operador
                const cursoB = this.extraerCursoDePregunta(partes[1].trim()); //desde el operador hasta el final

                if(cursoA && cursoB){
                    var aprobadoA = this.cursosAprobados.has(cursoA);
                    var aprobadoB = this.cursosAprobados.has(cursoB);

                    if (partes[0].includes(" not ")){
                        aprobadoA = !aprobadoA;
                        console.log("SE HA IDENTIFICADO UN NOT EN: ",cursoA);

                    }
                    if ((" "+partes[1]).includes(" not ")){ //Se le agrega un espacio al inicio porque fue lo que perdio con el split(" and ")
                        aprobadoB = !aprobadoB;
                        console.log("SE HA IDENTIFICADO UN NOT EN: ",cursoB);

                    }

                    console.log("APROBADO A: ",aprobadoA);
                    console.log("APROBADO B: ",aprobadoB);


                    if (aprobadoA && aprobadoB) {
                        return "<strong>TRUE</strong>: Ambos aprobados.  "
                    }else{
                        return `<strong>FALSE</strong>: Al menos uno no fue aprobado. </br>- ${cursoA}, ${this.averiguarEstatus(cursoA)}</br>- ${cursoB}, ${this.averiguarEstatus(cursoB)}`
                    }
                }
                else{
                    return "No se ha podido traducir la proposicion logica. Asegurate de ingresar correctamente los nombres de los cursos."
                }
            }
            else if(preguntaLower.includes(' or ')){
                const partes = preguntaLower.split(" or ");
                const cursoA = this.extraerCursoDePregunta(partes[0].trim()); //hasta antes del operador
                const cursoB = this.extraerCursoDePregunta(partes[1].trim()); //desde el operador hasta el final

                if(cursoA && cursoB){
                    var aprobadoA = this.cursosAprobados.has(cursoA);
                    var aprobadoB = this.cursosAprobados.has(cursoB);

                    if (partes[0].includes(" not ")){
                        aprobadoA = !aprobadoA;
                        console.log("SE HA IDENTIFICADO UN NOT EN: ",cursoA);

                    }
                    if ((" "+partes[1]).includes(" not ")){ //Se le agrega un espacio al inicio porque fue lo que perdio con el split(" and ")
                        aprobadoB = !aprobadoB;
                        console.log("SE HA IDENTIFICADO UN NOT EN: ",cursoB);

                    }

                    console.log("APROBADO A: ",aprobadoA);
                    console.log("APROBADO B: ",aprobadoB);


                    if (aprobadoA || aprobadoB) {
                        return `<strong>TRUE</strong>: Has aprobado al menos uno. </br>- ${cursoA}, ${this.averiguarEstatus(cursoA)}</br>- ${cursoB}, ${this.averiguarEstatus(cursoB)}`
                    }else{
                        return "<strong>FALSE</strong>: No has aprobado ninguno."
                    }
                }
                else{
                    return "No se ha podido traducir la proposicion logica. Asegurate de ingresar correctamente los nombres de los cursos."
                }
            }
            else{
                return "No se ha podido traducir la proposicion logica. Recuerda que los operadores son AND/OR."
            }
        }

        

        // Menu Ayuda
        if (preguntaLower.includes('ayuda')) {
            return `Puedo ayudarte con:<br>
            - Requisitos de cursos (ej: ¿Puedo tomar Inteligencia Artificial?)<br>
            - Horarios (ej: ¿Cuál es el horario de Calculo 1?)<br>
            - Créditos (ej: ¿Cuántos créditos vale Química General?)<br>
            - Registrar cursos aprobados (ej: Aprobé Pruebas de Software)<br>
            - Ver tus cursos aprobados (ej: ¿Qué cursos aprobé?)`;
        }

        return "Lo siento, no entendí la pregunta. Escribe 'ayuda' para ver lo que puedo hacer.";
    }

    // IMPORTANTE!!!
    //  Función para extraer el nombre del curso de la pregunta

    extraerCursoDePregunta(pregunta) {
        const preguntaSinTildes = this.quitarTildes(pregunta.toLowerCase());
        const cursosCoincidentes = Object.keys(cursos).filter(curso => preguntaSinTildes.includes(this.quitarTildes(curso.toLowerCase())));
      
        if (cursosCoincidentes.length === 0) {
          return "";
        }
      
        return cursosCoincidentes.reduce((cursoMasLargo, cursoActual) => { //cursoMasLargo
          return cursoActual.length > cursoMasLargo.length ? cursoActual : cursoMasLargo;
        }, "");
    }

    //Función que elimina la tilde
    quitarTildes(pregunta) {
        return pregunta.normalize('NFD') // Descompone los caracteres acentuados
        .replace(/[\u0300-\u036f]/g, ''); // Elimina los acentos y quita las ñ
    } 

    ordenarPorCiclo(lista){
        console.log("EN ORDENAR POR CICLO",lista);
        const cursos_obj = [...lista].map((nombre_curso) => cursos[nombre_curso]); //utilizamos el operador de propagación [... ] para convertir el set en una lista
        let niveles = {};

        cursos_obj.forEach(curso => {
        if (!niveles[curso.ciclo]) {
            niveles[curso.ciclo] = [];
        }
        niveles[curso.ciclo].push(curso);
    });
        return niveles;
    }
    
}

// Interfaz de usuario
const bot = new Chatbot();
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const typingIndicator = document.getElementById('typing-indicator');

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.innerHTML = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showBotResponse(question) {
    typingIndicator.style.display = 'block';
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    setTimeout(() => {
        typingIndicator.style.display = 'none';
        const response = bot.procesarPregunta(question);
        addMessage(response, false);
    }, 800);
}

function handleSend() {
    const question = userInput.value.trim();
    if (question) {
        addMessage(question, true);
        userInput.value = '';
        showBotResponse(question);
    }
}

function insertExample(example) {
    userInput.value = example;
    userInput.focus();
}




sendButton.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {//cada vez que escribe algo en el input
    if (e.key === 'Enter') handleSend();
});








/*A PARTIR DE AQUÍ EMPIEZA LA PARTE VISUAL*/


// Generar el árbol de cursos
function generarArbol(cursos, contenedorId) { //Aquí cursos es una lista de objetos, contenedor ID es el id del contenedor section que esta en la mitad izq
    const contenedor = document.getElementById(contenedorId);
    let niveles = {};

    // Organizar cursos por ciclo
    cursos.forEach(curso => {
        if (!niveles[curso.ciclo]) {
            niveles[curso.ciclo] = [];
        }
        niveles[curso.ciclo].push(curso);
    });

    console.log("LOS NIVELES SON: ",niveles)

    // Crear nodos para cada ciclo
    for (let ciclo in niveles) {
        const divCiclo = document.createElement('div');
        divCiclo.classList.add('requisitos');
        divCiclo.classList.add(ciclo); //Aún no utilizado pero puede ser util (escalabilidad)
    

        niveles[ciclo].forEach(curso => {
            const nodoCurso = document.createElement('div');
            nodoCurso.classList.add('nodo-curso');
            nodoCurso.textContent = curso.nombre;
            
            nodoCurso.onclick = function() {
                insertExample(curso.nombre); // Llamada a insertExample cuando se haga clic, para mandar al input el nombre del curso(nodo/div)
            };

            // Eventos para resaltar requisitos
            nodoCurso.addEventListener('mouseover', () => {
                resaltarNodos(curso, 'lightblue', "400", "black");
            });

            nodoCurso.addEventListener('mouseout', () => {
                resaltarNodos(curso, '', "normal", "lightblue");
            });

            divCiclo.appendChild(nodoCurso);
        });

        contenedor.appendChild(divCiclo);
    }

}

// Recursividad para resaltar los requisitos previos
function resaltarNodos(curso, b_color, weight, t_color) {
    const nodoCurso = buscarNodoPorTexto(curso.nombre);
    if (nodoCurso.classList.contains('aprobado')) {
        return;
    }
    if (nodoCurso) {
        nodoCurso.style.backgroundColor = b_color;
        nodoCurso.style.fontWeight = weight;
        nodoCurso.style.color = t_color;
    }

    curso.requisitos.forEach(requisito => {
        resaltarNodos(requisito, b_color, weight, t_color);
    });
}

// Con esto busca nodos segun el contenido
function buscarNodoPorTexto(texto) {
    const nodos = document.querySelectorAll('.nodo-curso');
    for (const nodo of nodos) {
        if (nodo.textContent === texto) {
            return nodo;
        }
    }
    return null;
}