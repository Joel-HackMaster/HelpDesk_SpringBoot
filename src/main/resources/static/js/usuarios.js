// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios() {
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const usuarios = await request.json();
  console.log(usuarios);

  let listadoHTML='';
  for(let usuario of usuarios){
    let botonEliminar = '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let telefonotexto = usuario.telefono == null ? '-' : usuario.telefono;
    let usuarioHTML = "<tr>\n" +
        "<td>"+usuario.id+"</td>\n" +
        "<td>"+usuario.nombre+" "+usuario.apellidos+"</td>\n" +
        "<td>"+usuario.email+"</td>\n" +
        "<td>"+telefonotexto+"</td>\n" +
        "<td>\n" +
        botonEliminar+
        "</td>"+
        "</tr>";
    listadoHTML += usuarioHTML;
  }
  document.querySelector('#usuarios tbody').outerHTML=listadoHTML;
}

async function eliminarUsuario(id) {
  if(!confirm('¿Desea eliminar este usuario?')){
    return;
  }
  const request = await fetch('api/usuario/'+id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}