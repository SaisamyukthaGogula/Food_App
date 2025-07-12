const { sum } = require("../sum");



test("Should calculate Sum of two numbers", ()=>{

    const result = sum(3, 4);

    expect(result).toBe(7);

});