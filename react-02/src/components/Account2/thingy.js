import React from 'react'

const Thingy = ({accountName,balance}) =>{
    return(
        <div>
            <h2>Account Name: {accountName}</h2>
            <h2>Balance: {balance}</h2>
        </div>
);
}

export default Thingy;