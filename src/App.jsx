import './App.css'
import Head from "./Components/head.jsx";
import CurrentBalance from "./Components/currentBalance.jsx";
import DifferenceBar from "./Components/DifferenceBar.jsx";
import TransactionHistory from "./Components/transactionHistory.jsx";
import NewTransaction from "./Components/newTransaction.jsx";
import { useState } from 'react';

function App() {
    let [Trans, setTrans] = useState([]);

    function update(newInfo) {
        setTrans((prevTrans) => [...prevTrans, newInfo]);
        updateDB([...Trans, newInfo]);
        
    }
    function deleteTransaction(indexToDelete) {
        setTrans((prevTrans) => prevTrans.filter((t, index) => index !== indexToDelete));
        updateDB(Trans.filter((t, index) => index !== indexToDelete));
    }
    let total = Trans.reduce((acc, curr) => acc + curr.Amount, 0);

    let [DiffBar,setDiffBar]=useState({
        positive:0,
        negative:0,
    });
    let updateDB=(Trans)=>{
        let neg = 0;
        let pos = 0;
        Trans.forEach(function(T){
            if(T.amount<0){
                neg+=T.Amount;
            }
            else{
                pos+=T.Amount;
            }
            
        })
        setDiffBar(
           { positive: pos,
            negative: neg}

        );
    };

    return (
        <>

            <Head />
            <br /><br />
            <CurrentBalance total={total}/>
            <br /><br />
            <DifferenceBar positive={DiffBar.positive} negative={DiffBar.negative}  />
            <TransactionHistory  deleteTransaction={deleteTransaction} Trans={Trans} />
            
            <NewTransaction updateDB={updateDB} update={update} />
        </>
    );
}

export default App;
