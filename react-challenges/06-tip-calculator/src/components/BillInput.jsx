import '../style.css'

export default function BillInput({bill, onSetBill}) {
    return(
        <div>
            <span>How much was the bill?</span>
            <input type="text" value={bill} onChange={(e) => onSetBill(Number(e.target.value))} />
        </div>
    )
}