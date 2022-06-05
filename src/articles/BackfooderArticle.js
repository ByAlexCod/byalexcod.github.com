import { Article } from "../Article";
const content = `Backfooder est une plateforme de partage de bonnes adresses (restaurants et bars) à ses amis et sa famille. L’ouverture au public s’est faite en avril 2022.

Dans le cadre d’un projet personnel, j’ai décidé de créer cette plateforme pour améliorer et découvrir des compétences.

Pour cette réalisation j’ai réalisé un planning, des tests d'ergonomie, un backend et un frontend.

Les enjeux de ce projet étaient principalement personnels. C’est un défi personnel que je me suis imposé. Le projet doit être mis en production et une campagne de marketing doit être lancée. Le but est d’atteindre la centaine d’utilisateurs dans les deux premiers mois.  

Un défi suivant la mise en production est la maintenance et l’évolution de la plateforme tout en acceptant de plus en plus d’utilisateurs.  

La mise en œuvre de cette plateforme s’est faite en plusieurs étapes :
* Développement du concept
    * Système de notation des restaurants
    * Système d'interactions entre les utilisateurs
    * Ergonomie et visualisation des adresses (restaurants et bars)
* Définition de la charte graphique
* Création d’un modèle de données
* Choix technologiques au niveau du développement
    * Backend: C# .Net Core
    * Frontend: React, Typescript, avec TailwindCss
    * Base de données: MongoDB
*   Choix technique concernant l’intégration de la géolocalisation de l’utilisateur.
*   Développement d’un MVP (produit viable minimum) qui pourra accueillir les premiers utilisateurs :
    *   Un frontend respectant les points cités ci-dessus
    *   Un backend et une base de donnée
*   Choix et déploiement du projet sur des solutions d’hébergement viable

Plusieurs difficultés ont été rencontrées. L’une d’entre elle était dans le choix technique concernant le backend. Une autre était la charte graphique : il faut une application viable que les utilisateurs aiment utiliser.


J’ai pu améliorer mes compétences et entrer dans le monde de la mise en production de projets et en marketing.
`
export function BackfooderArticle() {
    return (
        <>
            <h1 className="m-auto text-center">Backfooder</h1>
            <Article md={content} />
        </>
    )
}