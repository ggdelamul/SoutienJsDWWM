let dataSet = [
    {
        Id: 1,
        Nom: "Rambo",
        Prenom: "Jhon",
        Citation: "C'est pas ma guerre"
    },
    {
        Id: 2,
        Nom: "Terminator",
        Prenom: "T1000",
        Citation: "Si tu veux vivre suis moi"
    },
    {
        Id: 3,
        Nom: "Rico",
        Prenom: "Jhonny",
        Citation: "Bande de macaque, vous voulez vire pour toujours ?"
    },
]

class Personnage {
    static nbInstance = 4;
    constructor(Nom, Prenom, Citation) {
        this.Id = Personnage.nbInstance;
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Citation = Citation;
        Personnage.nbInstance++;
    }
}
let personnage2 = new Personnage("tortue", "ninja", "KAWABUNGA");
personnage2.adresse = {
    adresse: "les egouts",
    ville: "New York"
}
const personnage3 = new Personnage("James", "Bond", "Mon nom est Bond JamesBond ");
console.log(personnage3);

const { Nom: NomPersonnage, Prenom, adresse, ...rest } = personnage2;
//console.log(adresse.adresse);
dataSet.push(personnage2);
dataSet.push(personnage3);
//console.log(dataSet);
let showPersonnage = (liste, personnage) => {
    const { Nom, Prenom } = personnage;
    const element = document.createElement('li');
    if (personnage.hasOwnProperty("adresse")) {
        element.textContent = `Nom:${Nom} Prénom:${Prenom} Adresse : ${adresse.adresse} : ${adresse.ville}`
    } else {
        element.textContent = `Nom:${Nom} Prénom:${Prenom}`;
    }
    liste.appendChild(element);
}
const liste = document.querySelector('ul');
dataSet.forEach(personnage => {
    showPersonnage(liste, personnage)
})
const span = document.querySelector('span');
let isSortedByABC = false;
span.addEventListener('click', () => {
    console.log('click');
    deleteLi(liste);

    if (!isSortedByABC) {
        dataSet.sort((a, b) => {
            return a.Nom.localeCompare(b.Nom);
        });
        console.log(dataSet);
        dataSet.forEach(personnage => {
            showPersonnage(liste, personnage)
        })
        isSortedByABC = true;
    } else {
        console.log("c'est déjà trié");
        deleteLi(liste);
        dataSet.sort((a, b) => {
            return a.Id > b.Id;
        });
        dataSet.forEach(personnage => {
            showPersonnage(liste, personnage)
        })
        isSortedByABC = false;
    }

})
const deleteLi = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}
const getPersonnageParId = (Id) => {
    return dataSet.find(element => element.Id == Id);
}
const btn = document.querySelector('button');
const input = document.querySelector('input');
const ulById = document.querySelector('.id')
btn.addEventListener('click', () => {
    let value = input.value;
    console.log(value);
    const personnage = getPersonnageParId(value);
    if (personnage) {
        deleteLi(ulById);
        console.log(personnage);
        showPersonnage(ulById, personnage)
    } else {
        ulById.textContent = "personnage non trouvé";
    }
})

/*filter crée un nouveau tableau avec le résultat du filtre ici je récupère les éléments avec un Id pair*/
let dataSetIdImPair = dataSet.filter(element => element.Id % 2 != 0);
console.log(dataSetIdImPair);
const ulWithAdresse = document.querySelector('.adresse');
/*j'affiche le résultat*/
dataSetIdImPair.forEach(personnage => {
    showPersonnage(ulWithAdresse, personnage);
})




































// const removeDomList = (parentHtml) => {
//     while (parentHtml.firstChild) {
//         parentHtml.removeChild(parentHtml.firstChild);
//     }
// }



















// let personnageIwant = getPersonnageById(1);
// console.log(personnageIwant);