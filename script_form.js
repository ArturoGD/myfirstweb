const form = document.getElementById("form");
const nombre = document.getElementById("nomb");
const par1 = document.getElementById("alerta-1");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  par1.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `Te recomiendo ingresar más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    par1.innerHTML = warnings;
  } else {
    par1.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});