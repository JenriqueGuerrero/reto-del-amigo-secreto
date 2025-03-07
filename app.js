//Reto del amigo secreto para Alura LATAM;
//Array (lista) donde se almacenaran los nombres;
const friend = [];
// Lista para almacenar los amigos ya elegidos
const selectedFriends = [];
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

function randomizeFriend() {
    if (friend.length - selectedFriends.length > 0) {
// Filtrar amigos no seleccionados  
        let availableFriends = friend.filter(f => !selectedFriends.includes(f));
        let randomIndex = Math.floor(Math.random() * availableFriends.length);
        let selectedFriend = availableFriends[randomIndex];
// Agregar el nombre a la lista de seleccionados
        selectedFriends.push(selectedFriend);
        document.getElementById('result').innerHTML = `El amigo seleccionado es: <strong>${selectedFriend}</strong>`;

    } else {
        alert("Todos los amigos ya han sido sorteados.");
    }
}

//Lista de amigos
function updateFriendList() {
    let friendList = document.getElementById('friendList');
    friendList.innerHTML = "";  

    friend.forEach(name => {
        let listItem = document.createElement('li');
        listItem.textContent = name;
        friendList.appendChild(listItem);
    });
}

// Limpiar la entrada
function clearInput (){
    document.getElementById('nameFriend').value = '';
}

// Vaciar la lista de seleccionados
function resetSelection() {
    selectedFriends.length = 0;
    document.getElementById('result').innerHTML = "Sorteo reiniciado.";
}