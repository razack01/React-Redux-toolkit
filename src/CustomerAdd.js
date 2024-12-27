import React, { useState } from "react";
// import CustomerView from "./CustomerView";

import {addCustomer as addCustomerAction} from "./slices/customerSlice"
import { useDispatch } from "react-redux";



export default function CustomerAdd () {


    const [input, setInput] = useState("")
    // const [customers, setCustomers] = useState([])
    const dispatch = useDispatch()

    const handleChange =(e) => {
        setInput(e.target.value)

    }
    const addCustomer = ()=> {
        if (input) {
            dispatch(addCustomerAction(input))
            // setCustomers((prev)=>[...prev,input])
            setInput("")
            // console.log(customers)
        }
    }
    // console.log("customers1" , customers)

return (
    <>
    <div>
        <h3>Add New Customer</h3>
        <input type ="text" value={input} onChange={handleChange} />
        <button onClick ={addCustomer}>Add</button>
    </div>
   
    </>
)
}