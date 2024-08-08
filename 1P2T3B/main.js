const reminders = document.querySelector('.reminders');
const reminds__array = [["Passar na 1ª fase da UFPR",new Date('2024-10-20T14:00:00')],["Passar na 2ª fase da UFPR",new Date('2024-12-03T14:00:00')],["Abrir uma empresa",new Date('2025-06-24T00:00:00')],["Ler 10 livros",new Date('2025-01-01T00:00:00')],["Escrever um artigo científico",new Date('2024-10-20T14:00:00')]]
var today = new Date();

for (let index = 0; index < reminds__array.length; index++) {
    let element = reminds__array[index];
    let milisseconds = (element[1].getTime() - today.getTime());
    let days = Math.floor(milisseconds/86400000);
    let hours = Math.floor((milisseconds%86400000)/3600000);
    let minutes = Math.floor((milisseconds%3600000)/60000);
    let seconds = Math.floor((milisseconds%60000)/1000);
    reminders.innerHTML = reminders.innerHTML + `<div class="card"><h1 class="remind-heading">${element[0]}</h1><div class="count"><div class="digit"><h1 class="number-digit" id="0">${days}</h1><h1 class="digit-type">dias</h1></div><div class="digit"><h1 class="number-digit" id="1">${hours}</h1><h1 class="digit-type">horas</h1></div><div class="digit"><h1 class="number-digit" id="2">${minutes}</h1><h1 class="digit-type">minutos</h1></div><div class="digit"><h1 class="number-digit" id="3">${seconds}</h1><h1 class="digit-type">segundos</h1></div></div></div>`;
}