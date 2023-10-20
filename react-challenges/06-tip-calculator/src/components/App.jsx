import BillInput from "./BillInput"
import Output from "./Output"
import Reset from "./Reset"
import SelectPercentage from "./SelectPercentage"

export default function App() {
    return(
        <div>
            <BillInput/>
            <SelectPercentage/>
            <SelectPercentage/>
            <Output/>
            <Reset/>
        </div>
    )
}