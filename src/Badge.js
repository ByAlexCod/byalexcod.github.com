import { SkillBadgeIconFA } from "./SkillBadge";

export function Badge({name}) {
    const badges = {
        "java": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "fab fa-java", name: "Java"}}/>,
        "firebase": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "fa fa-fire", name: "Firebase"}}/>,
        "oracle": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "fa fa-database", name: "Oracle"}}/>,
        "react": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "fab fa-react", name: "ReactJS"}}/>,
        ".net": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "fab fa-windows", name: "C# .Net"}}/>,
        "mongo": <SkillBadgeIconFA className={"ml-5"} skill={{icon: "fa fa-bars", name: "MongoDB"}}/>,

    }

    return badges[name];
}