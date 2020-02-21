
function getText() {
    fetch('http://localhost:5000')
    .then(function(res){
        console.log(res)
    })


    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data)
    // })
        
    
}
export default getText;