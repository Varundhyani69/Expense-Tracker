import "./transactionHistory.css";
import Transaction from "./transaction.jsx";

export default function TransactionHistory({ Trans, deleteTransaction }) {

    return (
        <div className="history">
            <h2 className="head">History</h2>
            <hr />
            <br />
            <div className="scroll">
                <div 
                    style={{
                        height: `${Math.min(Trans.length * 50, 150)}px`, 
                        transition: 'height 0.3s ease' 
                    }}
                >
                    {
                        Trans.map((tran, index) => (
                            <Transaction key={index} Trans={tran} deleteTransaction={() => deleteTransaction(index)} />
                        ))
                    }
                </div>
            </div>          
        </div>
    );
}

