/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

const bntCripto = document.getElementById("btn-cripto");
const btnDescript = document.getElementById("btn-descripto");
const btnCopy = document.getElementById("btn-copy");
const copiarTexto = document.getElementById("msg");
const mensagem = document.getElementById("input-texto");

/*bntCripto.addEventListener("click",Criptografar);
btnDescript.addEventListener("click",Descriptografar);
btnCopy.addEventListener("click",Copiar);*/

document.addEventListener("click", function (event) {
    event.preventDefault();
    let button = event.target.value;
  
    if (button == "criptografar!") {
      Criptografar()
    } else if (button == "descriptografar!") {
      Descriptografar()
    } else if (button == "copiar") {
      Copiar()
    }
  });

function Criptografar(){
  let titulo = document.getElementById('titulo');
  titulo.innerHTML = "Mensagem Criptografada:"
  let controle;
  let aux;
  let texto = mensagem.value;
  let MsCriptograda = texto
  controle = verificaMensagem(MsCriptograda);
  if(controle == 0){
    aux = MsCriptograda 
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  }

  else if(controle == 1){
    aux = "Sua mensagem contém caracteres alfanuméricos ):"
  }
  else if(controle == 2){
    aux = "Não é permitido caracteres maiúsculos ):"
  }
  else if(controle == 3){
    aux = "Não é permitido caracteres especiais ):"
  }

  else{
    aux = "Não é permitido acentuação ):"
  }
    
  copiarTexto.value = aux;
}

function Descriptografar(){
  let titulo = document.getElementById('titulo');
  titulo.innerHTML = "Mensagem Descriptografada:"
  let controle;
  let aux;
  let texto = mensagem.value;
  let MsDescriptograda = texto;
  controle = verificaMensagem(MsDescriptograda);
  if(controle == 0){
    aux = MsDescriptograda
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  }

  else if (controle == 1){
    aux = "Sua mensagem contém caracteres alfanuméricos ):"
  }
  else if(controle == 2){
    aux = "Não é permitido caracteres maiúsculos ):"
  }
  else if(controle == 3){
    aux = "Não é permitido caracteres especiais ):"
  }
  else{
    aux = "Não é permitido acentuação ):"
  }
        
    
  copiarTexto.value = aux;
}

function Copiar(){
  let mensagemCop = copiarTexto.value;
  let aux = document.getElementById("mensagem-copiada");
  aux.style.backgroundColor = "rgb(231, 178, 227)";
  let controle = verificaMensagem(mensagemCop);
  if(mensagemCop != "" && controle == 0){
    aux.innerHTML = "Sua mensagem foi copiada: " + mensagemCop;
  }
  else{
    aux.innerHTML = "Não foi possível copiar a mensagem ):";
  }
    
}

function verificaMensagem(mensagem){
  var controle = 0;

  for(var i=0; i< mensagem.length;i++){
    if(mensagem[i] == '1' || mensagem[i] == '2' || mensagem[i] == '3' || mensagem[i] == '4' || mensagem[i] == '5' ||
    mensagem[i] == '6' || mensagem[i] == '7' || mensagem[i] == '8' || mensagem[i] == '9' || mensagem[i] == '0'){
      controle = 1;
      break;
    }
    else if(mensagem[i] == 'A' || mensagem[i] == 'B' || mensagem[i] == 'C' || mensagem[i] == 'D' || mensagem[i] == 'E' ||
    mensagem[i] == 'F' || mensagem[i] == 'G' || mensagem[i] == 'H' || mensagem[i] == 'I' || mensagem[i] == 'J' || 
    mensagem[i] == 'L' || mensagem[i] == 'M' || mensagem[i] == 'N' || mensagem[i] == 'O' || mensagem[i] == 'P' ||
    mensagem[i] == 'Q' || mensagem[i] == 'R' || mensagem[i] == 'S' || mensagem[i] == 'T' || mensagem[i] == 'U' ||
    mensagem[i] == 'V' || mensagem[i] == 'X' || mensagem[i] == 'Z' || mensagem[i] == 'W' || mensagem[i] == 'Y'){
      controle = 2;
      break;
    }

    else if(mensagem[i] =='!' || mensagem[i] =='@' || mensagem[i] =='#' || mensagem[i] =='$' || mensagem[i] =='%' ||
    mensagem[i] =='¨' || mensagem[i] =='&' || mensagem[i] =='*' || mensagem[i] =='(' || mensagem[i] ==')' || 
    mensagem[i] =='_' || mensagem[i] =='-' || mensagem[i] =='+' || mensagem[i] =='=' || mensagem[i] =='{' ||
    mensagem[i] =='}' || mensagem[i] =='[' || mensagem[i] ==']' || mensagem[i] =='/' ||mensagem[i] =='?' ||
    mensagem[i] ==',' || mensagem[i] =='.' || mensagem[i] ==';'|| mensagem[i] ==':' || mensagem[i] =='<' || 
    mensagem[i] =='>' || mensagem[i] =='|'){
      controle = 3;
      break;
    }

    else if(mensagem[i] == 'ã' || mensagem[i] == 'ô' || mensagem[i] == 'ê' || mensagem[i] == 'ô' || mensagem[i] == 'ì'
     || mensagem[i] == 'í' || mensagem[i] == 'ü' || mensagem[i] == 'á' || mensagem[i] == 'à' || mensagem[i] == 'ç') {
       controle = 4;
       break;
     }
  }

  return controle;
}

