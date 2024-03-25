import { dataSetArray } from './infrastructure/getInformation.mjs';
import { showAllPersonnages, showPersonnage } from './application/showInformation.mjs';
const listePersonnages = document.querySelector('.listPersonnages');
showAllPersonnages(dataSetArray, listePersonnages);
const liPersonnages = document.querySelectorAll('li');
const sectionOnePersonnage = document.querySelector('onePersonnage');
console.log(liPersonnages);
liPersonnages.forEach((personnage => {
    personnage.addEventListener("click", () => {
        let idPersonnage = personnage.dataset['id'];
        //console.log(typeof (idPersonnage));
        showPersonnage(dataSetArray, idPersonnage,sectionOnePersonnage )
    })
}))