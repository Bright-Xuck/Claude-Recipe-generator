import { createRoot } from "react-dom/client";
import Header from "./header";
import Body from "./body";

const root = createRoot(document.querySelector("#root"))

root.render(
   <>
   <Header />
   <Body />
   </>
)