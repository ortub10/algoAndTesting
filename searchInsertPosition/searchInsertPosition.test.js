const searchInsert = require("./searchInsertPosition.easy");
test("Example 1", ()=>{
expect(searchInsert([1,3,5,6],5)).toBe(2)
});

test("Example 2", ()=>{
    expect(searchInsert([1,3,5,6],2)).toBe(1)
});

test("Example 3", ()=>{
    expect(searchInsert([1,3,5,6],7)).toBe(4);
});

test("Example 4", ()=>{
    expect(searchInsert([1,3,5,6],0)).toBe(0);
});

test("Example 5", ()=>{
    expect(searchInsert([1,2,3,4,5,6,7,8,9,19,20],18)).toBe(9);
});

test("Example 6", ()=>{
    expect(searchInsert([-22,-21,-11,-10,-9,-8 ,-7,-6,-5,-4,-3,-2,-1],-18)).toBe(2);
});

test("Example 7", ()=>{
    expect(searchInsert([1,2,3,4,5,6,7,8,9,10,11,21,22],15)).toBe(11);
});

test("Exampe 8", ()=>{
    expect(searchInsert([-12,-11,10,13,20],15)).toBe(4);
});

