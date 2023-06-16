function Result({inputCount, tareaCount, cboxCount}) {
    const inputs = Array.from(Array(inputCount), (val, i) => <input key={i} />);
    const tareas = Array.from(Array(tareaCount), (val, i) => <textarea key={i} />);
    const cboxes = Array.from(Array(cboxCount), (val, i) => <input type="checkbox"  key={i} />);

    return (
        <form>
            <fieldset>
                { inputs }
            </fieldset>
            <fieldset>
                { tareas }
            </fieldset>
            <fieldset>
                { cboxes }
            </fieldset>          
        </form>
    )
}

export default Result;