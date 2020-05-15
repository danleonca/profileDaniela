let btnNextPage = document.getElementById('projectsPage');
btnNextPage.addEventListener('click', printProjects);

function printProjects() {
  let printSP = document.getElementById('perfilConteiner');
  let rootSP = `<div id="titleSP"><h1 id="tileScondPafe">Proyectos JavaScript</h1>
    <div id="projects">
        <div id"firstProject" class="tarjets">
        <a title="Ver app" href="https://shari12.github.io/CDMX009-Data-Lovers/" target="_blank"><img id="imgFirstProject" class= "imgProject" src="img/pokemon.svg" /></a>
          
            <p>Data Lover de pókemon GO es una app creada para apoyar a los maestros pokemones en su busqueda por ser más fuertes, está app consume el set de datos de todos los pokemones de la región Kanto y crea una interfaz web donde se puede visualizar y manipular data, para que el usuario pueda acceder a esta data de forma eficiente.
            Se utilizó JavaScript, HTML  y CSS, es una aplicación que se puede visualizar en todos los dispositivos.
            </p>
        </div>
    
        <div id"SecondProyect" class="tarjets">
        <a title="Ver app" href="https://danleonca.github.io/CDMX009-Social-Network/" target="_blank"><img id="imgSecondProject" class= "imgProject" src="img/estudia.png" /></a>
         
            <p>estuDÍA es una red social de apoyo para las personas interesadas en llevar a cabo el proceso de admisión al IPN, es un espacio donde los usuarios a través de publicaciones puedan compartir consejos, experiencias, etc;  y así hacer el proceso de ingreso a la Universidad  más fácil y sólido entre los solicitantes.
            Es una aplicación SPA, movil first, creada con JavaScript, HTML y CSS.
            Permite la persistencia de datos a través de FireBase
            </p>
        </div>
    </div>

    <div id="btns">
        <button class="btnStyle" id="btnShare">Comentar</button>
    </div>
    
    </div>
    `
  printSP.innerHTML = rootSP;
  let btnComent = document.getElementById('btnShare');
  btnComent.addEventListener('click', goToComents);

}

function goToComents() {
  let tarjetComent = `
    <div id="leaveComents">
    <p><textarea id= "name" cols="40" rows="1" placeholder="Escribe tu nombre"></textarea></p>
    <p><textarea id= "email" cols="40" rows="1" placeholder="Deja tu Email"></textarea></p>
    <p><textarea id= "newComent" cols="40" rows="15" placeholder="Escribe tus comentarios"></textarea></p>
    <p><button class="btnStyle" id="btnSend">Enviar</button></p>
    </div>`
  let printSP = document.getElementById('perfilConteiner');

  printSP.innerHTML = tarjetComent;

  let sendComents = document.getElementById('btnSend');
  sendComents.addEventListener('click', saveFireBase);
}




function saveFireBase() {
  let getName = document.getElementById('name');
  let getMail = document.getElementById('email');
  let getComent = document.getElementById('newComent');
  let date = new Date();
  date += Date.now();
  const date1 = date.slice(0, 25);
  firebase.firestore().collection('allComents').add({

    name: getName.value,
    mail: getMail.value,
    comments: getComent.value,
    date: date1,

  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      // console.log(coment.value);
      //const cleanBox = document.getElementById('text-box');
      getName.value = '';
      getMail.value = '';
      getComent.value = '';
      //console.log(cleanBox);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}
function showMe() {
  let printSP = document.getElementById('perfilConteiner');
  let myDescription = `<div class= "allAboutMe"><div id="quote"><p>"Nada en este mundo debe ser temido... sólo entendido. Ahora es el momento de comprender más, para que podamos temer menos"</p>
    <p> Marie Curie </p></div>
   <div id="whoImI"> <h3> ¿Quién soy?</h3>
    <p>Hola! Mi nombre es Daniela soy Front end-developer; me considero una  persona proactiva, valiente y fuerte; con pensamiento crítico, analítico y objetivo. 
      La ciencia es y siempre será mi pasión,  el desarrollo de nuevos paradigmas es lo que me motiva a  dar siempre lo mejor.
      ¿Cuál es mi objetivo? Desentrañar los secretos de la naturaleza a través de la tecnología.
      </p> </div>
      </div>
    `
  printSP.innerHTML = myDescription
}


let btnMe = document.getElementById('aboutMe');
btnMe.addEventListener('click', showMe);
