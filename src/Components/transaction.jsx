import "./transaction.css";

export default function Transaction({ Trans, deleteTransaction }) {
    const amountColor = Trans.Amount < 0 ? "red" : "green";


    return (
        <div className="Tmain">
            <div className="transactions">
                <div className="task">{Trans.Task}</div>
                <div className="amount" style={{ color: amountColor }}>
                    {Trans.Amount < 0 ? `- ₹${Math.abs(Trans.Amount)}` : `₹${Trans.Amount}`}
                </div>
            </div>  
            <div className="delete" onClick={deleteTransaction}> 
                
            </div>
        </div>
        
    );
}
