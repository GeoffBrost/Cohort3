let base = 47630;
let taxAboveBase = income - base
if (income === base){
    console.log("Tax rate 15%");
}else if (income <= 47630 || income  <= 95259){
  console.log("Tax 47630 for base", taxAboveBase," Tax at 20.5%");
}else if ((income - base) <= 147667){
    console.log("Tax at 25%"); 
    else {};

    
    

// }else if (income => 62704 && income <=210371){
//     on first 47630 %15 tax at %29;
// }else if (income => 210371){
//     on first 47630 %15 tax at %33
// };
// 47630
// <47630 up to 95259
// <95259 up to 147 667
// <147667 up to 210 371
// < 210 371