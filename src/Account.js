import React from 'react'
import { useSelector } from 'react-redux'
import "./Account.css"

const Account = () => {

   let data= useSelector(
        (state)=>{
            return state
        }
    )
  return (
    <div className='container'>
        <h2>Account Details</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>User Name</th>
                    <th>Mobile No</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{data.balance}</th>
                    <th>{data.fullName}</th>
                    <th>{data.mobile}</th>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Account