const url = 'http://localhost:5000/';

function getText() {
    fetch(url)
    .then(function(res){
        console.log('first call',res)
    })   
}

export default getText ;