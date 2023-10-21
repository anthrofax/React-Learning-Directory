export default function Output({bill, totalTip}) {
    const totalBill = bill + totalTip;
    return(
        <div>
            <h2>
            You pay {totalBill}$ ({bill}$ + {totalTip}$ tip)
            </h2>
        </div>
    )
}