import { useState } from "react";


function Tables(){
    let [Table,setVal]=useState(2);
    let [Num,setNum]=useState(1);
    
    function mutliNum(){
        setNum(Num+1);
        setVal(Table+2);
    }

    return (
        <div className="Table2">
            <button onClick={mutliNum}>2 * {Num} = {Table}</button>
        </div>
    );

}

function StateMang(){
    return(
        <div>
            <Tables />
        </div>
    )
}

export default StateMang;