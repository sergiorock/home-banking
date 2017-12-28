//Declaración de variables
nombreUsuario = "López Sergio";
saldoCuenta = 15000;
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
  nuevoLimite = prompt("Ingresar nuevo límite de extraccion");
  limiteExtraccion = nuevoLimite;
  actualizarLimiteEnPantalla();
  alert("Su nuevo límite de extracción es: $ " + limiteExtraccion);
}

function extraerDinero() {
  extraccion = prompt("Ingrese la cantidad de dinero que desea extraer");
  extraccion = parseInt(extraccion);
  saldoAnterior = saldoCuenta;
  restarSaldo(extraccion);
  actualizarSaldoEnPantalla();
  alert("Saldo anterior: " + saldoAnterior + "\nExtracción: " + extraccion + "\nSaldo actual: " + saldoCuenta);
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
