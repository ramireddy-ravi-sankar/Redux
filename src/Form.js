import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Form = () => {

    let dispatch=useDispatch()
    const [amount,setAmount]=useState("")
    const [fullName,setFullName]=useState("");
    const [mobile,setMobile]=useState(null);
  return (
    <div className='container'>
        <h2>Form</h2>
        <div className='row'>
            <div>
                <input 
                className='form-control' type='number' placeholder='Enter Amount' value={amount}
                onChange={(e)=>{
                    let data=e.target.value;
                    setAmount(data)
                }}
                />
            </div>
            <button
                onClick={
                    ()=>{dispatch({type:'deposit', payload:amount});
                    setAmount("");
            }}
                >Deposit</button>
            <button
                onClick={
                    ()=>{dispatch({type:'withdraw', payload:amount});
                    setAmount("");
            }}
                >Withdraw</button>
        </div>
        <div className='row'>
            <div>
                <input 
                className='form-control' type='text' placeholder='Enter Full Name' value={fullName}
                onChange={(e)=>{
                    let data=e.target.value;
                    setFullName(data)
                }}
                />
            </div>
            <button
                onClick={
                    ()=>{dispatch({type:'nameUpdate', payload:fullName});
                    setAmount("");
            }}
                >Update</button>
        </div>
        <div className='row'>
            <div>
                <input 
                className='form-control' type='number' placeholder='Enter Mobile No' value={mobile}
                onChange={(e)=>{
                    let data=e.target.value;
                    setMobile(data)
                }}
                />
            </div>
            <button
                onClick={
                    ()=>{dispatch({type:'mobileUpdate', payload:mobile});
                    setMobile("");
            }}
                >Update</button>
        </div>
        <button
                onClick={
                    ()=>{dispatch({type:'reset'});
            }}
                >Reset</button>
    </div>
  )
}

export default Form