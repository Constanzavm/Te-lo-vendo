///este es el coso del datatable
//aqui le decimos holiwis, ponle formatito a la tabla
$(document).ready(function () {
    miDataTable();
});


function miDataTable() {
    //aqui le decimos a datatable que la tabla que queremos formatear tiene ID "miTabla"
    $('#miTabla').DataTable({
        //para que tenga modo ingles y español
        "language": {
            "emptyTable": "<i>No hay datos disponibles en la tabla.</i>",
            "info": "Del _START_ al _END_ de _TOTAL_ ",
            "infoEmpty": "Mostrando 0 registros de un total de 0.",
            "infoFiltered": "(filtrados de un total de _MAX_ registros)",
            "infoPostFix": "(actualizados)",
            "lengthMenu": "Mostrar _MENU_ registros",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "<span style='font-size:15px;'>Buscar:</span>",
            "searchPlaceholder": "Dato para buscar",
            "zeroRecords": "No se han encontrado coincidencias.",
            "paginate": {
                "first": "Primera",
                "last": "Última",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": "Ordenación ascendente",
                "sortDescending": "Ordenación descendente"
            }
        },
        //aqui esta el menu, para decirle, holis, muestrame solo 3 lineas de tabla o 5 o 7, etc
        "lengthMenu": [[3, 5, 7, 10, 20, 25, 50, -1], [3, 5, 7, 10, 20, 25, 50, "Todos"]],
        //aqui le decimos que la cantidad de elementos que muestra al cargarse sea de 10
        //lo que luego la persona puede cambiar segun el menu de arriba segun le combenga
        "iDisplayLength": 10,

    });
}

//////

function comprobar() {

    //aqui estamos obteniendo los elementos <__> a travez de su id y obteniendo el valor de su contenido

    let nombre = document.getElementById("txtNombre").value;
    let correo = document.getElementById("txtEmail").value;
    let telefono = document.getElementById("txtTel").value;
    let mensaje = document.getElementById("floatingTextarea").value;
    let error = document.getElementById("error");

    //caracteres obligatorios
    //aqui estamos informando que tipo de secuencias necesita estar
    //dentro del campo del formulario para que sea valido
    //por ejemplo la primera indica - (de entre a z {minusculas} entre A Z {mayusculas} del 0 al 9 y se permiten _ . -)
    // + {debe ser segudo} por @ ((otra vez, a hasta z, numeros y gion) seguido de {+} un .)
    //lo que debe ser segido, otra vez, por valores entre a y z, numeos, blablabla
    //lo entre {...} creo que define que este campo tiene que tener en 2 y 4 caracteres
    var expr = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    // esta otra variable indica que solo se pueden ingresar numeros
    var expr2 = /^([0-9])/;

    //arreglo para agradar el mensaje de error
    //ahora esta vacio pero segun salten errores los iremos agregando
    var merror = []

    ///////////////no usamos pero no queremos terminar de desechar/////////
    // errores
    // if (!expr.test(correo)) {
    //     merror.push("Error: La dirección de correo " + correo + " es incorrecta.");
    // }
    // if (!expr2.test(telefono)) {
    //     merror.push("Error: El número de telefono " + telefono + " es incorrecta.");
    // }
    // if (telefono.length < 9) {
    //     merror.push("Telefono: deben ser al menos 9 números");
    // }
    ///////////////////////////////////////////////////////////


    //campos vacios y errores
    //aqui vamos agregando los errores y otras cosas
    //estamos deiciendo que si la variable nombre esta vacia (de dos formas) 
    //debe ejecutarse el codigo entre {..}
    if (nombre == "" || nombre == null) {
        // con .push agregamos una cosa en el arreglo que creamos antes
        //en este caso, agregamos el texto "falta su nombre" al arreglo merror
        merror.push("falta su nombre");
        //aquí estamos obteniendo el estilo del color de fondo del elemento con id "txtNombre"
        //y lo cambiamos por un naranjo rojo cosa claro para que destaque el campo
        document.getElementById("txtNombre").style.backgroundColor = "LightCoral";
        //este campo del formulario tiene un placeholder, es decir, un textito que aparece por defecto
        //si no hay nada escrito, con esto lo estamos cambiando
        document.getElementById("txtNombre").placeholder = "falta nombre";
    } else {
        // con else, aqui estamos indicando que si no pasa lo que dijimos arriba
        //osea, si se escribio algo en esta parte del cuestionario, el color pasa a ser blanco
        document.getElementById("txtNombre").style.backgroundColor = "white";
    }
    
    //aqui con !expr.test(correo) le estamos pidiendo que chequee que lo que se indico
    //en el campo de correo electronico coincide con lo que dijimos antes
    //osea, que sean letras y/o numeros, segidas de un @, segidas de más letras o numeros, seguidas de un punto, seguias de más letras y numeros que deben ser entre 3 y 4 dijitos
    if (correo == "" || correo == null || !expr.test(correo)) {
        merror.push("falta un correo valido");
        document.getElementById("txtEmail").style.backgroundColor = "LightCoral";
        document.getElementById("txtEmail").placeholder = "falta correo";
    } else {
        document.getElementById("txtEmail").style.backgroundColor = "white";
    }

    //aqui destaco/recuerdo que || significa "o"
    // si pasa esto o lo otro o esto otro o esta otra cosa más, haz esto
    //osea, con que se cumpla cualquiera de estas cosas ya tira un error
    if (telefono == "" || telefono == null || telefono.length < 9 || !expr2.test(telefono)) {
        merror.push("falta un telefono valido");
        document.getElementById("txtTel").style.backgroundColor = "LightCoral";
        document.getElementById("txtTel").placeholder = "falta telefono";
    } else {
        document.getElementById("txtTel").style.backgroundColor = "white";
    }

    //aclarar que digo "" y null porque uno vale para texto y el otro para todo lo demas o algo por el estilo
    //creo que igual se podria poner ==undefined, pero el ejemplo que encontre era con null
    if (mensaje == "" || mensaje == null) {
        merror.push("no ha escrito su mensaje");
        document.getElementById("floatingTextarea").style.backgroundColor = "LightCoral";
        document.getElementById("floatingTextarea").placeholder = "falta un mensaje";
    } else {
        document.getElementById("floatingTextarea").style.backgroundColor = "white";
    }

    //mensaje de error
    //en el html tenemos un <p> con el ID campos
    //aqui le decimos que encuentre campos y ponga dentro los (en este caso) textos
    //que hemos agregado en merror
    //con .join(", ") le estamos diciendo que a cada coso que pesca le agregue una , y un espacio
    //para que quede "cosa1, cosa2, cosa3" y no "cosa1cosa2cosa3"
    document.getElementById("campos").innerHTML = merror.join(", ");

    //monstrar mensaje de error
    //aqui decimos que si se cumple cualquiera de esas cosas, haga visible un div del html
    //que se llama erro y definimos en una variable del mismo nombre por el principio
    if (nombre == "" || nombre == null || correo == "" || correo == null || telefono == "" || telefono == null || mensaje == "" || mensaje == null || !expr.test(correo) || !expr2.test(telefono) || telefono.length < 9) {
        error.style.display = "block";

    }

    //todo bien
    //aqui estamos diciendo que si no hay ninguno de los errores de ahi arriba
    //haga que el mensaje de error desaparezca en caos de que ya estubiera desplegado
    else {
        //este console.log es porque queria ver que si estaba tomando los campos
        console.log(nombre, correo, telefono, mensaje);
        error.style.display = "none";
        //aqui iria coso para enviar el formulario
    }
}

//toda esta funcion esta aderida al boton de enviar, con un <button -otros atributos- onclick="nombrefuncion()">Nombre Del Boton Que Ve El Usuario<Button> al que le quite que fuera "submit"
//y deje de solo button para que no refrescara la pagina