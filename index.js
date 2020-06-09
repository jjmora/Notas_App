var init = 0;
var contenido_1 = ""; 
var entradas = 10; //numero de entradas minimo en pantalla

// borrar el contenido al hacer click en la primera entrada
function test(){
    borrar();
}

function borrar(){
    contenido_1 = document.getElementById('txt_1').value;
    if(contenido_1 === "Write your text here"){
        document.getElementById('txt_1').value = "";      
    }  
}

/*
function nuevaEntrada(){
    let html = "<article><input></article>";
    document.querySelector(".contenido").insertAdjacentHTML('beforeend', html);
    entradas++;
  };


function borrarEntrada(){
    if(entradas > 10){
        let html = document.getElementById("contenido");
        html.removeChild(html.lastChild);
        entradas--;
    }
};*/

        /* CADA VEZ QUE SE HACE CLICK EN EL MENU LA CLASE CAMBIA */
        function myFunction(){

            document.getElementById("menu").classList.toggle("change");
        
            document.getElementById("lateralMenu").classList.toggle("change");    
        };



/* DRAG AND DROP */
const lista = document.getElementById("contenido");

Sortable.create(lista, {
    handle: '.drag', // handle's class
    animation: 150
});

/* V_1.0.4 ** LOCAL STORAGE ** */


var input_1 = document.getElementById("txt_1");
var input_2 = document.getElementById("txt_2");
var input_3 = document.getElementById("txt_3");
var input_4 = document.getElementById("txt_4");
var input_5 = document.getElementById("txt_5");
var input_6 = document.getElementById("txt_6");
var input_7 = document.getElementById("txt_7");
var input_8 = document.getElementById("txt_8");
var input_9 = document.getElementById("txt_9");
var input_10 = document.getElementById("txt_10");

function insertData1(){
    var data_1 = input_1.value;
    localStorage.setItem("data_1", data_1);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[0].id;
        console.log("el id de este artículo es "+ thisId);
}

function insertData2(){
    var data_2 = input_2.value;
    localStorage.setItem("data_2", data_2);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[1].id;
        console.log("el id de este artículo es "+ thisId);
}

function insertData3(){
    var data_3 = input_3.value;
    localStorage.setItem("data_3", data_3);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[2].id;
        console.log("el id de este artículo es "+ thisId);
}

function insertData4(){
    var data_4 = input_4.value;
    localStorage.setItem("data_4", data_4);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[3].id;
        console.log("el id de este artículo es "+ thisId);
}

function insertData5(){
    var data_5 = input_5.value;
    localStorage.setItem("data_5", data_5);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[4].id;
        console.log("el id de este artículo es "+ thisId);
}
function insertData6(){
    var data_6 = input_6.value;
    localStorage.setItem("data_6", data_6);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[5].id;
        console.log("el id de este artículo es "+ thisId);
}
function insertData7(){
    var data_7 = input_7.value;
    localStorage.setItem("data_7", data_7);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[6].id;
        console.log("el id de este artículo es "+ thisId);
}
function insertData8(){
    var data_8 = input_8.value;
    localStorage.setItem("data_8", data_8);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[7].id;
        console.log("el id de este artículo es "+ thisId);
}
function insertData9(){
    var data_9 = input_9.value;
    localStorage.setItem("data_9", data_9);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[8].id;
        console.log("el id de este artículo es "+ thisId);
}

function insertData10(){
    var data_10 = input_10.value;
    localStorage.setItem("data_10", data_10);
        /*USAR ESTO PARA PODER GENERAR TODO ESTO EN UNA SOLA FUNCION*/
        let thisId = document.getElementsByClassName("formArticle")[9].id;
        console.log("el id de este artículo es "+ thisId);
}






window.addEventListener("load", function(event) {
    data_1 = localStorage.getItem("data_1");

        /* Carga de datos en la primera fila */
    if(!data_1){
        document.getElementById("txt_1").value = "Write your text here";
        }else{
            document.getElementById("txt_1").value = data_1;
    };
        
        /* Carga de datos en el resto de filas - segun filas tenga el formulario */
    let form = document.getElementById("contenido").elements;
    for(let i = 2; i <= form.length; i++){
        inputName = "txt_"+i;
        inputData = "data_" + i;
        document.getElementById(inputName).value = localStorage.getItem(inputData);
    }

  });


  function clearAllData(){
        localStorage.clear();
        document.getElementById("warningContainer").classList.remove("showWarning");
        let voidData = "";
        let form = document.getElementById("contenido").elements;
        let inputName;
        for(let i = 1; i <= form.length; i++){
                inputName = "txt_"+i;
                document.getElementById(inputName).value = voidData;
        }
  };

  function noClearData(){
    document.getElementById("warningContainer").classList.remove("showWarning");
  };

  function warning(){
    document.getElementById("warningContainer").classList.toggle("showWarning");
    myFunction();
  };

    
    
