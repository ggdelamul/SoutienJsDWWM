import { dataSetArray } from './infrastructure/getInformation.mjs';
import { showAllPersonnages, addClickOnEachElement } from './application/showInformation.mjs';
import { dataSet } from './domaine/dataset.mjs';
import { Personnage } from './domaine/Personnage.mjs';
const listePersonnages = document.querySelector('.listPersonnages');
let liPersonnages = document.querySelectorAll('li');
const sectionOnePersonnage = document.querySelector('.onePersonnage');
const btnAdd = document.querySelector(".add");
const nomInput = document.querySelector('#Nom')
const prenomInput = document.querySelector('#Prenom')
const citationInput = document.querySelector('#Citation');
showAllPersonnages(dataSetArray, listePersonnages);
btnAdd.addEventListener("click", () => {
    let nom = nomInput.value;
    let prenom = prenomInput.value;
    let citation = citationInput.value;
    let newPersonnage = new Personnage(nom, prenom, citation);
    dataSet.push(newPersonnage);
    while (listePersonnages.firstChild) {
        listePersonnages.removeChild(listePersonnages.firstChild);
    }
    showAllPersonnages(dataSetArray, listePersonnages);
    liPersonnages = document.querySelectorAll('li');
    addClickOnEachElement(liPersonnages, dataSetArray, sectionOnePersonnage);
})
addClickOnEachElement(liPersonnages, dataSetArray, sectionOnePersonnage);
