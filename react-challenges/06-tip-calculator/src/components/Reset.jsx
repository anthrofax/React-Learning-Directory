export default function Reset({onSetBill, onSetMyTip, onSetFriendTip}) {
    const handleReset = function() {
        onSetBill(0);
        onSetMyTip(0);
        onSetFriendTip(0);
    }

    return(
        <div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}