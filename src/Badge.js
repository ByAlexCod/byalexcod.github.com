import { SkillBadgeIconFA } from "./SkillBadge";

export function Badge({name}) {
    const badges = {
        "java": <SkillBadgeIconFA skill={{icon: "java", name: "Java", type: "fab"}}/>,
        "firebase": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "fire", name: "Firebase", type: "fa"}}/>,
        "oracle": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "database", name: "Oracle", type: "fa"}}/>,
        "react": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "react", name: "React", type: "fab"}}/>,
        ".net": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "windows", name: "C# .Net Core", type: "fab"}}/>,
        "mongo": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "bars-staggered", name: "MongoDB", type: "fa-solid"}}/>,

    }

    return badges[name];
}