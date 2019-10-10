// define attributes / variables
// number --
// string --
// boolean --
// array --
// dictionary / objects 
// undefined ---
// sample if / else --
// functions --
// parameters --   
// returns --
// arrays --
// add to the front --
// add to the end --
// update values --
// loops --
// for
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value

const functions = 
{
    simpleattributes:(p1) => {
    let p2 = typeof(p1);
    return p2;
},
   simplearray:(p1) => {
    let p2 = Array.isArray(p1);
    return p2; 
},
    simpleundefined:(p1) => {
        let thefoo;
        return(typeof(thefoo));
    
},
    simpleifelse:(p1) => {
        if (p1 === "yes")
            return("yes");
        else if (p1 === "no")
            return("no");
        else return ("maybe");
    },
    simplereturn : (p1,p2) => {
        return p1 + p2;
    },
    baseArray : () => {
        let arrayadd = [2,3,4];
        return(arrayadd);
},  shiftArrary : () => {
        let arrayadd = [2,3,4];
        arrayadd.unshift(1);
        return(arrayadd);
},   
    pushArray : () => {
        let arrayadd = [2,3,4];
        arrayadd.push(5);
        return(arrayadd);

},
    changeArray : () => {
        let arrayadd = [1,2,3,4,5];
        arrayadd[2] = 8;
        return(arrayadd);
},
    forloop : () => {
	let array = [];
	for (i = 1; i < 6; i++){
    array.push(i)

}

export default functions;