import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./Badge";

export function CompetenceList() {

    return (
        <div id="skills">
            <h1 className="text-center text-gray-700 text-2xl font-bold mt-16">Compétences</h1>
            {/* horizontal list of narrow cards with name of skill and badge */}

            <Link to={"/competence/react"}>
                <div className="shadow p-4 m-6 w-full bold text-lg flex hover:shadow-lg transition cursor-pointer">
                    <Badge name="react" />
                    <div className="ml-8">ReactJS</div>
                </div>
            </Link>
            <Link to={"/competence/java"}>

                <div className="shadow p-4 m-6 w-full bold text-lg flex hover:shadow-lg transition cursor-pointer">
                    <Badge name="java" />
                    <div className="ml-8">Java</div>
                </div>
            </Link>
            <Link to={"/competence/dotnet"}>
                <div className="shadow p-4 m-6 w-full bold text-lg flex hover:shadow-lg transition cursor-pointer">
                    <Badge name=".net" />
                    <div className="ml-8">C# .Net</div>
                </div>
            </Link>
            <div className="shadow p-4 m-6 w-full bold text-lg flex hover:shadow-lg transition cursor-pointer">
                <Badge name="mongo" />
                <div className="ml-8">MongoDB</div>
            </div>
            <div className="shadow p-4 m-6 w-full bold text-lg flex hover:shadow-lg transition cursor-pointer">
                <Badge name="firebase" />
                <div className="ml-8">Firebase</div>
            </div>

        </div>
    );
}