const reminders = document.querySelector('.reminders');
const reminds__array = [["Passar na 1ª fase da UFPR",Date('20/10/2024')],["Passar na 2ª fase da UFPR",Date('20/10/2024')],["Abrir uma empresa",Date('20/10/2024')],["Ler 10 livros",Date('20/10/2024')],["Escrever um artigo científico",Date('20/10/2024')]]
var today = Date();

for (let index = 0; index < reminds__array.length; index++) {
    let element = reminds__array[index];
    reminders.innerHTML = "";
}