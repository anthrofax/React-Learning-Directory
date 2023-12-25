// import DateCounter from "./DateCounter";
import Header from "./Header";
import Loader from "./Loader";
import Error from './Error';
import Main from "./Main";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialValue = {
  questions: [],
  status: 'loading',
}

const reducer = function(state, action) {
  switch(action.type) {
    case "dataRecieved": 
      return {...state, questions: action.payload, status: "ready"};
    case "dataFailed": 
      return {...state, status: "error"};
    case "start": 
      return {...state, status: "active"};
    default: 
      throw new Error("Unknown action");
  }
}

function App() {
  const [{questions, status}, dispatch] = useReducer(reducer, initialValue);
  const jumlahSoal = questions.length;

  useEffect(function() {
     fetch("http://localhost:8000/questions")
    .then(res => res.json())
    .then(questions => dispatch({type: "dataRecieved", payload: questions}))
    .catch(err => dispatch({type:'dataFailed'}));
  }, []);

  return (
    <div className="app">
      <Header/>
      <Main>
        {status === "loading" && <Loader/>}
        {status === "error" && <Error/>}
        {status === "ready" && <StartScreen jumlahSoal={jumlahSoal} dispatch={dispatch}/>}
        {status === "active" && <Question/>}
      </Main>
    </div>
  );
}

export default App;
