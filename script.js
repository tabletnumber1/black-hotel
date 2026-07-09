
function bookRoom(roomType) {
    const selectedRoomInput = document.getElementById('selectedRoom');
    selectedRoomInput.value = roomType;
    
 
    document.querySelector('.booking').scrollIntoView({ behavior: 'smooth' });
}


function confirmBooking() {
    const name = document.getElementById('name').value.trim();
    const room = document.getElementById('selectedRoom').value;
    const date = document.getElementById('date').value;

    // Валідація полів
    if (!name) {
        alert("Будь ласка, введіть ваше ім'я.");
        return;
    }
    if (!room) {
        alert("Будь ласка, оберіть номер, натиснувши кнопку 'Забронювати' вище.");
        return;
    }
    if (!date) {
        alert("Будь ласка, оберіть дату заїзду.");
        return;
    }

  
    alert(`Дякуємо, ${name}! Номер типу "${room}" успішно заброньовано на ${date}. Очікуйте на дзвінок менеджера.`);
    

    document.getElementById('name').value = '';
    document.getElementById('selectedRoom').value = '';
    document.getElementById('date').value = '';
}