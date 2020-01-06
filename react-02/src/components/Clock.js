import React from 'react';


function Clock(){
    const date = new Date()
return (
    <h1>It is currently about {date.getHours()% 12}
    {console.log("hello world from clock thing")}</h1>
)
}

export default Clock;