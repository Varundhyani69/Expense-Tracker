import "./currentBalance.css";
export default function CurrentBalance({total}){
    return(
        <div className="balanceBox">
            <div className="balanceHead">
                YOUR BALANCE
            </div>
            
            <div className="balance">
                <h1><b>₹{total}</b></h1>
            </div>
        </div>
    )
}