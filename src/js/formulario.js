const inputs = document.querySelectorAll('.required');
const campoObrigatorio = document.querySelectorAll(".aviso-campo-obrigatorio");

const formulario = document.querySelector(".formulario");

function invalidar(i){

    campoObrigatorio[i].style.display = 'block';

    inputs[i].style.border = '1px solid  #F52E2E';
}


function validar(i){

    campoObrigatorio[i].style.display = 'none';
    inputs[i].style.border = '1px solid #00C22B'
    
}

function validarNome(){
    if(inputs[0].value.length < 3){

        invalidar(0);

    }else{
        validar(0);
    }
}

function validarEmail(){
    if(inputs[1].value.length < 10){

        invalidar(1);

    }else{
        validar(1);
    }
}

function validarTelefone(){
    if(inputs[2].value.length < 11){

        invalidar(2);

    }else{
        validar(2);
    }
}

function validarMsg(){
    if(inputs[3].value.length < 6){

        invalidar(3);

    }else{
        validar(3);
    }
}

formulario.addEventListener('submit', function(event){
   event.preventDefault();
   validarNome();
   validarEmail();
   validarTelefone();
   validarMsg();

})




