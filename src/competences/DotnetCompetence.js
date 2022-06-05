import { Article } from "../Article";
const content = `
Depuis 2017, je suis à l'assaut des nouvelles mises à jour du framework .Net en C#.

_“Microsoft .NET est le nom donné à un ensemble de produits et de technologies informatiques de l'entreprise Microsoft pour rendre des applications facilement portables sur Internet.”_

  
 

J’ai eu l’occasion de travailler en C# .Net sur de nombreux projets scolaires et personnels.

Un de ces projets est le projet Backfooder ([backfooder.fr](https://backfooder.fr))  démarré en début 2022. 

Backfooder a été développé en C# ASP.Net Core pour l’optimisation, la possibilité de déployer sur de multiples plateformes, la facilitée à containeriser.

Les tâches majeures de ce projet ont été l'authentification grâce à un fournisseur externe (google) ainsi que l'agrégation des données.

  
 

Je pense que cette compétence reste encore à développer, et j’aimerai réellement l’apporter à un niveau professionnel plus que personnel ou scolaire.

  
 

Timeline de mes projets .Net :

*   2018 : ITest, plateforme d’examen de  programmation grâce à des tests unitaires.
*   2019 : Neph, une plateforme d’organisation de réunion
*   2020 : IdeasBored, une plateforme de partage d’idée
*   2022 : Backfooder ([backfooder.fr](https://backfooder.fr/)), partager ses restaurants avec ses proches`
export function DotnetCompetence() {
    return (
        <>
            <h1 className="m-auto text-center">C# .Net</h1>
            <Article md={content} />
        </>
    )
}