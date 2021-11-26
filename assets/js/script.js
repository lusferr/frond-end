let nome = document.querySelector('#nome')
let nomeOk = false
let email = document.querySelector('#email')
let emailOk = false
let comentario = document.querySelector('#comentario')
let comentarioOk = false

nome.style.width = '100%'
email.style.width = '100%'

//função para validar o nome 
function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red' 
    }else{
        txtNome.innerHTML = 'nome valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@' && '.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Tudo certo'
        txtEmail.style.color = 'green'
        emailOk = true
    }
    
}

function validarComentario() {
    let txtComentario = document.querySelector('#txtComentario')
    if(comentario.value.length < 100) {
        txtComentario.innerHTML = 'Comentario valido'
        txtComentario.style.color = 'green' 
    }else{
        txtComentario.innerHTML = 'O comentario não pode ultrapassar 100 caracteres'
        txtComentario.style.color = 'red'
        comentarioOk = true
    }
}


// função para enviar o nome
function enviar(){
    if(nomeOk == true || emailOk == true || comentarioOk == true){
        alert('Enviado')
    }else{
        alert('Preencha os dados corretamente')
    }
}