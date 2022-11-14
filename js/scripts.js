var cantEntradas,
  total,
  categoria,
  entradaEstudiante,
  entradaTrainee,
  entradaJunior
  entradaEstudiante = 200 - (200 * 80) / 100;
  entradaTrainee = 200 - (200 * 50) / 100;
  entradaJunior = 200 - (200 * 15) / 100;

function calcularTotal()
  {

  
    console.log("ingresa a la funcion");
    cantEntradas = document.getElementById("inputCantidad").value;
    categoria = document.getElementById("inputCategoria").value;
  
    console.log("cant entradas " + cantEntradas + " - categoria " + categoria);
  


    if (categoria == "Estudiante") {
        total = entradaEstudiante * cantEntradas;
        document.getElementById("importeTotal").innerHTML =
          "Total a Pagar: " + total;
      } else if (categoria == "Trainee") {
        total = entradaTrainee * cantEntradas;
        document.getElementById("importeTotal").innerHTML =
          "Total a Pagar: " + total;
      } else if (categoria == "Junior") {
        total = entradaJunior * cantEntradas;
        document.getElementById("importeTotal").innerHTML =
          "Total a Pagar: " + total;
    } else {
      window.alert("Debe ingresar una cantidad válida.");
    }
}
  
  function borrar() 
  {
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputApellido").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputCantidad").value = "";
    document.getElementById("inputCategoria").value = "Estudiante";
    document.getElementById("importeTotal").innerHTML = "Total a Pagar: ";
  }