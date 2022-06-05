import { Article } from "../Article";
const content = `React est un package permettant de faciliter le développement web de SPA (Single Page Application).

C’est depuis 2018 que je travaille avec des framework web tels que ReactJS (vueJS, Angular, React).

Pour ReactJS spécifiquement, j’ai commencé à en faire début 2020 lorsque je suis rentré chez Ouidou Consulting en tant que développeur Fullstack.


Pendant mon alternance de 2 ans chez Ouidou, le développement frontend que j’ai effectué était principalement en ReactJS. De nombreux défis se sont élevés face à moi.

Parmi ces défis, un était l’optimisation du rendu d’une page devant afficher énormément de données. Ces données devaient être accessibles simplement et modifiables.

L’UX design était un point important de cette réalisation.


J’ai pu engrangé de l’expérience avec ces nombreux défis. Désormais je souhaite progresser dans d’autres frameworks.

Effectivement, ces frameworks sont au cœur du web actuellement, et les tendances évoluent très rapidement.`
export function ReactCompetence() {
    return (
        <>
            <h1 className="m-auto text-center">ReactJS</h1>
            <Article md={content} />
        </>
    )
}