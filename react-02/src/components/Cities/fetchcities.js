const url = 'https://jsonplaceholder.typicode.com/users';
const home = 'http://localhost:5000/all';

async function getText() {
    fetch(home)
    .then(response => {
        console.log(response);
    let data = response.json()
    console.log(data)
    }).catch(e => {
        console.log(e);
    }); 
};

async function postTest(url='',data ={}){
    const res = await fetch((home) ,{
        method:'POST',
        body:'Hello World',
        mode:'cors'
    })

    
};
export {getText, postTest} ;