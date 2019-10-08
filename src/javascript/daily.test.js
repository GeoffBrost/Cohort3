import exportFunctions from './daily.js'
test ("checkMe", function ()  {
   expect(exportFunctions(2,2)).toBe(true);
   expect(exportFunctions(1,3)).toBe(false);
   expect(exportFunctions("a","b")).toBe(false);
   expect(exportFunctions("a","a")).toBe(true);
   expect(exportFunctions("2",2)).toBe(false);
   expect(exportFunctions("This value","This value"))
 });

