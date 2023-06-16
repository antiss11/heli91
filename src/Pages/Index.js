import { useContext } from "react";
import { mapping, RouteContext } from "../Router";

function Index(props) {
    const { setPage } = useContext(RouteContext);

    return <button onClick={(e) => {
        e.preventDefault();
        setPage(mapping.form);
     }}>FORM</button>
}

export default Index;