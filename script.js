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