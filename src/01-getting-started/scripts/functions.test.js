import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1, 2)).toBe(3);
    expect(functions.add(101, 202)).toBe(303);
    expect(functions.subtract(5, 4)).toBe(1);
    expect(functions.multiply(5, 5)).toBe(25);
    expect(functions.divide(10, 5)).toBe(2);
    expect(functions.divide(5, 2)).toBe(2.5);
});

//Canadian Taxes 
test('Tax Cal', () => {
    let income = [1, 47256, 60000, 120000, 170000, 300000];
    expect(functions.taxCal15(income[0])).toEqual(.15);
    expect(functions.taxCal15(income[1])).toBe(7088.4);
    expect(functions.taxCal20(income[2])).toBe(9680.85);
    expect(functions.taxCal26(income[3])).toBe(23340.66);
    expect(functions.taxCal29(income[4])).toBe(37011.57);
    expect(functions.taxCal33(income[5])).toBe(78296.57);

});