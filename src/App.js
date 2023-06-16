import { useContext, useState } from "react";
import { RouteContext, mapping } from "./Router";
import Index from "./Pages/Index";
import Form from "./Pages/Form";
import Result from "./Pages/Result";

function App(props) {
  const [inputCount, setInputCount] = useState(0);
  const [tareaCount, setTareaCount] = useState(0);
  const [cboxCount, setCboxeCount] = useState(0);

  const { page } = useContext(RouteContext);

  return (
    <>
      { page === mapping.index && <Index /> }
      { page === mapping.form && 
        <Form updateInputCount={setInputCount} updateTareaCount={setTareaCount} updateCboxCount={setCboxeCount} />
      }
      { page === mapping.result && <Result {...{inputCount, tareaCount, cboxCount}} />}
    </>

  )
}

export default App;
