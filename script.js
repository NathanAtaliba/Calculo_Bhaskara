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