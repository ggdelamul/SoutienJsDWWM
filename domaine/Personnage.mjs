export class Personnage {
    static nbInstance = 4;
    constructor(Nom, Prenom, Citation) {
        this.Id = Personnage.nbInstance;
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Citation = Citation;
        Personnage.nbInstance++;
    }
}