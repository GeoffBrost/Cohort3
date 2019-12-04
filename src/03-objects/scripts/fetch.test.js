import functions from "./fetch.js"

const data = [
    { "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" }, 
    { "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" }, 
    { "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" }, 
    { "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" }, 
    { "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" }, 
    { "name": "Bella", "surname": "Musker", "gender": "female", "region": "New Zealand" }, 
    { "name": "Fabian", "surname": "Dediu", "gender": "male", "region": "Romania" }, 
    { "name": "Славчо", "surname": "КОСТАДИНОВ", "gender": "male", "region": "Bulgaria" }, 
    { "name": "Upendra", "surname": "Ranjit", "gender": "male", "region": "Nepal" }, 
    { "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }
];

test ("Get First Name", ()=>{
    expect(functions.getFirstName(data)).toBe("Maricica");
})

test ("Get all Names",()=>{
    console.log(functions.getAllFirstNames(data));
})