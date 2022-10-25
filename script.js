function calcular(){
var X1 = window.document.getElementById("X1")
var X2 = window.document.getElementById("X2")
var DELTA = window.document.getElementById("DELTA")
var A = window.document.getElementById("A")
var B = window.document.getElementById("B")
var C = window.document.getElementById("C")
DELTA.innerHTML = (B.value)**2-4*(A.value*C.value)
X1.innerHTML = (-(B.value)+(Number(DELTA.innerHTML)**(1/2)))/(2*A.value)
X2.innerHTML = (-(B.value)-(Number(DELTA.innerHTML)**(1/2)))/(2*A.value)
}
function limpar(){
    X1.innerHTML = "0"
    X2.innerHTML = "0"
    DELTA.innerHTML = "0"
    A.value = "0"
    B.value = "0"
    C.value = "0"
}

function escolha(esc){
    var checked = 0
    if(esc==1){      
        //SALVANDO ELEMENTOS
        var c = document.getElementById("C")
        var cl = document.getElementById("CL")
        var x2 = document.getElementById("X2L")
        var x2l = document.getElementById("X2L")
        var delta = document.getElementById("DELTA")
        var deltal = document.getElementById("DELTAL")
        //REMOVENDO ELEMENTOS DA TELA
    document.getElementById("C").remove() 
    document.getElementById("CL").remove()
    document.getElementById("DELTAL").remove()
    document.getElementById("DELTA").remove()
    document.getElementById("X2L").remove()
    document.getElementById("X2").remove()
    checked = 1
}   
    else{   
       // c.insertAdjacentHTML('afterend', '<div class="resultado" id="resultado">')
if(checked==1){
       // Buscar elemento pai
        var elemento_pai = document.getElementById("resultado");
        // Criar elemento
        var titulo = document.createElement('label');
        // Criar o nó de texto
        var texto = document.createTextNode("X2 = 0");
        // Anexar o nó de texto ao elemento h1
        titulo.appendChild(texto);
        // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
        elemento_pai.appendChild(titulo); 
      //  checked = 0
    }
    }
    }
    