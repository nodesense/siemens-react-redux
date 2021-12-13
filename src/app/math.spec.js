// test suite consist of 1 or more test cases
describe ("Math Test Suite", () => {

    //beforeEach - test initiailzation/setup, so that beforeEach is called before any test case execution

    // afterEach - test teardown/exit,  so that afterEach is called after any test case execution

    beforeEach( () => {
        console.log("Math before Each called.....")
        // create env/initialize libray/set values
    })

    afterEach( () => {
        console.log("Math after each called")
        // clear env/uninitliaze libray/mocks/reset values to original state
    })

    // test case 1 using it
    it ("should add two positive numbers", () => {
        console.log("executing test 2 + 1")
        expect(2 + 1).toBe(3) // expectation
    })

    // test case 2 using it
    it ("should add two negative numbers", () => {
        console.log("executing test -1 + -2")
        expect(-1 + -2).toBe(-3) // expectation
    })

})