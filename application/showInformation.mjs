
let showAllPersonnages = (dataSetArray, elementHtml) => {
    dataSetArray.forEach(element => {
        //console.log(typeof (element));
        const li = document.createElement('li');
        if (element.hasOwnProperty('Id')) {
            let { Id, Nom, Prenom } = element;
            li.textContent = `Nom: ${Nom} Prénom: ${Prenom}`;
            li.setAttribute('data-id', Id);
        } else {
            li.textContent = "L'élément ne possède pas de propriété approprié";
        }
        elementHtml.appendChild(li);
    });
}
let showPersonnage = (dataSetArray, id, elementHtml) => {
    let personnage = Array.from(dataSetArray).find(element => element.Id == id);
    //console.log(personnage);
    if(personnage.hasOwnProperty('Id')){
        let { Id, Nom, Prenom, Citation } = personnage;
        let divModal = document.createElement('div');
        let p = document.createElement('p');
        let paragraphe = `Nom: ${Nom} Prénom: ${Prenom} Citation: ${Citation} Id: ${Id}`;
        p.textContent = paragraphe;
        divModal.appendChild(p);
        divModal.classList.add('modal');
        elementHtml.appendChild(divModal)
    }
}

let addClickOnEachElement = (liPersonnages, dataSetArray, elementHtml)=> {
    liPersonnages.forEach((personnage => {
        personnage.addEventListener("click", () => {
            let idPersonnage = personnage.dataset['id'];
            //console.log(typeof (idPersonnage));
            showPersonnage(dataSetArray, idPersonnage, elementHtml)
        })
    }))
}

export { showAllPersonnages, showPersonnage, addClickOnEachElement };