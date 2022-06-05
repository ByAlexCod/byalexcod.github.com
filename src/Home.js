import { Article } from "./Article";
import { CompetenceList } from "./CompetenceList";
import { ExperinceList } from "./ExperienceList";
import { ExperiencesProfessionnelles } from "./ExperiencesProfessionnelles";
import { Highlights } from "./highlights/highlights";

const presentation = `
Passionné de l’informatique depuis mes 11 ans, j’ai décidé assez assez sereinement d’en faire mon métier. 

Je suis désormais développeur fullstack et tech lead chez Ouidou Consulting chez qui j’ai travaillé durant mon alternance de deux ans.

Entrepreneur et ambitieux j’aime me lancer de nouveaux défis et créer de nouveaux projets. Apprendre ne me fait pas peur, et ça tombe bien, parce qu' on aura toujours besoin d’apprendre en informatique.

Mes capacités à m’adapter facilement et de comprendre rapidement des besoins m’aident tous les jours dans ma vie professionnelle.

  
 

Après avoir parcouru des technologies de beaucoup d’horizons, je peux dire que j’aime travailler en Fullstack. Développer un projet de A à Z, de la conception à la mise en production me procure une sensation de satisfaction à ne pas négliger.

  
 

Ouidou Consulting m’a confié des responsabilités rapidement; je suis désormais tech lead de deux projets. Par la suite, je souhaiterai continuer dans cette voie en prenant de plus en plus de responsabilités. Un des postes qui m’intéressera dans quelques années sera celui d’Architecte Logiciel.

Je ne souhaite pas particulièrement l'expertise dans un domaine, je préfère la connaissances de multiples domaines.`;
export function Home() {
    return (
        <>
            <div className="mt-8 mb-8">
                <Article md={presentation} />
            </div>
            <Highlights />
            <ExperinceList />
            <CompetenceList />
            <ExperiencesProfessionnelles />
        </>
    )
}