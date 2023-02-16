import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";


function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />

      <h2>useState</h2>
      <hr />
      <Counter />

      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />
      <TimerPadre />

      <h2>useReducer</h2>
      <hr />

      <ContadorRed />

      <h2>CustomHooks</h2>
      <hr />
      <Formulario/>
      <br/>
      <Formulario2/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );


}

export default App;
