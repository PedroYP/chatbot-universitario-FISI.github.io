class Curso {
    constructor(nombre, creditos, ciclo, horario, profesor) {
        this.nombre = nombre;
        this.creditos = creditos;
        this.ciclo = ciclo; // Agregamos ciclo (ej. 1er, 2do, 3er ciclo)
        this.horario = horario;
        this.profesor = profesor;
        this.requisitos = new Set(); // Cursos que son requisitos
    }

    agregarRequisito(curso) {
        this.requisitos.add(curso);
    }
}

//OFICIAL
//SOFTWARE
//1er ciclo
const aga = new Curso('Álgebra y Geometría Analítica', 4, 1, 'Miércoles: 8am - 10am y Viernes: 8am - 12pm', 'BARBOZA CARAPE, LUIS LEONCIO');
const biologia = new Curso('Biología para Ciencias e Ingeniería', 4, 1, 'Lunes: 8am - 2pm', 'HUAMAN TINCO, BORJA LUIS');
const calculoI = new Curso('Cálculo 1', 4, 1, 'Martes: 8am - 10am y Jueves: 8am - 12pm', 'ASIS LOPEZ, EFRACIO HERMINIO');
const dpl = new Curso('Desarrollo Personal y Liderazgo', 2, 1, 'Jueves: 2pm - 5pm', 'MELGAREJO SOLIS, RONALD ALONSO');
const mads = new Curso('Medio Ambiente y Desarrollo Sostenible', 3, 1, 'Sábado: 2pm - 6pm', 'FANOLA MERINO, PETRONILA MERIDA');
const meu = new Curso('Métodos de Estudios Universitarios', 2, 1, 'Martes: 10am - 1pm', 'RIOS DELGADO, JHOHANNA');
const programacion = new Curso('Programación y Computación', 2, 1, 'Miércoles: 10am - 1pm', 'HUAYNA DUEÑAS, ANA MARIA');
const redaccionI = new Curso('Redacción y Técnicas de Comunicación Efectiva 1', 3, 1, 'Sábado: 8am - 12pm', 'RIOS DELGADO, JHOHANNA');

//2do Ciclo
const calculoII = new Curso('Cálculo 2', 4, 2, 'Martes: 8am - 10am y Jueves: 2pm - 6pm', 'ATOCHE ESPINOZA, VICENTE AGUSTIN');
calculoII.agregarRequisito(calculoI);
const emprendimiento = new Curso('Emprendimiento e Innovación', 2, 2, 'Miércoles: 2pm - 5pm', 'MENDOZA YANEZ, MARIA DEL PILAR ');
const fisica = new Curso('Física I', 4, 2, '');
const introduccionCienciasIngenieria = new Curso('Introducción a las Ciencias e Ingeniería', 2, 2, 'Lunes: 2pm - 5pm', 'VALDERRAMA CAMPOS, OMAR BORIS');
const investigacionFormativa = new Curso('Investigación Formativa', 3, 2, 'Viernes: 8am - 12pm', 'MELGAREJO SOLIS, RONALD');
const quimica = new Curso('Química General', 4, 2, 'Lunes: 8am - 1pm', 'ESTRADA ALARCON, JUAN EDMUNDO ');
const realidadNacional = new Curso('Realidad Nacional y Mundial', 2, 2, 'Viernes: 2pm - 5pm', 'LUJAN CCORAHUA, VICTOR ENMANUEL');
const redaccionII = new Curso('Redacción y Técnicas de Comunicación Efectiva 2', 3, 2, 'Jueves: 8am - 12pm', 'RIOS DELGADO, JHOHANNA');
redaccionII.agregarRequisito(redaccionI);

//3er Ciclo
const algoritmicaI = new Curso('Algorítmica 1', 4, 3, 'Lunes: 8am - 1pm', 'ARREDONDO CASTILLO, GUSTAVO');
const estadistica = new Curso('Estadística y Probabilidades', 4, 3, 'Jueves: 8am - 1pm', 'BARTOLO GOTARATE, FELIX MANUEL');
const fisicaElectronica = new Curso('Física Electrónica', 3, 3, 'Martes: 8am - 12pm', 'MONTENEGRO JOO, JAVIER SEMPRONIO');
const ingeco = new Curso('Ingeniería Económica', 3, 3, 'viernes: 8am - 12pm', 'CHUMACERO CALLE, JOSÉ ANTONIO');
const introduccionDesarrolloSoftware = new Curso('Introducción al Desarrollo de Software', 3, 3, 'Sábado: 8am - 12pm', 'CANCHO RODRÍGUEZ, ERNESTO DAVID');
const matematicaBasica = new Curso('Matemática Básica', 4, 3, 'Miércoles: 8am - 1pm', 'ROJAS HUACANCA, JAIME ROLANDO');

//4to Ciclo
const algoritmicaII = new Curso('Algorítmica 2', 4, 4, 'Lunes: 2pm - 7pm', 'LAM -, ZHING FONG');
algoritmicaII.agregarRequisito(algoritmicaI);
const contabilidadGestion = new Curso('Contabilidad para la Gestión', 3, 4, 'Viernes: 8am - 12pm', 'REÁTEGUI SÁNCHEZ DE SÁNCHEZ, LLEYNI');
contabilidadGestion.agregarRequisito(ingeco);
const estructuraDatos = new Curso('Estructura de Datos', 4, 4, 'Martes: 8am - 1pm', 'ARREDONDO CASTILLO, GUSTAVO');
estructuraDatos.agregarRequisito(algoritmicaI);
const organizacionAdministracion = new Curso('Organización y Administración', 3, 4, 'Martes: 2pm - 6pm', 'CHÁVEZ HERRERA , CARLOS ERNESTO');
organizacionAdministracion.agregarRequisito(ingeco);
const matematicaDiscreta = new Curso('Matemática Discreta', 3, 4, 'Miércoles: 2pm - 6pm', 'RODRÍGUEZ RODRÍGUEZ , CIRO');
matematicaDiscreta.agregarRequisito(matematicaBasica);
const procesosSoftware = new Curso('Procesos de Software', 3, 4, 'Lunes: 8am - 1pm', 'IBARRA CABRERA, MANUEL JESUS');
procesosSoftware.agregarRequisito(introduccionDesarrolloSoftware);
const sistemasDigitales = new Curso('Sistemas Digitales', 3, 4, 'Sábado: 2pm - 7pm', 'ARMAS CALDERÓN, RAÚL MARCELO');
sistemasDigitales.agregarRequisito(fisicaElectronica);

//5to Ciclo
const analisisDiseñoAlgoritmos = new Curso('Análisis y Diseño de Algoritmos', 3, 5, 'Jueves: 8am - 12pm', 'GUERRA GRADOS, LUIS ANGEL');
analisisDiseñoAlgoritmos.agregarRequisito(algoritmicaII);
const arquitecturaComputadoras = new Curso('Arquitectura de Computadoras', 3, 5, 'Miércoles: 2pm - 6pm', 'AGUILAR ALONSO, IGOR JOVINO');
arquitecturaComputadoras.agregarRequisito(sistemasDigitales);
const baseDatosI = new Curso('Base de Datos 1', 4, 5, 'Martes: 5pm - 10pm', 'ZAVALETA CAMPOS, JORGE LUIS');
baseDatosI.agregarRequisito(estructuraDatos);
const computacionVisual = new Curso('Computación Visual', 3, 5, 'Viernes: 2pm - 6pm', 'TRUJILLO TREJO, JOHNLEDGARD');
computacionVisual.agregarRequisito(matematicaDiscreta);
const economiaGestion = new Curso('Economía para la Gestión', 3, 5, 'Martes: 1pm - 5pm', 'ATOCHE ESPINOZA, VICENTE AGUSTIN');
economiaGestion.agregarRequisito(contabilidadGestion);
const ingenieriaRequisitos = new Curso('Ingeniería de Requisitos', 4, 5, 'Miércoles: 8am - 1pm', 'RODRÍGUEZ RODRÍGUEZ , CIRO');
ingenieriaRequisitos.agregarRequisito(procesosSoftware);
const lenguajesCompiladores = new Curso('Lenguajes y Compiladores', 4, 5, 'Viernes: 8am - 1pm', 'RUIZ DE LA CRUZ MELO, CARLOS AUGUSTO');
lenguajesCompiladores.agregarRequisito(estructuraDatos);

//6to Ciclo
const baseDatosII = new Curso('Base de Datos 2', 4, 6, 'Miércoles: 4pm - 6pm y Jueves: 7pm - 10pm', 'GAMARRA MORENO, JUAN');
baseDatosII.agregarRequisito(baseDatosI);
const calidadSoftware = new Curso('Calidad de Software', 3, 6, 'Lunes: 5pm - 10pm', 'BARTRA MORE, ARTURO ALEJANDRO');
calidadSoftware.agregarRequisito(ingenieriaRequisitos);
const diseñoSoftware = new Curso('Diseño de Software', 4, 6, 'Jueves: 2pm - 7pm', 'MENÉNDEZ MUERAS, ROSA');
diseñoSoftware.agregarRequisito(ingenieriaRequisitos);
diseñoSoftware.agregarRequisito(baseDatosI);
const eticaProfesional = new Curso('Ética Profesional y Legislación Informática', 3, 6, 'Sábado: 7pm - 10pm', 'RODRÍGUEZ VILCAROMERO, CARLOS DANIEL');
eticaProfesional.agregarRequisito(organizacionAdministracion);
const gestionProyectoSoftware = new Curso('Gestión de Proyecto de Software', 3, 6, 'Sábado: 2pm - 6pm', 'BARTRA MORE, ARTURO ALEJANDRO');
gestionProyectoSoftware.agregarRequisito(procesosSoftware);
const interaccionHombreComputador = new Curso('Interacción Hombre Computador', 3, 6, 'Viernes: 6pm - 10pm', 'MORENO SUCRE, FANNY');
interaccionHombreComputador.agregarRequisito(ingenieriaRequisitos);
const sistemasOperativos = new Curso('Sistemas Operativos', 3, 6, 'Miércoles: 6pm - 10pm', 'VASQUEZ REYES, EDUARDO ANGEL');
sistemasOperativos.agregarRequisito(arquitecturaComputadoras);

//7mo Ciclo
const arquitecturaSoftware = new Curso('Arquitectura de Software', 4, 7, 'Sábado: 8am - 1pm', 'CORDERO SÁNCHEZ, HUGO');
arquitecturaSoftware.agregarRequisito(calidadSoftware);
arquitecturaSoftware.agregarRequisito(diseñoSoftware);
const experienciaUsuario = new Curso('Experiencia de Usuario y Usabilidad', 3, 7, 'Viernes: 6pm - 10pm', 'REYES HUAMAN, ANITA');
experienciaUsuario.agregarRequisito(diseñoSoftware);
const formacionEmpresasSoftware = new Curso('Formación de Empresas de Software', 3, 7, 'Martes: 1pm - 5pm', 'BAYONA ORÉ, LUZ SUSSY');
formacionEmpresasSoftware.agregarRequisito(gestionProyectoSoftware);
const gestionConfiguracionMantenimientoSoftware = new Curso('Gestión de la Configuración y Mantenimiento del Software', 4, 7, 'Lunes: 2pm - 6pm', 'WONG PORTILLO, LENIS ROSSI');
gestionConfiguracionMantenimientoSoftware.agregarRequisito(diseñoSoftware);
const inteligenciaArtificial = new Curso('Inteligencia Artificial', 3, 7, 'Miércoles: 6pm - 10pm', 'GAMARRA MORENO, JUAN');
inteligenciaArtificial.agregarRequisito(analisisDiseñoAlgoritmos);
inteligenciaArtificial.agregarRequisito(baseDatosII);
const pruebasSoftware = new Curso('Pruebas de Software', 4, 7, 'Martes: 6pm - 10pm', 'BARTRA MORE, ARTURO ALEJANDRO');
pruebasSoftware.agregarRequisito(calidadSoftware);
pruebasSoftware.agregarRequisito(diseñoSoftware);
const redesTransmisionDatos = new Curso('Redes y Transmisión de Datos', 3, 7, 'Viernes: 6pm - 10pm', 'UGAZ CACHAY, WINSTON IGNACIO');
redesTransmisionDatos.agregarRequisito(sistemasOperativos);

//8vo Ciclo
const aseguramientoCalidadSoftware = new Curso('Aseguramiento de la Calidad del Software', 3, 8, 'Lunes: 6pm - 10pm', ' HUAPAYA CHUMPITAZ, MARIO AGUSTIN');
aseguramientoCalidadSoftware.agregarRequisito(calidadSoftware);
const automatizacionControlSoftware = new Curso('Automatización y Control de Software', 3, 8, 'Jueves: 6pm - 10pm', 'VASQUEZ REYES, EDUARDO ANGEL');
automatizacionControlSoftware.agregarRequisito(redesTransmisionDatos);
const inteligenciaNegocios = new Curso('Inteligencia de Negocios', 3, 8, 'Sábado: 8am - 12pm', 'CANCHO RODRIGUEZ, ERNESTO DAVID');
inteligenciaNegocios.agregarRequisito(analisisDiseñoAlgoritmos);
inteligenciaNegocios.agregarRequisito(baseDatosII);
const metodologiaInvestigacion = new Curso('Metodología de la Investigación', 3, 8, 'Miércoles: 7pm - 10pm', 'WONG PORTILLO, LENIS ROSSI');
metodologiaInvestigacion.agregarRequisito(arquitecturaSoftware);
metodologiaInvestigacion.agregarRequisito(inteligenciaArtificial);
const mineriaDatos = new Curso('Minería de Datos', 3, 8, 'Martes: 6pm - 10pm', 'CALDERON VILCA, HUGO DAVID');
mineriaDatos.agregarRequisito(baseDatosII);
const progamacionConcurrenteParalela = new Curso('Programación Concurrente y Paralela', 3, 8, 'Sábado: 2pm - 6pm', 'PETRLIK AZABACHE, IVAN CARLO');
progamacionConcurrenteParalela.agregarRequisito(sistemasOperativos);
const tallerConstruccionSoftwareWeb = new Curso('Taller de Construcción de Software Web', 3, 8, 'Miércoles: 3pm - 6pm y Viernes: 3pm - 5pm', 'ALARCÓN LOAYZA, LUIS ALBERTO');
tallerConstruccionSoftwareWeb.agregarRequisito(arquitecturaSoftware);
tallerConstruccionSoftwareWeb.agregarRequisito(baseDatosII);

//9no Ciclo
const  desarrolloTesisI = new Curso('Desarrollo de Tesis 1', 4, 9, 'Miércoles: 7pm - 10pm', 'RODRIGUEZ RODRIGUEZ, CIRO');
desarrolloTesisI.agregarRequisito(metodologiaInvestigacion);
const  gestionRiesgoSoftware = new Curso('Gestión de Riesgo del Software', 3, 9, 'Viernes: 6pm - 10pm', 'MACHADO VICENTE, JOEL FERNANDO');
gestionRiesgoSoftware.agregarRequisito(gestionProyectoSoftware);
const  gerenciaTecnologiaInformacion = new Curso('Gerencia de Tecnología de la Información', 3, 9, 'Martes: 6pm - 10pm', 'MACHADO VICENTE, JOEL FERNANDO');
gerenciaTecnologiaInformacion.agregarRequisito(gestionProyectoSoftware);
const  internetCosas = new Curso('Internet de las Cosas', 3, 9, 'Sábado: 2pm - 6pm', 'LIMACHI CARTOLIN YURI');
internetCosas.agregarRequisito(automatizacionControlSoftware);
const  seguridadSoftware = new Curso('Seguridad del Software', 3, 9, 'Lunes: 6pm - 10pm', 'COLLANTES INGA, ZOILA');
seguridadSoftware.agregarRequisito(redesTransmisionDatos);
const  softwareInteligente = new Curso('Software Inteligente', 3, 9, 'Lunes: 1pm .', 'CALDERON VILCA, HUGO DAVID');
softwareInteligente.agregarRequisito(inteligenciaArtificial);
const  tallerConstruccionSoftwareMovil = new Curso('Taller de Construcción de Software Móvil', 3, 9, 'Sábado: 8pm - 1pm', 'PETRLIK AZABACHE, IVAN CARLO');
tallerConstruccionSoftwareMovil.agregarRequisito(tallerConstruccionSoftwareWeb);

//10mo Ciclo
const analiticaDatos = new Curso('Analítica de Datos', 3, 10, 'Lunes: 8am - 12pm', 'ATOCHE ESPINOZA, VICENTE AGUSTIN');
analiticaDatos.agregarRequisito(inteligenciaNegocios);
analiticaDatos.agregarRequisito(softwareInteligente);
const desarrolloTesisII = new Curso('Desarrollo de Tesis 2', 4, 10, 'Martes: 4pm - 10pm', 'LA SERNA PALOMINO, NORA BERTA');
desarrolloTesisII.agregarRequisito(desarrolloTesisI);
const innovacionTecnologiaEmprendimiento = new Curso('Innovación, Tecnología y Emprendimiento', 3, 10, 'Martes: 8am - 12pm', 'BAYONA ORÉ, LUZ SUSSY ');
innovacionTecnologiaEmprendimiento.agregarRequisito(tallerConstruccionSoftwareMovil);
const practicaPreProfesional  = new Curso('Práctica Pre Profesional', 4, 10, 'Sábado: 2pm - 6pm', 'CHAVEZ HERRERA, CARLOS ERNESTO');
practicaPreProfesional.agregarRequisito(tallerConstruccionSoftwareWeb);
const tallerAplicacionesSociales = new Curso('Taller de Aplicaciones Sociales', 3, 10, 'Miércoles: 8am- 2pm', 'QUIROZ ZARABIA, JOSE ISIDRO');
tallerAplicacionesSociales.agregarRequisito(softwareInteligente);
const tendenciasIngenieriaSoftware = new Curso('Tendencias en Ingeniería de Software', 3, 10, 'Sábado: 8am - 11am', 'RODRIGUEZ RODRIGUEZ, CIRO');
tendenciasIngenieriaSoftware.agregarRequisito(gerenciaTecnologiaInformacion);


// Crear el objeto de cursos
const cursos_software = {
    // 1er ciclo
    'Álgebra y Geometría Analítica': aga,
    'Biología para Ciencias e Ingeniería': biologia,
    'Cálculo 1': calculoI,
    'Desarrollo Personal y Liderazgo': dpl,
    'Medio Ambiente y Desarrollo Sostenible': mads,
    'Métodos de Estudios Universitarios': meu,
    'Programación y Computación': programacion,
    'Redacción y Técnicas de Comunicación Efectiva 1': redaccionI,

    // 2do ciclo
    'Cálculo 2': calculoII,
    'Emprendimiento e Innovación': emprendimiento,
    'Física I': fisica,
    'Introducción a las Ciencias e Ingeniería': introduccionCienciasIngenieria,
    'Investigación Formativa': investigacionFormativa,
    'Química General': quimica,
    'Realidad Nacional y Mundial': realidadNacional,
    'Redacción y Técnicas de Comunicación Efectiva 2': redaccionII,

    // 3er ciclo
    'Algorítmica 1': algoritmicaI,
    'Estadística y Probabilidades': estadistica,
    'Física Electrónica': fisicaElectronica,
    'Ingeniería Económica': ingeco,
    'Introducción al Desarrollo de Software': introduccionDesarrolloSoftware,
    'Matemática Básica': matematicaBasica,

    // 4to ciclo
    'Algorítmica 2': algoritmicaII,
    'Contabilidad para la Gestión': contabilidadGestion,
    'Estructura de Datos': estructuraDatos,
    'Organización y Administración': organizacionAdministracion,
    'Matemática Discreta': matematicaDiscreta,
    'Procesos de Software': procesosSoftware,
    'Sistemas Digitales': sistemasDigitales,

    // 5to ciclo
    'Análisis y Diseño de Algoritmos': analisisDiseñoAlgoritmos,
    'Arquitectura de Computadoras': arquitecturaComputadoras,
    'Base de Datos 1': baseDatosI,
    'Computación Visual': computacionVisual,
    'Economía para la Gestión': economiaGestion,
    'Ingeniería de Requisitos': ingenieriaRequisitos,
    'Lenguajes y Compiladores': lenguajesCompiladores,

    // 6to ciclo
    'Base de Datos 2': baseDatosII,
    'Calidad de Software': calidadSoftware,
    'Diseño de Software': diseñoSoftware,
    'Ética Profesional y Legislación Informática': eticaProfesional,
    'Gestión de Proyecto de Software': gestionProyectoSoftware,
    'Interacción Hombre Computador': interaccionHombreComputador,
    'Sistemas Operativos': sistemasOperativos,

    // 7mo ciclo
    'Arquitectura de Software': arquitecturaSoftware,
    'Experiencia de Usuario y Usabilidad': experienciaUsuario,
    'Formación de Empresas de Software': formacionEmpresasSoftware,
    'Gestión de la Configuración y Mantenimiento del Software': gestionConfiguracionMantenimientoSoftware,
    'Inteligencia Artificial': inteligenciaArtificial,
    'Pruebas de Software': pruebasSoftware,
    'Redes y Transmisión de Datos': redesTransmisionDatos,

    //8vo ciclo
    'Aseguramiento de la Calidad del Software': aseguramientoCalidadSoftware,
    'Automatización y Control de Software': automatizacionControlSoftware,
    'Inteligencia de Negocios': inteligenciaNegocios,
    'Metodología de la Investigación': metodologiaInvestigacion,
    'Minería de Datos': mineriaDatos,
    'Programación Concurrente y Paralela': progamacionConcurrenteParalela,
    'Taller de Construcción de Software Web': tallerConstruccionSoftwareWeb,

    //9no ciclo
    'Desarrollo de Tesis 1': desarrolloTesisI,
    'Gestión de Riesgo del Software': gestionRiesgoSoftware,
    'Gerencia de Tecnología de la Información': gerenciaTecnologiaInformacion,
    'Internet de las Cosas': internetCosas,
    'Seguridad del Software': seguridadSoftware,
    'Software Inteligente':softwareInteligente,
    'Taller de Construcción de Software Móvil':tallerConstruccionSoftwareMovil,

    //10mo ciclo
    'Analítica de Datos': analiticaDatos,
    'Desarrollo de Tesis 2': desarrolloTesisII,
    'Innovación, Tecnología y Emprendimiento': innovacionTecnologiaEmprendimiento,
    'Práctica Pre Profesional': practicaPreProfesional,
    'Taller de Aplicaciones Sociales': tallerAplicacionesSociales,
    'Tendencias en Ingeniería de Software': tendenciasIngenieriaSoftware,
};


//SISTEMAS
//1er ciclo
const agaSist = new Curso('Álgebra y Geometría Analítica', 4, 1, 'Miércoles: 8am - 10am y Viernes: 8am - 12pm', 'BARBOZA CARAPE, LUIS LEONCIO');
const biologiaSist = new Curso('Biología para Ciencias e Ingeniería', 4, 1, 'Lunes: 8am - 2pm', 'HUAMAN TINCO, BORJA LUIS');
const calculoISist = new Curso('Cálculo 1', 4, 1, 'Martes: 8am - 10am y Jueves: 8am - 12pm', 'ASIS LOPEZ, EFRACIO HERMINIO');
const dplSist = new Curso('Desarrollo Personal y Liderazgo', 2, 1, 'Jueves: 2pm - 5pm', 'MELGAREJO SOLIS, RONALD ALONSO');
const madsSist = new Curso('Medio Ambiente y Desarrollo Sostenible', 3, 1, 'Sábado: 2pm - 6pm', 'FANOLA MERINO, PETRONILA MERIDA');
const meuSist = new Curso('Métodos de Estudios Universitarios', 2, 1, 'Martes: 10am - 1pm', 'RIOS DELGADO, JHOHANNA');
const programacionSist = new Curso('Programación y Computación', 2, 1, 'Miércoles: 10am - 1pm', 'HUAYNA DUEÑAS, ANA MARIA');
const redaccionISist = new Curso('Redacción y Técnicas de Comunicación Efectiva 1', 3, 1, 'Sábado: 8am - 12pm', 'RIOS DELGADO, JHOHANNA');

//2do Ciclo
const calculoIISist = new Curso('Cálculo 2', 4, 2, 'Martes: 8am - 10am y Jueves: 2pm - 6pm', 'ATOCHE ESPINOZA, VICENTE AGUSTIN');
calculoIISist.agregarRequisito(calculoISist);
const emprendimientoSist = new Curso('Emprendimiento e Innovación', 2, 2, 'Miércoles: 2pm - 5pm', 'MENDOZA YANEZ, MARIA DEL PILAR ');
const fisicaSist = new Curso('Física I', 4, 2, '');
const introduccionCienciasIngenieriaSist = new Curso('Introducción a las Ciencias e Ingeniería', 2, 2, 'Lunes: 2pm - 5pm', 'VALDERRAMA CAMPOS, OMAR BORIS');
const investigacionFormativaSist = new Curso('Investigación Formativa', 3, 2, 'Viernes: 8am - 12pm', 'MELGAREJO SOLIS, RONALD');
const quimicaSist = new Curso('Química General', 4, 2, 'Lunes: 8am - 1pm', 'ESTRADA ALARCON, JUAN EDMUNDO ');
const realidadNacionalSist = new Curso('Realidad Nacional y Mundial', 2, 2, 'Viernes: 2pm - 5pm', 'LUJAN CCORAHUA, VICTOR ENMANUEL');
const redaccionIISist = new Curso('Redacción y Técnicas de Comunicación Efectiva 2', 3, 2, 'Jueves: 8am - 12pm', 'RIOS DELGADO, JHOHANNA');
redaccionIISist.agregarRequisito(redaccionISist);

// 3er ciclo
const introComputacionSist = new Curso('Introducción a la Computación', 4, 3, 'Lunes: 10am - 12pm', 'GARCIA LOPEZ, MARIO');
const ecuacionesDiferencialesSist = new Curso('Series y Ecuaciones Diferenciales', 4, 3, 'Martes: 2pm - 4pm y Jueves: 10am - 12pm', 'PEREZ SOTO, ANA');
ecuacionesDiferencialesSist.agregarRequisito(calculoIISist);
const electromagnetismoSist = new Curso('Electromagnetismo y Óptica', 4, 3, 'Miércoles: 8am - 10am', 'RAMIREZ QUISPE, JUAN');
electromagnetismoSist.agregarRequisito(fisicaSist);
const fundamentosSISist = new Curso('Fundamentos de Sistemas de Información', 3, 3, 'Viernes: 2pm - 5pm', 'TORRES MENDOZA, LUIS');
const programacionComputadorasISist = new Curso('Programación de Computadoras 1', 4, 3, 'Jueves: 8am - 10am', 'LOPEZ DIAZ, SOFIA');
const matematicaDiscretaSist = new Curso('Matemática Discreta', 3, 3, 'Sábado: 10am - 1pm', 'GUTIERREZ SALAZAR, PEDRO');
matematicaDiscretaSist.agregarRequisito(agaSist);

// 4to ciclo
const organizacionEmpresarialSist = new Curso('Organización Empresarial', 3, 4, 'Lunes: 4pm - 6pm', 'FERNANDEZ ROJAS, MARTA');
organizacionEmpresarialSist.agregarRequisito(fundamentosSISist);
const programacionComputadorasIISist = new Curso('Programación de Computadoras 2', 4, 4, 'Martes: 8am - 10am y Jueves: 4pm - 6pm', 'SANDOVAL PEREIRA, HUGO');
programacionComputadorasIISist.agregarRequisito(programacionComputadorasISist);
const metodosNumericosSist = new Curso('Métodos Numéricos', 3, 4, 'Miércoles: 2pm - 5pm', 'SILVA CASTRO, CARLA');
metodosNumericosSist.agregarRequisito(ecuacionesDiferencialesSist);
const estadisticaISist = new Curso('Estadística 1', 4, 4, 'Viernes: 8am - 10am', 'CARRILLO HERRERA, DIEGO');
estadisticaISist.agregarRequisito(calculoIISist);
const arquitecturaComputadorasSist = new Curso('Arquitectura de Computadoras', 4, 4, 'Sábado: 2pm - 6pm', 'REYES JIMENEZ, ADRIAN');
arquitecturaComputadorasSist.agregarRequisito(electromagnetismoSist);
const ingecoSist = new Curso('Ingeniería Económica', 3, 4, 'Jueves: 10am - 12pm', 'MORALES GONZALEZ, LAURA');

// 5to ciclo
const analisisSISist = new Curso('Análisis de Sistemas de Información', 4, 5, 'Lunes: 6pm - 8pm', 'NAVARRO ESPINOZA, RICARDO');
analisisSISist.agregarRequisito(organizacionEmpresarialSist);
const diseñoBDSist = new Curso('Diseño de Base de Datos', 4, 5, 'Martes: 2pm - 4pm y Jueves: 6pm - 8pm', 'MEJIA ORTIZ, FRANCISCO');
diseñoBDSist.agregarRequisito(programacionComputadorasIISist);
const investigacionOperativaSist = new Curso('Investigación Operativa', 3, 5, 'Miércoles: 10am - 1pm', 'VALENCIA NUÑEZ, TERESA');
investigacionOperativaSist.agregarRequisito(metodosNumericosSist);
const estadisticaIISist = new Curso('Estadística 2', 4, 5, 'Viernes: 2pm - 4pm', 'DIAZ CAMPOS, EDUARDO');
estadisticaIISist.agregarRequisito(estadisticaISist);
const sistemasOperativosSist = new Curso('Sistemas Operativos', 4, 5, 'Sábado: 8am - 12pm', 'ALVAREZ SANTOS, ANDREA');
sistemasOperativosSist.agregarRequisito(arquitecturaComputadorasSist);
const estructuraDatosSist = new Curso('Estructura de Datos', 4, 5, 'Jueves: 2pm - 5pm', 'HERRERA LOZANO, CAMILA');
estructuraDatosSist.agregarRequisito(matematicaDiscretaSist);

// 6to ciclo
const diseñoSISist = new Curso('Diseño de Sistemas de Información', 4, 6, 'Lunes: 8am - 10am', 'CASTILLO MENDEZ, JULIO');
diseñoSISist.agregarRequisito(analisisSISist);
const administracionBDSist = new Curso('Administración de Base de Datos', 4, 6, 'Martes: 10am - 12pm', 'SALAZAR RIVERA, MARTHA');
administracionBDSist.agregarRequisito(diseñoBDSist);
const redesComunicacionesSist = new Curso('Redes y Comunicaciones', 4, 6, 'Miércoles: 2pm - 5pm', 'CORDOVA PEREZ, JUAN');
redesComunicacionesSist.agregarRequisito(sistemasOperativosSist);
const diseñoUISist = new Curso('Diseño de Interfaces de Usuario', 3, 6, 'Jueves: 4pm - 6pm', 'RODRIGUEZ QUISPE, ANDREA');
diseñoUISist.agregarRequisito(analisisSISist);
const modelosSimulacionSist = new Curso('Modelos y Simulación', 3, 6, 'Viernes: 6pm - 8pm', 'GOMEZ TORO, LUIS');
modelosSimulacionSist.agregarRequisito(investigacionOperativaSist);
const finanzasGestionSist = new Curso('Finanzas para la Gestión', 3, 6, 'Sábado: 10am - 1pm', 'NAVARRO LOPEZ, ANA');
finanzasGestionSist.agregarRequisito(ingecoSist);

// 7mo ciclo
const interaccionHombreComputadorSist = new Curso('Interacción Hombre Computador', 4, 7, 'Lunes: 10am - 12pm', 'FERNANDEZ GARCIA, MIGUEL');
interaccionHombreComputadorSist.agregarRequisito(diseñoUISist);
const inteligenciaArtificialSist = new Curso('Inteligencia Artificial', 4, 7, 'Martes: 2pm - 4pm', 'RUIZ VARGAS, LUCIA');
inteligenciaArtificialSist.agregarRequisito(modelosSimulacionSist);
const internetCosasSist = new Curso('Internet de las Cosas', 3, 7, 'Miércoles: 8am - 10am', 'TORO MORALES, DAVID');
internetCosasSist.agregarRequisito(redesComunicacionesSist);
const gestionDatosMasivosSist = new Curso('Gestión de Datos Masivos', 3, 7, 'Jueves: 2pm - 4pm', 'GONZALEZ PEREZ, JUANA');
gestionDatosMasivosSist.agregarRequisito(administracionBDSist);
const aplicacionesWebSist = new Curso('Desarrollo de Aplicaciones Web', 3, 7, 'Viernes: 4pm - 6pm', 'VELASQUEZ LOPEZ, PABLO');
aplicacionesWebSist.agregarRequisito(diseñoSISist);
const inteligenciaNegociosSist = new Curso('Inteligencia de Negocios', 3, 7, 'Sábado: 8am - 10am', 'NUNEZ CASTILLO, SOFIA');
inteligenciaNegociosSist.agregarRequisito(finanzasGestionSist);

// 8vo ciclo
const computacionVisualSist = new Curso('GComputación Visual', 4, 8, 'Lunes y Miércoles 8:00 - 10:00', 'RAMÍREZ PÉREZ, JUAN');
computacionVisualSist.agregarRequisito(interaccionHombreComputadorSist);
const sistemasInteligentesSist = new Curso('Sistemas Inteligentes', 4, 8, 'Martes y Jueves 10:00 - 12:00', 'FERNÁNDEZ LÓPEZ, ANA');
sistemasInteligentesSist.agregarRequisito(inteligenciaArtificialSist);
const sistemasDistribuidosSist = new Curso('Sistemas Distribuidos', 3, 8, 'Viernes 14:00 - 16:00', 'CASTRO GÓMEZ, MARÍA');
sistemasDistribuidosSist.agregarRequisito(redesComunicacionesSist);
const aplicacionesMovilesSist = new Curso('Desarrollo de Aplicaciones Móviles', 4, 8, 'Lunes y Miércoles 16:00 - 18:00', 'LÓPEZ MARTÍNEZ, CARLOS');
aplicacionesMovilesSist.agregarRequisito(diseñoSISist);
const metodologiaInvestigacionSist = new Curso('Metodología de la Investigación', 4, 8, 'Martes y Jueves 18:00 - 20:00', 'GUTIÉRREZ DÍAZ, LUIS');
metodologiaInvestigacionSist.agregarRequisito(aplicacionesWebSist);
const gestionProyectosTISist = new Curso('Gestión de Proyectos de TI', 4, 8, 'Sábado 9:00 - 12:00', 'HERRERA TORRES, ELENA');
gestionProyectosTISist.agregarRequisito(inteligenciaNegociosSist);

// 9no ciclo
const seguridadInformacionSist = new Curso('Seguridad de la Información', 4, 9, 'Lunes y Miércoles 8:00 - 10:00', 'MEDINA RIVERA, PABLO');
seguridadInformacionSist.agregarRequisito(internetCosasSist);
const mineriaDatosSist = new Curso('Minería de Datos', 3, 9, 'Martes y Jueves 10:00 - 12:00', 'SALAZAR RAMOS, JULIA');
mineriaDatosSist.agregarRequisito(gestionDatosMasivosSist);
const arquitecturaEmpresarialSist = new Curso('Arquitectura Empresarial', 3, 9, 'Viernes 14:00 - 16:00', 'VARGAS FLORES, MIGUEL');
arquitecturaEmpresarialSist.agregarRequisito(sistemasDistribuidosSist);
const gestionProcesoNegocioSist = new Curso('Gestión de Proceso de Negocio', 3, 9, 'Lunes y Miércoles 16:00 - 18:00', 'PAREDES CRUZ, SOFÍA');
gestionProcesoNegocioSist.agregarRequisito(aplicacionesMovilesSist);
const proyectoTesisISist = new Curso('Proyecto de Tesis 1', 4, 9, 'Martes y Jueves 18:00 - 20:00', 'ROJAS CASTILLO, ANDRÉS');
proyectoTesisISist.agregarRequisito(metodologiaInvestigacionSist);
const auditoriaSistemasSist = new Curso('Auditoría de Sistemas', 4, 9, 'Sábado 9:00 - 12:00', 'NÚÑEZ ORTIZ, MARÍA');
auditoriaSistemasSist.agregarRequisito(gestionProyectosTISist);

// 10mo ciclo
const eticaProfesionalSist = new Curso('Ética Profesional y Emprendimiento', 4, 10, 'Lunes y Miércoles 8:00 - 10:00', 'CÁRDENAS MENDOZA, JOSÉ');
eticaProfesionalSist.agregarRequisito(seguridadInformacionSist);
const tendenciasSistemasInformacionSist = new Curso('Tendencias en Sistemas de Información', 4, 10, 'Martes y Jueves 10:00 - 12:00', 'ESPINOZA REYES, CAMILA');
tendenciasSistemasInformacionSist.agregarRequisito(mineriaDatosSist);
const arquitecturaServiciosSist = new Curso('Gestión de la Innovación Tecnológica', 3, 10, 'Viernes 14:00 - 16:00', 'DELGADO FERNÁNDEZ, MARCO');
arquitecturaServiciosSist.agregarRequisito(arquitecturaEmpresarialSist);
const gestionTecnologiaInformacionSist = new Curso('Gestión de Tecnologías de Información', 3, 10, 'Lunes y Miércoles 16:00 - 18:00', 'MUÑOZ SÁNCHEZ, LORENA');
gestionTecnologiaInformacionSist.agregarRequisito(arquitecturaEmpresarialSist);
const proyectoTesisIISist = new Curso('Proyecto de Tesis 2', 4, 10, 'Martes y Jueves 18:00 - 20:00', 'CAMPOS VILLARREAL, ALFREDO');
proyectoTesisIISist.agregarRequisito(proyectoTesisISist);
const proyectoFinCarreraSist = new Curso('Proyecto de Fin de Carrera', 4, 10, 'Sábado 9:00 - 12:00', 'JIMÉNEZ HERRERA, DIANA');
proyectoFinCarreraSist.agregarRequisito(auditoriaSistemasSist);

const cursos_sistemas = { 
    // 1er ciclo
    'Álgebra y Geometría Analítica': agaSist, 
    'Biología para Ciencias e Ingeniería': biologiaSist, 
    'Cálculo 1': calculoISist, 
    'Desarrollo Personal y Liderazgo': dplSist, 
    'Medio Ambiente y Desarrollo Sostenible': madsSist, 
    'Métodos de Estudios Universitarios': meuSist, 
    'Programación y Computación': programacionSist, 
    'Redacción y Técnicas de Comunicación Efectiva 1': redaccionISist, 

    // 2do ciclo
    'Cálculo 2': calculoIISist, 
    'Emprendimiento e Innovación': emprendimientoSist, 
    'Física I': fisicaSist, 
    'Introducción a las Ciencias e Ingeniería': introduccionCienciasIngenieriaSist, 
    'Investigación Formativa': investigacionFormativaSist, 
    'Química General': quimicaSist, 
    'Realidad Nacional y Mundial': realidadNacionalSist, 
    'Redacción y Técnicas de Comunicación Efectiva 2': redaccionIISist, 

    // 3er ciclo
    'Introducción a la Computación': introComputacionSist, 
    'Series y Ecuaciones Diferenciales': ecuacionesDiferencialesSist, 
    'Electromagnetismo y Óptica': electromagnetismoSist, 
    'Fundamentos de Sistemas de Información': fundamentosSISist, 
    'Programación de Computadoras 1': programacionComputadorasISist, 
    'Matemática Discreta': matematicaDiscretaSist, 

    // 4to ciclo
    'Organización Empresarial': organizacionEmpresarialSist, 
    'Programación de Computadoras 2': programacionComputadorasIISist, 
    'Métodos Numéricos': metodosNumericosSist, 
    'Estadística 1': estadisticaISist, 
    'Arquitectura de Computadoras': arquitecturaComputadorasSist, 
    'Ingeniería Económica': ingecoSist, 

    // 5to ciclo
    'Análisis de Sistemas de Información': analisisSISist, 
    'Diseño de Base de Datos': diseñoBDSist, 
    'Investigación Operativa': investigacionOperativaSist, 
    'Estadística 2': estadisticaIISist, 
    'Sistemas Operativos': sistemasOperativosSist, 
    'Estructura de Datos': estructuraDatosSist, 

    // 6to ciclo
    'Diseño de Sistemas de Información': diseñoSISist, 
    'Administración de Base de Datos': administracionBDSist, 
    'Redes y Comunicaciones': redesComunicacionesSist, 
    'Diseño de Interfaces de Usuario': diseñoUISist, 
    'Modelos y Simulación': modelosSimulacionSist, 
    'Finanzas para la Gestión': finanzasGestionSist, 

    // 7mo ciclo
    'Interacción Hombre Computador': interaccionHombreComputadorSist, 
    'Inteligencia Artificial': inteligenciaArtificialSist, 
    'Internet de las Cosas': internetCosasSist, 
    'Gestión de Datos Masivos': gestionDatosMasivosSist, 
    'Desarrollo de Aplicaciones Web': aplicacionesWebSist, 
    'Inteligencia de Negocios': inteligenciaNegociosSist, 

    // 8vo ciclo
    'Computación Visual': computacionVisualSist, 
    'Sistemas Inteligentes': sistemasInteligentesSist, 
    'Sistemas Distribuidos': sistemasDistribuidosSist, 
    'Desarrollo de Aplicaciones Móviles': aplicacionesMovilesSist, 
    'Metodología de la Investigación': metodologiaInvestigacionSist, 
    'Gestión de Proyectos de TI': gestionProyectosTISist, 

    // 9no ciclo
    'Seguridad de la Información': seguridadInformacionSist, 
    'Minería de Datos': mineriaDatosSist, 
    'Arquitectura Empresarial': arquitecturaEmpresarialSist, 
    'Gestión de Proceso de Negocio': gestionProcesoNegocioSist, 
    'Proyecto de Tesis 1': proyectoTesisISist, 
    'Auditoría de Sistemas': auditoriaSistemasSist, 

    // 10mo ciclo
    'Ética Profesional y Emprendimiento': eticaProfesionalSist, 
    'Tendencias en Sistemas de Información': tendenciasSistemasInformacionSist, 
    'Gestión de la Innovación Tecnológica': arquitecturaServiciosSist, 
    'Gestión de Tecnologías de Información': gestionTecnologiaInformacionSist, 
    'Proyecto de Tesis 2': proyectoTesisIISist, 
    'Proyecto de Fin de Carrera': proyectoFinCarreraSist 
};


//CC
//1er ciclo
const agaCC = new Curso('Álgebra y Geometría Analítica', 4, 1, 'Miércoles: 8am - 10am y Viernes: 8am - 12pm', 'BARBOZA CARAPE, LUIS LEONCIO');
const biologiaCC = new Curso('Biología para Ciencias e Ingeniería', 4, 1, 'Lunes: 8am - 2pm', 'HUAMAN TINCO, BORJA LUIS');
const calculoICC = new Curso('Cálculo 1', 4, 1, 'Martes: 8am - 10am y Jueves: 8am - 12pm', 'ASIS LOPEZ, EFRACIO HERMINIO');
const dplCC = new Curso('Desarrollo Personal y Liderazgo', 2, 1, 'Jueves: 2pm - 5pm', 'MELGAREJO SOLIS, RONALD ALONSO');
const madsCC = new Curso('Medio Ambiente y Desarrollo Sostenible', 3, 1, 'Sábado: 2pm - 6pm', 'FANOLA MERINO, PETRONILA MERIDA');
const meuCC = new Curso('Métodos de Estudios Universitarios', 2, 1, 'Martes: 10am - 1pm', 'RIOS DELGADO, JHOHANNA');
const programacionCC = new Curso('Programación y Computación', 2, 1, 'Miércoles: 10am - 1pm', 'HUAYNA DUEÑAS, ANA MARIA');
const redaccionICC = new Curso('Redacción y Técnicas de Comunicación Efectiva 1', 3, 1, 'Sábado: 8am - 12pm', 'RIOS DELGADO, JHOHANNA');

//2do Ciclo
const calculoIICC = new Curso('Cálculo 2', 4, 2, 'Martes: 8am - 10am y Jueves: 2pm - 6pm', 'ATOCHE ESPINOZA, VICENTE AGUSTIN');
calculoIICC.agregarRequisito(calculoICC);
const emprendimientoCC = new Curso('Emprendimiento e Innovación', 2, 2, 'Miércoles: 2pm - 5pm', 'MENDOZA YANEZ, MARIA DEL PILAR ');
const fisicaCC = new Curso('Física I', 4, 2, '');
const introduccionCienciasIngenieriaCC = new Curso('Introducción a las Ciencias e Ingeniería', 2, 2, 'Lunes: 2pm - 5pm', 'VALDERRAMA CAMPOS, OMAR BORIS');
const investigacionFormativaCC = new Curso('Investigación Formativa', 3, 2, 'Viernes: 8am - 12pm', 'MELGAREJO SOLIS, RONALD');
const quimicaCC = new Curso('Química General', 4, 2, 'Lunes: 8am - 1pm', 'ESTRADA ALARCON, JUAN EDMUNDO ');
const realidadNacionalCC = new Curso('Realidad Nacional y Mundial', 2, 2, 'Viernes: 2pm - 5pm', 'LUJAN CCORAHUA, VICTOR ENMANUEL');
const redaccionIICC = new Curso('Redacción y Técnicas de Comunicación Efectiva 2', 3, 2, 'Jueves: 8am - 12pm', 'RIOS DELGADO, JHOHANNA');
redaccionIICC.agregarRequisito(redaccionICC);

// 3er ciclo
const introCienciaComputacionCC = new Curso('Introducción a la Ciencia de la Computación', 4, 3, 'Lunes: 10am - 12pm', 'GARCIA LOPEZ, MARIO');
const programacionComputadorasICC = new Curso('Programación de Computadoras 1', 4, 3, 'Martes: 2pm - 4pm y Jueves: 10am - 12pm', 'PEREZ SOTO, ANA');
const desarrolloBasadoPlataformasCC = new Curso('Desarrollo Basado en Plataformas', 4, 3, 'Miércoles: 8am - 10am', 'RAMIREZ QUISPE, JUAN');
const estructurasDiscretasCC = new Curso('Estructuras Discretas', 3, 3, 'Viernes: 2pm - 5pm', 'TORRES MENDOZA, LUIS');
estructurasDiscretasCC.agregarRequisito(agaCC);
const ecuacionesDiferencialesCC = new Curso('Series y Ecuaciones Diferenciales', 4, 3, 'Jueves: 8am - 10am', 'LOPEZ DIAZ, SOFIA');
ecuacionesDiferencialesCC.agregarRequisito(calculoIICC);
const ingecoCC = new Curso('Ingeniería Económica', 3, 3, 'Martes: 6pm - 10pm', 'MACHADO VICENTE, JOEL FERNANDO');
ingecoCC.agregarRequisito(calculoIICC);
const opticaCC = new Curso('Óptica y Electro-Magnetismo', 3, 3, 'Sábado: 10am - 1pm', 'GUTIERREZ SALAZAR, PEDRO');
opticaCC.agregarRequisito(fisicaCC);

// 4to ciclo
const algoritmosEstructuraDatosCC = new Curso('Algoritmos y Estructuras de Datos', 3, 4, 'Lunes: 4pm - 6pm', 'FERNANDEZ ROJAS, MARTA');
algoritmosEstructuraDatosCC.agregarRequisito(programacionComputadorasICC);
const teoriaComputacionCC = new Curso('Teoría de la Computación', 4, 4, 'Martes: 8am - 10am y Jueves: 4pm - 6pm', 'SANDOVAL PEREIRA, HUGO');
teoriaComputacionCC.agregarRequisito(estructurasDiscretasCC);
const baseDatosICC = new Curso('Base de Datos 1', 3, 4, 'Miércoles: 2pm - 5pm', 'SILVA CASTRO, CARLA');
baseDatosICC.agregarRequisito(programacionComputadorasICC);
const arquitecturaComputadorasCC = new Curso('Arquitectura de Computadoras', 4, 4, 'Viernes: 8am - 10am', 'CARRILLO HERRERA, DIEGO');
arquitecturaComputadorasCC.agregarRequisito(introCienciaComputacionCC);
arquitecturaComputadorasCC.agregarRequisito(opticaCC);
const estadisticaProbabilidadesCC = new Curso('Estadística y Probabilidades', 4, 4, 'Sábado: 2pm - 6pm', 'REYES JIMENEZ, ADRIAN');
estadisticaProbabilidadesCC.agregarRequisito(calculoIICC);
const analisisNumericoCC = new Curso('Análisis Numérico', 3, 4, 'Jueves: 10am - 12pm', 'MORALES GONZALEZ, LAURA');
analisisNumericoCC.agregarRequisito(ecuacionesDiferencialesCC);

// 5to ciclo
const analisisDisenoAlgoritmosCC = new Curso('Análisis y Diseño de Algoritmos', 4, 5, 'Lunes: 6pm - 8pm', 'NAVARRO ESPINOZA, RICARDO');
analisisDisenoAlgoritmosCC.agregarRequisito(algoritmosEstructuraDatosCC);
const baseDatosIICC = new Curso('Base de Datos 2', 4, 5, 'Martes: 2pm - 4pm y Jueves: 6pm - 8pm', 'MEJIA ORTIZ, FRANCISCO');
baseDatosIICC.agregarRequisito(baseDatosICC);
const ingenieriaSoftwareICC = new Curso('Ingeniería de Software 1', 3, 5, 'Miércoles: 10am - 1pm', 'VALENCIA NUÑEZ, TERESA');
ingenieriaSoftwareICC.agregarRequisito(desarrolloBasadoPlataformasCC);
const sistemasOperativosCC = new Curso('Sistemas Operativos', 4, 5, 'Viernes: 2pm - 4pm', 'DIAZ CAMPOS, EDUARDO');
sistemasOperativosCC.agregarRequisito(arquitecturaComputadorasCC);
const programacionComputadorasIICC = new Curso('Programación de Computadoras 2', 4, 5, 'Sábado: 8am - 12pm', 'ALVAREZ SANTOS, ANDREA');
programacionComputadorasIICC.agregarRequisito(programacionComputadorasICC);
const investigacionOperativaCC = new Curso('Investigación Operativa', 4, 5, 'Jueves: 2pm - 5pm', 'HERRERA LOZANO, CAMILA');
investigacionOperativaCC.agregarRequisito(estadisticaProbabilidadesCC);

// 6to ciclo
const ingenieriaSoftwareIICC = new Curso('Ingeniería de Software 2', 4, 6, 'Lunes: 8am - 10am', 'CASTILLO MENDEZ, JULIO');
ingenieriaSoftwareIICC.agregarRequisito(ingenieriaSoftwareICC);
const redesComunicacionesCC = new Curso('Redes y Comunicaciones', 4, 6, 'Martes: 10am - 12pm', 'SALAZAR RIVERA, MARTHA');
redesComunicacionesCC.agregarRequisito(sistemasOperativosCC);
const estructuraDatosAvanzadoCC = new Curso('Estructura de Datos Avanzado', 4, 6, 'Miércoles: 2pm - 5pm', 'CORDOVA PEREZ, JUAN');
estructuraDatosAvanzadoCC.agregarRequisito(baseDatosIICC);
estructuraDatosAvanzadoCC.agregarRequisito(analisisDisenoAlgoritmosCC);
const topicosSistemasOperativosCC = new Curso('Tópicos de Sistemas Operativos Avanzados', 3, 6, 'Jueves: 4pm - 6pm', 'RODRIGUEZ QUISPE, ANDREA');
topicosSistemasOperativosCC.agregarRequisito(sistemasOperativosCC);
const lenguajesCompiladoresICC = new Curso('Lenguajes y Compiladores 1', 3, 6, 'Viernes: 6pm - 8pm', 'GOMEZ TORO, LUIS');
lenguajesCompiladoresICC.agregarRequisito(estructurasDiscretasCC);
lenguajesCompiladoresICC.agregarRequisito(programacionComputadorasIICC);
const modelosSimulacionCC = new Curso('Modelos y Simulación', 3, 6, 'Sábado: 10am - 1pm', 'NAVARRO LOPEZ, ANA');
modelosSimulacionCC.agregarRequisito(investigacionOperativaCC);
const procesosEstocasticosCC = new Curso('Procesoso Estocásticos', 4, 6, 'Miércoles: 8am - 10am', 'RAMIREZ QUISPE, JUAN');
procesosEstocasticosCC.agregarRequisito(estadisticaProbabilidadesCC);

// 7mo ciclo
const interaccionHumanoComputadorCC = new Curso('Interacción Humano Computador', 4, 7, 'Lunes: 10am - 12pm', 'FERNANDEZ GARCIA, MIGUEL');
interaccionHumanoComputadorCC.agregarRequisito(topicosSistemasOperativosCC);
const lenguajesCompiladoresIICC = new Curso('Lenguajes y Compiladores 2', 4, 7, 'Martes: 2pm - 4pm', 'RUIZ VARGAS, LUCIA');
lenguajesCompiladoresIICC.agregarRequisito(lenguajesCompiladoresICC);
const computacionParalelaDistribuidaCC = new Curso('Computación Paralela y Distribuida', 3, 7, 'Miércoles: 8am - 10am', 'TORO MORALES, DAVID');
computacionParalelaDistribuidaCC.agregarRequisito(redesComunicacionesCC);
const computacionGraficaCC = new Curso('Computación Gráfica', 3, 7, 'Jueves: 2pm - 4pm', 'GONZALEZ PEREZ, JUANA');
computacionGraficaCC.agregarRequisito(analisisNumericoCC);
computacionGraficaCC.agregarRequisito(estructuraDatosAvanzadoCC);
const heuristicasCC = new Curso('Heurísticas y Meta Heurísticas', 3, 7, 'Viernes: 4pm - 6pm', 'VELASQUEZ LOPEZ, PABLO');
heuristicasCC.agregarRequisito(procesosEstocasticosCC);
const investigacionInnovacionCC = new Curso('Investigación e Innovación', 3, 7, 'Sábado: 8am - 10am', 'NUNEZ CASTILLO, SOFIA');
investigacionInnovacionCC.agregarRequisito(modelosSimulacionCC);

// 8vo ciclo
const seguridadComputacionCC = new Curso('Seguridad en Computación', 4, 8, 'Lunes y Miércoles 8:00 - 10:00', 'RAMÍREZ PÉREZ, JUAN');
seguridadComputacionCC.agregarRequisito(computacionParalelaDistribuidaCC);
const topicosCienciaDatosCC = new Curso('Tópicos en Ciencia de Datos', 4, 8, 'Martes y Jueves 10:00 - 12:00', 'FERNÁNDEZ LÓPEZ, ANA');
topicosCienciaDatosCC.agregarRequisito(baseDatosIICC);
topicosCienciaDatosCC.agregarRequisito(procesosEstocasticosCC);
const inteligenciaArtificialCC = new Curso('Inteligencia Artificial', 3, 8, 'Viernes 14:00 - 16:00', 'CASTRO GÓMEZ, MARÍA');
inteligenciaArtificialCC.agregarRequisito(heuristicasCC);
const arteTecnologiaCC = new Curso('Arte y Tecnología', 4, 8, 'Lunes y Miércoles 16:00 - 18:00', 'LÓPEZ MARTÍNEZ, CARLOS');
arteTecnologiaCC.agregarRequisito(interaccionHumanoComputadorCC);
const proyectoFinalCarreraICC = new Curso('Proyecto Final de Carrera 1', 4, 8, 'Martes y Jueves 18:00 - 20:00', 'GUTIÉRREZ DÍAZ, LUIS');
proyectoFinalCarreraICC.agregarRequisito(investigacionInnovacionCC);
const computacionVerdeCC = new Curso('Computación Verde', 4, 8, 'Sábado 9:00 - 12:00', 'HERRERA TORRES, ELENA');
computacionVerdeCC.agregarRequisito(investigacionInnovacionCC);

// 9no ciclo
const topicosInteligenciaArtificialCC = new Curso('Tópicos en Inteligencia Artificial', 4, 9, 'Lunes y Miércoles 8:00 - 10:00', 'MEDINA RIVERA, PABLO');
topicosInteligenciaArtificialCC.agregarRequisito(inteligenciaArtificialCC);
const practicaPreProfesionalICC = new Curso('Práctica Pre Profesional 1', 3, 9, 'Martes y Jueves 10:00 - 12:00', 'SALAZAR RAMOS, JULIA');
practicaPreProfesionalICC.agregarRequisito(inteligenciaArtificialCC);
practicaPreProfesionalICC.agregarRequisito(topicosCienciaDatosCC);
const topicosComputacionGraficaCC = new Curso('Tópicos en Computación Gráfica', 3, 9, 'Viernes 14:00 - 16:00', 'VARGAS FLORES, MIGUEL');
topicosComputacionGraficaCC.agregarRequisito(arteTecnologiaCC);
const proyectoFinalCarreraIICC = new Curso('Proyecto Final de Carrera 2', 3, 9, 'Lunes y Miércoles 16:00 - 18:00', 'PAREDES CRUZ, SOFÍA');
proyectoFinalCarreraIICC.agregarRequisito(proyectoFinalCarreraICC)

// 10mo ciclo
const practicaPreProfesionalIICC = new Curso('Práctica Pre Profesional 2', 4, 10, 'Lunes y Miércoles 8:00 - 10:00', 'CÁRDENAS MENDOZA, JOSÉ');
practicaPreProfesionalIICC.agregarRequisito(practicaPreProfesionalICC);
const tecnologiaInternetCC = new Curso('Tecnología Basada en Internet', 4, 10, 'Martes y Jueves 10:00 - 12:00', 'ESPINOZA REYES, CAMILA');
tecnologiaInternetCC.agregarRequisito(proyectoFinalCarreraICC);
const bioinformaticaCC = new Curso('Bioinformática y Bioestadística', 3, 10, 'Viernes 14:00 - 16:00', 'DELGADO FERNÁNDEZ, MARCO');
bioinformaticaCC.agregarRequisito(topicosCienciaDatosCC);
const proyectoFinalCarreraIIICC = new Curso('Proyecto Final de Carrera 3', 3, 10, 'Lunes y Miércoles 16:00 - 18:00', 'MUÑOZ SÁNCHEZ, LORENA');
proyectoFinalCarreraIIICC.agregarRequisito(topicosCienciaDatosCC);

const cursos_cc = { 
    // 1er ciclo
    'Álgebra y Geometría Analítica': agaCC,  
    'Biología para Ciencias e Ingeniería': biologiaCC,  
    'Cálculo 1': calculoICC,  
    'Desarrollo Personal y Liderazgo': dplCC,  
    'Medio Ambiente y Desarrollo Sostenible': madsCC,  
    'Métodos de Estudios Universitarios': meuCC,  
    'Programación y Computación': programacionCC,  
    'Redacción y Técnicas de Comunicación Efectiva 1': redaccionICC,  

    // 2do ciclo
    'Cálculo 2': calculoIICC,  
    'Emprendimiento e Innovación': emprendimientoCC,  
    'Física I': fisicaCC,  
    'Introducción a las Ciencias e Ingeniería': introduccionCienciasIngenieriaCC,  
    'Investigación Formativa': investigacionFormativaCC,  
    'Química General': quimicaCC,  
    'Realidad Nacional y Mundial': realidadNacionalCC,  
    'Redacción y Técnicas de Comunicación Efectiva 2': redaccionIICC,  

    // 3er ciclo
    'Introducción a la Ciencia de la Computación': introCienciaComputacionCC,  
    'Programación de Computadoras 1': programacionComputadorasICC,  
    'Desarrollo Basado en Plataformas': desarrolloBasadoPlataformasCC,  
    'Estructuras Discretas': estructurasDiscretasCC,  
    'Series y Ecuaciones Diferenciales': ecuacionesDiferencialesCC,  
    'Ingeniería Económica': ingecoCC,  
    'Óptica y Electro-Magnetismo': opticaCC,  

    // 4to ciclo
    'Algoritmos y Estructuras de Datos': algoritmosEstructuraDatosCC,  
    'Teoría de la Computación': teoriaComputacionCC,  
    'Base de Datos 1': baseDatosICC,  
    'Arquitectura de Computadoras': arquitecturaComputadorasCC,  
    'Estadística y Probabilidades': estadisticaProbabilidadesCC,  
    'Análisis Numérico': analisisNumericoCC,  

    // 5to ciclo
    'Análisis y Diseño de Algoritmos': analisisDisenoAlgoritmosCC,  
    'Base de Datos 2': baseDatosIICC,  
    'Ingeniería de Software 1': ingenieriaSoftwareICC,  
    'Sistemas Operativos': sistemasOperativosCC,  
    'Programación de Computadoras 2': programacionComputadorasIICC,  
    'Investigación Operativa': investigacionOperativaCC,  

    // 6to ciclo
    'Ingeniería de Software 2': ingenieriaSoftwareIICC,  
    'Redes y Comunicaciones': redesComunicacionesCC,  
    'Estructura de Datos Avanzado': estructuraDatosAvanzadoCC,  
    'Tópicos de Sistemas Operativos Avanzados': topicosSistemasOperativosCC,  
    'Lenguajes y Compiladores 1': lenguajesCompiladoresICC,  
    'Modelos y Simulación': modelosSimulacionCC,  
    'Procesoso Estocásticos': procesosEstocasticosCC,  

    // 7mo ciclo
    'Interacción Humano Computador': interaccionHumanoComputadorCC,  
    'Lenguajes y Compiladores 2': lenguajesCompiladoresIICC,  
    'Computación Paralela y Distribuida': computacionParalelaDistribuidaCC,  
    'Computación Gráfica': computacionGraficaCC,  
    'Heurísticas y Meta Heurísticas': heuristicasCC,  
    'Investigación e Innovación': investigacionInnovacionCC,  

    // 8vo ciclo
    'Seguridad en Computación': seguridadComputacionCC,  
    'Tópicos en Ciencia de Datos': topicosCienciaDatosCC,  
    'Inteligencia Artificial': inteligenciaArtificialCC,  
    'Arte y Tecnología': arteTecnologiaCC,  
    'Proyecto Final de Carrera 1': proyectoFinalCarreraICC,  
    'Computación Verde': computacionVerdeCC,  

    // 9no ciclo
    'Tópicos en Inteligencia Artificial': topicosInteligenciaArtificialCC,  
    'Práctica Pre Profesional 1': practicaPreProfesionalICC,  
    'Tópicos en Computación Gráfica': topicosComputacionGraficaCC,  
    'Proyecto Final de Carrera 2': proyectoFinalCarreraIICC,  

    // 10mo ciclo
    'Práctica Pre Profesional 2': practicaPreProfesionalIICC,  
    'Tecnología Basada en Internet': tecnologiaInternetCC,  
    'Bioinformática y Bioestadística': bioinformaticaCC,  
    'Proyecto Final de Carrera 3': proyectoFinalCarreraIIICC,  
};