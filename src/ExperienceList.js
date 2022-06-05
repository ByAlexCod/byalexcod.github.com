import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./Badge";
import { SkillBadgeIconFA } from "./SkillBadge";

export function ExperinceList() {

    return (
        <>            <h1 class="text-center text-gray-700 text-2xl font-bold mt-16">Projets</h1>
            <div className="flex flex-wrap pt-12" id="experiences">
                <div className="w-full lg:w-1/2 p-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="flex justify-between text-xl font-semibold text-gray-800">
                            <Link to={"/article/backfooder"}>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Backfooder
                                </a>
                            </Link>
                            <div className={"inline-flex"}>

                                <Badge name={'java'} />
                                <Badge name={'firebase'} />
                                <Badge name={'oracle'} />
                                <Badge name={'react'} />
                                <Badge name={'.net'} />
                                <Badge name={'mongo'} />



                            </div>

                        </h3>
                        <p className="mt-4 text-gray-600">
                            Un projet développé en 2022 permettant à des utilisateurs de partager leurs bonnes addresses de bars te restaurants avec des proches.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="flex justify-between text-xl font-semibold text-gray-800">
                            <Link to={"/article/ocre"}>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    OCRE - Office Nationale des Forêts
                                </a>

                            </Link>
                            <div className={"inline-flex"}>
                                <Badge name={'java'} />
                                <Badge name={'oracle'} />
                                <Badge name={'react'} />

                            </div>
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Techlead sur ce projet depuis son commencement, j'ai été responsable d'une équipe et du développement entier du projet.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-xl font-semibold text-gray-800">
                            <Link to={"/article/ideasbored"}>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    IdeasBored, un projet personnel
                                </a>
                            </Link>
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Techlead sur ce projet depuis son commencement, j'ai été responsable d'une équipe et du développement entier du projet.
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}