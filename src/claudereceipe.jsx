import Markdown from "react-markdown"

export default function Clauderecipe(prop){
return(
<section>
    <h2>
        Chef Claude Recommends:
    </h2>
    <Markdown>{prop.receipe}</Markdown>
</section>
    )
}