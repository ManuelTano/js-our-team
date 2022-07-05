// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// # BONUS 1:
// Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
// # BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato

const team = [
    {
        name: 'Wayne Barnett',
        work: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        work: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        work: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        work: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        work: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        work: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);

const members = document.getElementById('member');

for (let i = 0; i < team.length; i++) {
    const infomembers = team[i];
    members.innerHTML += `<li>${infomembers.name} | ${infomembers.work} | ${infomembers.image}</li>`;
    }