//Declaración de variables
codSeguridad = 2705;
nombreUsuario = "López Sergio";
saldoCuenta = 15000;
limiteExtraccion = 3000;
agua = 350;
luz = 210;
internet = 570;
telefono = 425;
cuentaAmiga1 = 1234567;
cuentaAmiga2 = 7654321;

//Inicio de Sesión
iniciarSesion();

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones
function sumarSaldo(dinero){
  saldoCuenta += dinero;
}

function restarSaldo(dinero){
  saldoCuenta -= dinero;
}

function haySaldoDisponible (num) {
  if (saldoCuenta >= num) {
    return true;
  }else {
    return false;
  }
}

function esPositivo (num) {
  if (num > 0) {
    return true;
  }else {
    return false;
  }
}

function esMenorQue (x, y){
  if (x < y) {
    return true;
  }else {
    return false;
  }
}

function esMayorQue (x, y){
  if (x > y) {
    return true;
  }else {
    return false;
  }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  nuevoLimite = prompt("Ingresar nuevo límite de extracción.");
  nuevoLimite = parseInt(nuevoLimite);
  if (esPositivo(nuevoLimite) == true) {
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("Su nuevo límite de extracción es: $ " + limiteExtraccion);
  }else {
    alert("El límite de extracción debe ser mayor a 0.");
  }
}

function extraerDinero() {
  extraccion = prompt("Ingrese la cantidad de dinero que desea extraer.");
  extraccion = parseInt(extraccion);
  if (haySaldoDisponible(extraccion) == true) {
    if (esPositivo(extraccion) == false) {
      alert("Operación no valida. Ingrese un monto mayor a 0")
    }else if (esMayorQue(extraccion, limiteExtraccion) == true) {
      alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.");
    }else if (extraccion % 100 !== 0) {
      alert("Solo puedes extraer billetes de 100.");
    }else {
      saldoAnterior = saldoCuenta;
      restarSaldo(extraccion);
      actualizarSaldoEnPantalla();
      alert("Saldo anterior: " + saldoAnterior + "\nExtracción: " + extraccion + "\nSaldo actual: " + saldoCuenta);
    }
  }else {
    alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
  }
}

function depositarDinero() {
  deposito = prompt("Ingrese la cantidad de dinero que desea depositar.");
  deposito = parseInt(deposito);
  if (esPositivo(deposito) == true) {
    saldoAnterior = saldoCuenta;
    sumarSaldo(deposito);
    actualizarSaldoEnPantalla();
    alert("Saldo anterior: " + saldoAnterior + "\nDepósito: " + deposito + "\nSaldo actual: " + saldoCuenta);
  }else {
    alert("Número no válido")
  }
}

function pagarServicio() {
  num = prompt("Ingrese el número que corresponda con el servicio que desea pagar \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Teléfono")
  num = parseInt(num);
  switch (num) {
    case 1:
      if (esMenorQue(saldoCuenta, agua) == true) {
        alert("No hay sufuciente saldo en tu cuenta para pagar este servicio.")
      } else {
        saldoAnterior = saldoCuenta;
        saldoCuenta -= agua;
        alert("Has pagado el servicio Agua \nSaldo Anterior: " + saldoAnterior + "\nDinero descontado: " + agua + "\nSaldo actual: " + saldoCuenta);
        actualizarSaldoEnPantalla();
      }
      break;
    case 2:
      if (esMenorQue(saldoCuenta, luz) == true) {
        alert("No hay sufuciente saldo en tu cuenta para pagar este servicio.")
      } else {
        saldoAnterior = saldoCuenta;
        saldoCuenta -= luz;
        alert("Has pagado el servicio Luz \nSaldo Anterior: " + saldoAnterior + "\nDinero descontado: " + luz + "\nSaldo actual: " + saldoCuenta);
        actualizarSaldoEnPantalla();
      }
      break;
    case 3:
      if (esMenorQue(saldoCuenta, internet) == true) {
        alert("No hay sufuciente saldo en tu cuenta para pagar este servicio.")
      } else {
        saldoAnterior = saldoCuenta;
        saldoCuenta -= internet;
        alert("Has pagado el servicio Internet \nSaldo Anterior: " + saldoAnterior + "\nDinero descontado: " + internet + "\nSaldo actual: " + saldoCuenta);
        actualizarSaldoEnPantalla();
      }
      break;
    case 4:
      if (esMenorQue(saldoCuenta, telefono) == true) {
        alert("No hay sufuciente saldo en tu cuenta para pagar este servicio.")
      } else {
        saldoAnterior = saldoCuenta;
        saldoCuenta -= telefono;
        alert("Has pagado el servicio Teléfono \nSaldo Anterior: " + saldoAnterior + "\nDinero descontado: " + telefono + "\nSaldo actual: " + saldoCuenta);
        actualizarSaldoEnPantalla();
      }
      break;
    default:
    alert("No existe el servicio que ha seleccionado.");
  }
}

function transferirDinero() {
  monto = prompt("Ingrese el monto que desea transferir.")
  monto = parseInt(monto);
  if (esPositivo(monto) == false) {
    alert("Monto inválido");
  }else if (esMayorQue(monto, saldoCuenta)){
    alert("No puede transferir esa cantidad de dinero, su saldo es insuficiente.")
  } else {
    cuenta = prompt("ingrese número de cuenta a la cual desea hacer un transferencia.")
    cuenta = parseInt(cuenta);
    if (cuenta === cuentaAmiga1 || cuenta === cuentaAmiga2){
      saldoCuenta -= monto;
      alert("Se han transferido $" + monto + "\nCuenta destino: " + cuenta);
      actualizarSaldoEnPantalla();
    } else {
      alert("Solo puede realizar transferencias a cuentas amigas.")
    }
  }
}

function iniciarSesion() {
  codCuenta = prompt("Ingrese el código de su cuenta");
  codCuenta = parseInt(codCuenta);
  if (codCuenta === codSeguridad) {
    alert("Bienvenido " + nombreUsuario + " ya puedes comenzar a realizar operaciones.")
  } else {
    saldoCuenta = 0;
    alert("Código incorrecto. Tu dinero se ha retenido por cuestiones de seguridad.")
    actualizarSaldoEnPantalla();
  }
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
