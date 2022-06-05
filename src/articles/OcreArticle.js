import { Article } from "../Article";
const content = `
## Définition projet

*   Plateforme interne à un organisme publique (l’Office Nationale des Forêts)
*   Utiliser le socle technique existant en Java et React js
*   Contact de services externe depuis la plateforme (projets internes ou externes; ex: SAP)

## Context

*   Réorganisation de forêts et de parcelles automatisées pour l’ONF
*   Un client lent par le fait qu’il soit publique
*   Une méthode Agile

## Enjeux

*   Contrat importante
*   L’image de l’entreprise réalisant le projet est en jeu
*   Ce projet est aussi important pour moi, c’est le premier projet où je suis architecte technique

## Objectifs

*   Organiser correctement les tâches qui devront être accomplie automatiquement selon le remplissage d’un dossier d’instruction en ligne par l’utilisateur
*   Automatiser les tâches une par une
*   Avoir un système sécurisé qui fonctionne grâce à un système d’habilitations
*   Apprendre de nouveaux systèmes et apprendre à travailler avec un client important. J’ai appris la communication avec le client

## Mise en oeuvre

## Etapes

1.  Ecoute des besoins clients
2.  Ecoute des spécifications fonctionnelles défini
3.  Définition technique du projet
4.  Réalisation et validation par sprint de deux semaines

## Interactions

1.  (Selon les étapes)
2.  Deux contacts avec le client par semaine
3.  Réunions journalières avec l’équipe technique et le chef de projet

## Difficultés

*   Le client est lent
*   Le service de déploiement est lourd
*   la gestion des versions est lourde
*   Le client revient beaucoup sur ses mots, toujours garder une trace écrite

## Résultats

*   Première version déployée sans retard
*   On a su gérer les anomalies et les évolutions du besoin fonctionnel
*   J’ai beaucoup gagner de compétences

## Critiques

On aurait pu anticiper plus de changements de besoins fonctionnels. Le fait d’être en Alternance n’est pas un avantage avec le client`
export function OcreArticle() {
    return (
        <>
            <h1 className="m-auto text-center">OCRE - Office Nationale des Forêts</h1>
            <Article md={content} />
        </>
    )
}