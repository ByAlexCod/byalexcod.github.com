import { Link } from "react-router-dom"
export function Highlights() {
    return (
        <div>
            <h2 className="text-center" id="highlights">Récemment...</h2>
            <div className="m-12 flex flex-wrap justify-around">
                <div className="shadow-md hover:shadow-lg cursor-pointer h-40 w-[500px] p-4">

                    <h3 className="text-lg font-medium"><a href="https://blog.ouidou.fr/refactoring-ou-comment-embellir-son-code-fdebff906f93" target={"_blank"} className="text-blue-500">Refactoring, ou comment embellir son code</a></h3>
                    <h4>Article Medium - 05/2022</h4>
                    <p>Comment améliorer la qualité de son code, sa lisibilité et sa maintenance, sans engendrer de régression?🤔
Alexandre Spitz nous présente les bases du refactoring 😀.</p>

                </div>
                <div className="shadow-md hover:shadow-lg cursor-pointer h-40 w-[500px] p-4">

                    <h3 className="text-lg font-medium"><a href="https://backfooder.fr" target={"_blank"} className="text-blue-500">Backfooder</a></h3>
                    <h4>Projet personnel - 04/2022</h4>
                    <p>Passionnés par les restaurants et les voyages,
nous avons créé Backfooder dans le but d'aider les utilisateurs à partager de bonnes adresses.</p>

                </div>
            </div>

        </div>
    )
}