//Declaración de variables
nombreUsuario = "López Sergio";
saldoCuenta = 3000;
limiteExtraccion = 3000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones propias
var sumarSaldo = function(dinero){
  saldoCuenta += dinero;
}

var restarSaldo = function(dinero){
  saldoCuenta -= dinero;
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  nuevoLimite = prompt("Ingresar nuevo límite de extracción.");
  limiteExtraccion = nuevoLimite;
  actualizarLimiteEnPantalla();
  alert("Su nuevo límite de extracción es: $ " + limiteExtraccion);
}

function extraerDinero() {
  extraccion = prompt("Ingrese la cantidad de dinero que desea extraer.");
  extraccion = parseInt(extraccion);
  if (extraccion > limiteExtraccion){
    alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.")
  } else if (extraccion % 100 !== 0){
    alert("Solo puedes extraer billetes de 100.");
  } else if (extraccion > saldoCuenta){
    alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.")
  } else {
  saldoAnterior = saldoCuenta;
  restarSaldo(extraccion);
  actualizarSaldoEnPantalla();
  alert("Saldo anterior: " + saldoAnterior + "\nExtracción: " + extraccion + "\nSaldo actual: " + saldoCuenta);
}
}

function depositarDinero() {
  deposito = prompt("Ingrese la cantidad de dinero que desea depositar");
  deposito = parseInt(deposito);
  saldoAnterior = saldoCuenta;
  sumarSaldo(deposito);
  actualizarSaldoEnPantalla();
  alert("Saldo anterior: " + saldoAnterior + "\nDepósito: " + deposito + "\nSaldo actual: " + saldoCuenta);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
