//Reto del amigo secreto para Alura LATAM;
//Array (lista) donde se almacenaran los nombres;
const friend = [];

//Función que será llamada al presionar el botón "addFriend";
function addFriend (){
    let getFriend = document.getElementById('nameFriend').value.trim();
    //Primero se verifica que la entrada no esté vacía; y que el nombre no esté ya en la lista;

    if(getFriend !== "" && !friend.includes(getFriend)){
        friend.push(getFriend);
//Verificar entradas        
        console.log(friend)
        console.log(getFriend)
    } else {
        alert("Por favor, ingrese un nombre válido o que no esté repetido");
    }
    clearInput()
};

// Limpiar la entrada
function clearInput (){
    document.getElementById('nameFriend').value = '';
}