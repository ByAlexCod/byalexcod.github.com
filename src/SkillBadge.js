import React from "react";

export function SkillBadgeIconFA({skill, className}) {
    return (
        <div className={"flex flex-col items-center justify-center " + className}> 
            <i className={`${skill.icon} fa-lg`}></i>
                 <p className="text-center text-gray-700 text-sm">{skill.name}</p>
        </div>
)

}