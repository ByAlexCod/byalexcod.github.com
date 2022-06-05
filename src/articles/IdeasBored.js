import { Article } from "../Article";
const content = `
## Contexte

Lors du premier confinement, j’ai créé et déployé IdeasBored, un site pour partager simplement ses idées. D’un point de vue fonctionnalité, cette plateforme devait permettre à des utilisateurs de s’inscrire, se connecter, de partager, d’aimer et de commenter des idées.

  
 

C’était un projet personnel qui avait comme but de me faire monter en compétence sur le développement, la qualité de code, et le monde DevOps.

## Enjeux

Les enjeux étaient personnels. Ceci étant dit, pour me motiver j’avais parlé de ce projet à un grand nombre de personnes pour continuer à y croire et ne pas me démotiver.

J’avais deux mois pour développer un projet correctement de A à Z et le déployer en production.

  
 

## Mise en oeuvre

Pour développer de la plateforme, j’ai utilisé une stack technique que je connaissais :

*   VueJS en frontend
*   ASP .Net Core pour le backend
*   MSSQL Server pour la base de données

  
 

Pour ce qui est de la mise en production j’ai utilisé des technologies que je n’avais jamais utilisé :

*   Jenkins pour la CI/CD
*   Docker pour la conteneurisation
*   Nginx pour le reverse proxy

  
 

Ce projet a été développé en utilisant la méthode TDD (Test Driven Development). Cette méthode m’a forcé à garder une bonne qualité de code.

  
 

## Conclusion

En termes de résultats, ce projet a bien été déployé en production. En revanche, il n’a pas eu l’effet escompté et les gens n’y portaient pas particulièrement intérêt. Après l’avoir maintenue quelques semaines, j’ai décidé de l’abandonner.

Grâce à cette réalisation, j’ai beaucoup appris. La non réalisation en step by step en utilisant un MVP (Minimum Viable Product) m’a porté préjudice. J’ai voulu aller trop loin trop vite sans écouter les retours utilisateurs.`
export function IdeasBored() {
    return (
        <>
            <h1 className="m-auto text-center">IdeasBored, partager des idées</h1>
            <Article md={content} />
        </>
    )
}