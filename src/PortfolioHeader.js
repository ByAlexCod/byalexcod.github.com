import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


// Portfolio of alexandre spitz, software developer and tech lead
export function PortfolioHeader() {
    //init i18
    const { t } = useTranslation();
    //Return head banner with my name using tailwindcss using contrast colors with i18n
    return (
        <header className="flex items-center justify-between flex-wrap bg-gray-800 p-6 sticky top-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="fill-current h-8 w-8 mr-2" src="https://avatars0.githubusercontent.com/u/8591821?s=460&u=5c5f5e5f5a5e5d5f2a5d5b5d5b5c5b5c5b5d5d5d&v=4" alt="Alexandre Spitz" />
                <span className="font-semibold text-xl tracking-tight">
                    Alexandre Spitz
                </span>
            </div>
            <nav className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/#highlights">
                        Récemment
                        
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/#experiences">
                        Projets
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/#skills">
                        Compétences
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/#proexp">
                        Expériences Professionnelles
                    </Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" to="/contact">
                        {t("contact")}
                    </Link>
                    {/* linkes to github and linkedin */}
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" href="https://github.com/ByAlexCod" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4" href="https://www.linkedin.com/in/alexandre-spitz/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                </div>
            </nav>
        </header>
    );
}
