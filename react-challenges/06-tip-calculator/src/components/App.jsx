import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";
import { useState } from "react";


export default function App() {
    const [bill, setBill] = useState(0);
    const [myTip, setMyTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);
    const totalTip = ((myTip + friendTip) / 2) * bill / 100
    
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage tip={myTip} onSetTip={setMyTip}>How did you like the service?</SelectPercentage>
      <SelectPercentage tip={friendTip} onSetTip={setFriendTip}>How did your friend like the service?</SelectPercentage>
      <Output bill={bill} totalTip={totalTip} />
      <Reset onSetBill={setBill} onSetMyTip={setMyTip} onSetFriendTip={setFriendTip}/>
    </div>
  );
}
