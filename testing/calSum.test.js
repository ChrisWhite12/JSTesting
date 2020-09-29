let { calSum } = require('../server/index')


// function named calSum


//what should it do? add all numbers
//check if args are numbers
//single number arr?
//use reduce or loop through input

//function input? - array of numbers / args
//function output? - whole or decimal numbers

describe('calSum input funtionality', () => {
    test('should only accept array as input', () => {
        expect(() => {
            calSum([1,2,3,4])
        }).not.toThrow();

        expect(() => {
            calSum([1])
        }).not.toThrow();

        expect(() => {
            calSum([1,"2",3,4])
        }).toThrow();

        expect(() => {
            calSum('hello','world')
        }).toThrow();

        expect(() => {
            calSum()
        }).toThrow();
    })

    test('should only generate numbers as output', () => {
        expect(calSum([1,2,3,4,5])).toEqual(15);
        
        expect(calSum([1.5,2.5,3.5])).toEqual(7.5);
    })
})