/*

VIMP for interview:

How JS code executes ?


1).  JavaScript execution context:


code -> global execution context -> this variable (in browser, window object)

it executes inside a single thread.
everything is a process.

a. global execution context
b.Function/functional execution context:
c. Eval execution context

how js file executes?

two phases:
i. Call stack: (memory creation phase):

// allocation of memory.

ii. Execution phase.

CODE:

let val1 = 10
let val2 = 5

function addNum(num1,num2) {
    let total = num1 + num2
    return total
}

let result1 = addNumb(val1, val2);
let result2 = addNum(10,2)



steps:

1. global execution/ global environment 
    allocated to this.

2. MCP / CP :
    variables get created and kept.

    val1 -> undefined.
    val2 -> undefined.
    addNum -> definition.

    result1 -> undefined;
    result2 -> undefined;

/// FIRST CYCLE COMPLETED //////

3. EXECUTION PHASE:

    val1 <- 10
    val2 <- 5

    // function execution will not happen here.

    addNum -> creates its own execution context.

            ---------------------------
            new variable environment 
                    +
            execution thread.
           ----------------------------
           
           Phase 1 and 2 will happen again for this context.

            1. Memory Phase:

                val1 -> undefined
                val2 -> undefined
                total -> undefined;

            2. Execution phase/ context:

                num1 -> 10
                num2 -> 5
                total -> 15

                total returns to parent executional context/ global
                executional context.


            THIS FUNCTIONAL EXECUTIONAL CONTEXT WILL GET DELETED 
            AFTER ITS USE IS DONE.
    


    (Execution phase continued:)

    result1 <- 15


    result2 <- again the functional execution context
                gets created.

                ---------------------------
                new variable environment 
                    +
                execution thread.
              ---------------------------

              1. memory phase:

                as it is.

              2. execution context:

                only valuese will change.
                total will return.


//////////////////////////////////////////////
            CALLSTACK
//////////////////////////////////////////////

USES LIFO concept of stack:


------------------------------------

            three()  // this will go out first
---------------------------------------
            two()   // 
-------------------------------------
            one()  //  this will go last after execution.
---------------------------------------
    Global execution context.
---------------------------------------



in snippet ( inside sources)
// learned how callstack works in real time. using sources snippets.


function one () {
console.log("one")
}
function two  () {
console.log("two")
}
function three () {
console.log("three")
}

one();
two();
three();



*/
