import Markdown from "react-remarkable"

export function Article({md}) {
    return (
        <div className="list-disc w-3/5 m-auto">
            <Markdown  source={md} />
        </div>
    )
}