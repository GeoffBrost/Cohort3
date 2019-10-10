/* Write the function that will create this output: */


/* *** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
 */

// Write the function after this comment ---


function AssertEquals(p1,p2){
    if (p1 !== p2) {
        console.log("p1",p1,"p2",p2);
        return false;}
 else if (p1 === p2) {
    console.log("steve");
    return true;
};
 AssertEquals(2,3);       
 // and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");
