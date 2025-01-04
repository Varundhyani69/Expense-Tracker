import { useState } from "react";
import "./NewTransaction.css";
export default function NewTransaction({update}){
    let [task,setTask] = useState("");
    let [amount,setAmount] = useState("");

    

    let submitHandler=(e)=>{
        e.preventDefault();
        let furtherInfo = updateInfo();
        console.log(furtherInfo);
        update(furtherInfo);
        setTask("");
        setAmount("");
    }
    let fillTask=(e)=>{
        setTask(e.target.value);
    }
    
    let fillAmount=(e)=>{
        setAmount(e.target.value);
    }

    let updateInfo=()=>{
        let newInfo = {
            Task:task,
            Amount: Number(amount),
        }
        return newInfo;
    }

    return(
        <div className="NewTransactions">
            <div className="head">
                <h2>Add New Transactions</h2>
                <hr />
                
                <form onSubmit={submitHandler}>
                    <label htmlFor="text">
                        <b>Text</b>
                    </label>
                    <br />
                    <input onChange={fillTask} value={task} placeholder="Enter task..." type="text" />

                    <br /><br />
                    <label htmlFor="amount">
                        <b>Amount</b>
                    </label>
                    <br />
                    <input onChange={fillAmount} value={amount} placeholder="Enter Amount..." type="number"  />
                    <br /><br />
                    <button  type="submit">Add Transaction</button>
                </form>
            </div>
        </div>
    )
}