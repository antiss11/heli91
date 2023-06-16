import { mapping, RouteContext } from "../Router";
import { useContext } from "react";

function Form({ updateInputCount, updateTareaCount, updateCboxCount }) {
    const { setPage } = useContext(RouteContext);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setPage(mapping.result);
        }}>
            <p>
                input <input type="number" min="0" onChange={(e) => updateInputCount(+e.target.value)}/>
            </p>
            <p>
                textarea <input type="number" min="0" onChange={(e) => updateTareaCount(+e.target.value)}/>
            </p>
            <p>
                checkbox <input type="number" min="0" onChange={(e) => updateCboxCount(+e.target.value)}/>
            </p>
            <input type="submit" value="Build"/>
        </form>
    )
}

export default Form;