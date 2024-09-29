const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle también falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francés", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Elda",
        pais: "Española",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];

// Función que devuelve un array con el contenido de usuarios más un nuevo usuario pasado como parámetro.
function insertarUsuario(nuevoUsuario){
  let usuariosActualizados = [...usuarios,nuevoUsuario];
  return usuariosActualizados;
}

// Probando la función.
let usuariosActualizados = insertarUsuario({
  nombre: "Nueva Usuario",
  preferencias: { tema: "claro", idioma: "español", edad: 22 },
  contacto: {
      direccion: {
          calle: "Calle nueva, 1",
          localidad: "Madrid",
          pais: "España",
      },
      correoelectronico: "nuevausuario@gmail.com",
      telefono: "987654321",
  },
});

// Mostramos por consola los objetos JSON desestructurados con el nombre y el correo.
usuariosActualizados.forEach(function({nombre,contacto:{correoelectronico}}){
  console.log(`Nombre: ${nombre} - Correo: ${correoelectronico}`);
});


// Función que devuelve un array filtrando el array usuarios según si son mayores de edad.
function usuariosMayoresEdad(){
  let mayores = usuarios.filter(usuario => usuario.preferencias.edad>=18);
  return mayores;
}

// Llamamos a la función y almacenamos el resultado.
let mayoresUsuarios = usuariosMayoresEdad();

// Mostramos los nombres y edades de los usuarios mayores de edad.
console.log(`Los usuarios mayores de edad son: ${mayoresUsuarios.map((usuario) => {
  return `${usuario.nombre} con ${usuario.preferencias.edad} años`
}).join(', ')}`); // Ponemos join para que deje un espacio entre las comas.


// Función que devuelve un array filtrando el array usuarios según si en su correo incluye yahoo.com.
function usuariosYahoo(){
  let usuariosYahoo = usuarios.filter(usuario => usuario.contacto.correoelectronico.includes("@yahoo.com"));
  return usuariosYahoo;
}

// Lo ponemos a prueba.
let yahooUsuarios = usuariosYahoo();
console.log(`Los usuarios que usan yahoo son: ${yahooUsuarios.map((usuario) => {
  return usuario.nombre
}).join(', ')}`);


// Función que devuelve un array filtrando el array usuarios si prefieren tema claro, son mayores de edad y son españoles.
function usuariosTemaClaroMayoresEspana(){
  let usuariosTemaClaroMayoresEspana = usuarios.filter(usuario=>
    usuario.preferencias.tema === "claro" &&
    usuario.preferencias.edad >=18 &&
    usuario.contacto.direccion.pais.includes("Españ") // Hay usuarios que en país pone "Española" por eso el includes "Españ".
  );
  return usuariosTemaClaroMayoresEspana;
}

// Lo ponemos a prueba.
let temaclaroUsuarios = usuariosTemaClaroMayoresEspana();
console.log(`Los usuarios que usan tema claro, son mayores de edad y viven en España son: ${temaclaroUsuarios.map((usuario) => {
  return usuario.nombre
}).join(', ')}`);


/* Esta función he tenido que preguntar por IA como hacerla correctamente. He entendido el funcionamiento de cómo hacerla:
Mira cada valor de cada objeto usuario del array de usuarios y mira si están vacíos o undefined. Hace lo mismo con los valores de los objetos
dentro del objeto usuario. Si alguno de esos valores están vacíos o undefined lo metemos al array de usuarios a los que les faltan datos.*/
function faltanDatos(){
  let faltanDatos = [];
  usuarios.forEach(usuario => {
    let faltanCampos = Object.values(usuario).some(valor =>{
      if (typeof valor === 'object') {
        return Object.values(valor).some(v => v === "" || v === undefined);
      }
    return valor === "" || valor === undefined;
    });

    if(faltanCampos)
      faltanDatos.push(usuario);
  });

  return faltanDatos;
}

// Lo ponemos a prueba.
let usuariosSinDatos = faltanDatos();
console.log(`Los usuarios a los que les faltan datos son: ${usuariosSinDatos.map((usuario) => {
  return usuario.nombre
}).join(', ')}`);


// Función que devuelve la información del array usuarios pero añadiendole una clave "apellidos" con un valor por defecto.
function addApellidos(){
  let usuariosConApellidos = usuarios.map(usuario => ({
    ...usuario,
    apellidos: "No indicado"
  }));

  return usuariosConApellidos;
}


// Función que devuelve la información del array usuarios pero añadiendole una clave "código" dentro de la dirección del usuario con un valor por defecto.
function addCodigo(){
  let usuariosConCodigo = usuarios.map(usuario => ({
    ...usuario,
    contacto:{
      ...usuario.contacto,
      direccion:{
        ...usuario.direccion,
        codigo:"0000",
      }
    }
  }));

  return usuariosConCodigo;
}

// Los ponemos a prueba.
let usuariosConApellidos = addApellidos();
console.log(`Lista de usuarios añadiéndole apellidos:`);
usuariosConApellidos.forEach(function({nombre,apellidos}){
  console.log(`Nombre: ${nombre} - Apellidos: ${apellidos}`);
});

let usuariosConCodigo = addCodigo();
console.log(`Lista de usuarios añadiéndole código:`);
usuariosConCodigo.forEach(function({nombre,contacto:{direccion:{codigo}}}){
  console.log(`Nombre: ${nombre} - Código: ${codigo}`);
});