import "./DifferenceBar.css";
export default function DifferenceBar({positive,negative}){
    return(
        <div className="SplitBox">
            <div className="content">
                <div className="income">
                    <p className="title">INCOME</p>
                    <b className="p1">₹{positive}</b>
                </div>
                <div className="expense">
                    <p className="title" >EXPENSE</p>
                    <b className="p2">₹{negative}</b>
                </div>
            </div>
            
        </div>
    )
}