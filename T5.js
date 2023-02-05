var nameUser;
var pass;
var msgUser;
var msgPassword;


function validar() {
    let userValid = validarUsuario();
    let passValid = validarContraseña();
  if (userValid && passValid) {
    return true;
  }
  else {
    return false;
  }
}
/**
 *Funcion que se encarga de validar los datos de un usuario
 *en funcion de la expresión regular
 *@returns true o false segun sea valido o no
 */
function validarUsuario() {
  nameUser = document.getElementById("Username").value;
  msgUser = document.getElementById("txtUser");
  
  //expresion regular
  var ParamUser = /^([a-z]{3,12})$/gm;
 
  if (nameUser == "") {
    msgUser.style.color = "red";
    msgUser.style.fontWeight = "100";
    msgUser.style.fontSize = "0.85em";
    msgUser.innerHTML = "El campo usuario no puede estar vacío";
    return false;
  } else {
    if (!ParamUser.test(nameUser)) {
      msgUser.style.color = "red";
      msgUser.style.fontWeight = "100";
      msgUser.style.fontSize = "0.85em";
      msgUser.innerHTML =
        "Solo se admiten letras minúsculas entre 3 y 12 caracteres. Ej: esmeldy";
      return false;
    } else {
      msgUser.innerHTML = "";
      return true;
    }
  }
}

/**
 * Funcion que se encarga de validar los datos de una contraseña
 * en funcion de la expresion regular
 * @returns true o false segun sea válida o no
 */
function validarContraseña() {

  //Expresion regular
  var ParamPass = /^([A-Z])(\.|,|-)(\d{6}|\w{6})$/gm;


  pass = document.getElementById("Password").value;

  msgPassword = document.getElementById("txtPassword");

  if (pass == "") {
    msgPassword.style.color = "red";
    msgPassword.style.fontWeight = "100";
    msgPassword.style.fontSize = "0.85em";
    msgPassword.innerHTML = "El campo contraseña no puede estar vacío";
    return false;
  } else {
    if (!ParamPass.test(pass)) {
        msgPassword.style.color = "red";
        msgPassword.style.fontWeight = "100";
        msgPassword.style.fontSize = "0.85em";
        msgPassword.innerHTML =
            "Contraseña no válida. Ej. de contraseñas válidas: A.carbot, F,as14dg, H-951357";
        return false;
    } else {
      msgPassword.innerHTML = "";
      return true;
    }
  }
}
