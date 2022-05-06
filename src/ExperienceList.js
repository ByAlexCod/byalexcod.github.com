import React from "react";
import { Badge } from "./Badge";
import { SkillBadgeIconFA } from "./SkillBadge";

export function ExperinceList() {

    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="flex justify-between text-xl font-semibold text-gray-800">
                        <a href="https://www.the-portfolio.com" target="_blank" rel="noopener noreferrer">
                            Backfooder
                        </a>
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
                        The Portfolio is a website that allows you to create your own portfolio.
                        It is a personal project that I have been working on since the beginning of 2019.
                        It is a website that allows you to create your own portfolio.
                        It is a personal project that I have been working on since the beginning of 2019.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                        <a href="https://www.the-portfolio.com" target="_blank" rel="noopener noreferrer">
                            The Portfolio
                        </a>
                    </h3>
                    <p className="mt-4 text-gray-600">
                        The Portfolio is a website that allows you to create your own portfolio.
                        It is a personal project that I have been working on since the beginning of 2019.
                        It is a website that allows you to create your own portfolio.
                        It is a personal project that I have been working on since the beginning of 2019.
                    </p>
                </div>
            </div>
        </div>
    );
}