import { City, Community } from "./city.class.js"

test("city show", () => {
    let city1 = new City("Calgary",8,22,55,1,1);
    let city2 = new City("Red Deer",22,45,32,2);
    expect(city1.show(1)).toBe("Calgary 8 22 55"); 
    expect(city2.show(2)).toBe("Red Deer 22 45 32"); 
});

test ("city people moveIn",()=>{
     let city1 = new City("Calgary", 10, 22 ,55 ,23, 1);
     let city2 = new City("Red Deer", 15, 45,35, 2 );
     expect(city1.movedIn(1,5)).toBe(15);
     expect(city2.movedIn(2,10)).toBe(25);
});
test ("people moving out",()=>{
    let city1 = new City("Calgary", 10, 20,30,1);
    let city2 = new City("Red Deer", 15,25,35,2);
    expect(city1.movedOut(1, 5)).toBe(5);
    expect(city2.movedOut(2,5)).toBe(10);
});
test ("how big is the city",()=>{
    let city1 = new City("Calgary", 1000000, 20,30,1);
    let city2 = new City("Red Deer", 25000,20,30,2);
    let city3 = new City("Fort Mac",10000, 20, 30,3 );
    let city4 = new City("Ottawa", 6000, 30,20,4);
    let city5 = new City("Bager",50, 30,21,5);
    expect(city1.howBig(1,10000000)).toBe("City");
    expect(city2.howBig(2,25000)).toBe("Large Town");
    expect(city3.howBig(3,10000)).toBe("Town");
    expect(city4.howBig(4,800)).toBe("Village");
    expect(city5.howBig(5,50)).toBe("Hamlet");
}); 
test ("create city with community",()=>{
    let city1 = new Community();
    city1.createCity("Calgary", 10, 50,40);
    city1.createCity("Edmonton", 50, 40,20);
    expect(city1.community[0].population).toBe(10);
    expect(city1.community[1].cityName).toBe("Edmonton");
});