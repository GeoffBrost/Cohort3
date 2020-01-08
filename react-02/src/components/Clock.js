import React from 'react';


function Clock(){
    const date = new Date()
return (
    <h3>It is currently about {`${date.getHours() % 12}:${date.getMinutes()}`}</h3>
)
}


export default Clock;