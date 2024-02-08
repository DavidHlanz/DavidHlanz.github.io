let noButtonClickCount = 0;
let noButtonState = 0;

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";


//Funcion que se activa cuando le damos al boton Si
document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML = "Enga ya esta";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";

      var imagenCambiar = document.getElementById("perritoTriste");
      if (imagenCambiar && imagenCambiar.style){
        imagenCambiar.style.height = "300px";
        imagenCambiar.style.width = "250px";
      }



      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML = "Como que no";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").innerHTML = "oyeeeeeee!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "30px 50px ";
      document.getElementById("siBtn").innerHTML = "PULSAMEEEEE"

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML ="PARA YAAAAAAAAAA";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "60px";
      document.getElementById("siBtn").style.padding = "40px 60px";
      document.getElementById("siBtn").innerHTML = "MIRA QUE ERA BROMA"
      

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "AL FINAL ME ENFADO";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "70px";
      document.getElementById("siBtn").style.padding = "50px 70px ";
      document.getElementById("siBtn").innerHTML = "YA VOYY"

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML = "no me pulses:(";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "80px";
      document.getElementById("siBtn").style.padding = "60px 80px ";
      document.getElementById("siBtn").innerHTML = "ESTE ES ROJO PER SIGNIFICA QUE ES VERDE"

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "VENGA DE VERDAD";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "90px";
      document.getElementById("siBtn").style.padding = "70px 90px ";
      document.getElementById("siBtn").innerHTML = "AQUI SI ES"
      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML = "NO ME DES!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "100px";
      document.getElementById("siBtn").style.padding = "70px 100px ";
      document.getElementById("siBtn").innerHTML = "PORFAVOR TU PUEDES"

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML = "NO ME DESSS";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "110px";
      document.getElementById("siBtn").style.padding = "80px 110px ";
      document.getElementById("siBtn").innerHTML = "PULSAME😎"

      noButtonState++;
      break;
    case 8:
      document.getElementById("noBtn").innerHTML = "ESTE NO ESSSS";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "120px";
      document.getElementById("siBtn").style.padding = "90px 120px ";
      document.getElementById("siBtn").innerHTML = "ESTE ES EL CORRECTO"

      noButtonState++;
      break;

    case 9:
      document.getElementById("noBtn").innerHTML = "PARAAAAAA";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("siBtn").style.fontSize = "130px";
      document.getElementById("siBtn").style.padding = "100px 130px ";
      document.getElementById("siBtn").innerHTML = "YA LE DOY AL VERDE"

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML ="NI SE TE OCURRA";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("siBtn").style.fontSize = "140px";
      document.getElementById("siBtn").style.padding = "110px 140px ";
      document.getElementById("siBtn").innerHTML = "DALE AL VERDEEEEE"

      noButtonState++;
      break;
    
    case 11:
      document.getElementById("noBtn").innerHTML = "NOOOOOOOOOOOOOOOOO";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "block";
      document.getElementById("happyGifContainer").style.display = "none";

      noButtonState = 0;
      break;

    default:

      break;
  }
});