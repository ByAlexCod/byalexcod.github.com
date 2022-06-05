import { Article } from "../Article";
const content = `  
 

Java est un language de programmation très utilisée et souvent dans le cadre de projets web.

J’ai pu utiliser cette compétence lors d’un stage de 6 mois en data engineering et scrapping ainsi que durant mon alternance chez Ouidou en tant que développeur et architecte logiciel.

Pendant mon stage de 6 mois chez Miuros, j’ai développé en Java pour récupérer et transformer des données venant de CRMs (logiciel de gestion de comunication avec la clientèle). Ces données étaient uniformisées dans le but de nourir une intelligence artificielle.

J’ai personnellement connecté nos services au CRM Helpscout. J’ai également ajouté la prise en compte des messages de “chat” (messagerie instantanée)

Ces données ont été utilisé pour la finalité de l’algorithme. L’entreprise a pu vendre à ses clients ces nouvelles fonctionnalités.

J’ai désormais beaucoup travaillé avec ce language et je suis même devenu Tech Lead sur un projet pour l’Office Nationale des Forêts fait en Java.

Dans le monde du travail actuelle, ce language est un des premiers choix quand on vient à faire un projet web. Il y a près de 9 millions de développeurs Java, ce qui confirme l’utilisation de ce language dans le marché.

Dans le futur, j’aspire à être considérer comme expert en Java grâce à une certification Oracle d’ici 5 ans.`
export function JavaCompetence() {
    return (
        <>
            <h1 className="m-auto text-center">ReactJS</h1>
            <Article md={content} />
        </>
    )
}