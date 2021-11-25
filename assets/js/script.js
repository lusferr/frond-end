let nome = document.querySelector('#nome')
let nomeOk = false

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

// função para enviar o nome
function enviar(){
    if(nomeOk == true){
        alert('Enviado')
    }else{
        alert('preencha o nome corretamente!')
    }
}