// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

// ans : 
function expect(val) {
    return {
        toBe: function (compareVal) {
            if(val === compareVal){
                return true
            }
            else {
                throw new Error ("Not Equal")
            }
        },
        
        notToBe : function (compareVal) {
            if(val !== compareVal){
                return true
            }
            else{
                throw new Error ("Equal")
            }
        }
    }
}

// problem2
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); //

//ans : 
var createCounter = function (init) {
    let currentValue = init ;
    const initialValue = init ;

    return {
        increment : function () {
            currentValue += 1 ;
            return currentValue ;
        },
        decrement : function () {
            currentValue -= 1 ;
            return currentValue;
        },
        reset : function () {
            currentValue = initialValue ;
            return currentValue ;
        }
    }
}