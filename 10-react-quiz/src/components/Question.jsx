import NextButton from "./NextButton"
import Options from "./Options"
import Progress from "./Progress"

function Question({question, dispatch, answer, index, jumlahSoal, points, maxPossiblePoints}) {
    
    return (
        <div>
            <Progress index={index} jumlahSoal={jumlahSoal} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>
            <h4>{question.question}</h4>
            <Options question={question} dispatch={dispatch} answer={answer}/>
            <NextButton answer={answer} dispatch={dispatch} index={index} jumlahSoal={jumlahSoal}/>
        </div>
    )
}

export default Question
