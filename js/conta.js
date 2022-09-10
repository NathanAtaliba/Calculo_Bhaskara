function limpar(){
    var A = window.document.getElementById("A")
    var B = window.document.getElementById("B")
    var C = window.document.getElementById("C")
    var X1P = window.document.getElementById("x1")
    var X2P = window.document.getElementById("x2")
    var deltaP = window.document.getElementById("delta")
    A.value = '0'
    B.value = '0'
    C.value = '0'
    X1P.innerHTML= '0';
    X2P.innerHTML = '0'
    deltaP.innerHTML = '0'
    
 }
 function calcular(){
    var A = window.document.getElementById("A")
    var B = window.document.getElementById("B")
    var C = window.document.getElementById("C")
    var X1P = window.document.getElementById("x1")
    var X2P = window.document.getElementById("x2")
    var deltaP = window.document.getElementById("delta")
    var X1 
    var X2
    var DELTA

    DELTA = (B.value) **2 -4*(A.value)*(C.value)
    if(DELTA>0){
      X1 = (-(B.value)+ DELTA **(1/2))/2*(A.value)
      X2 = (-(B.value)- DELTA **(1/2))/2*(A.value)
      deltaP.innerHTML = String(DELTA)
      X1P.innerHTML = String(X1)
      X2P.innerHTML = String(X2)
    }
    else if(DELTA<0){
      deltaP.innerHTML = String(DELTA)
      X1P.innerHTML = `indefinido`
      X2P.innerHTML = `indefinido`
    }
    else{
      X1 = (-(B.value)+ DELTA **(1/2))/2*(A.value)
      deltaP.innerHTML = String(DELTA)
      X1P.innerHTML = String(X1)
      X2P.innerHTML = `Raiz 1`
    }


 }