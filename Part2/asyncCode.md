// javascript is synchronous.

// good for interview and code.

Ascync COde:

1. synchronous (one after the another.)
   and single threaded.

   // slow but not that slow.

js engine is alwayse inside a runtime environment.

////////////////////////////////////////////
this was default js behaviour.

Execution context:

1. Execute one line of code at a time

|
|
|
|
single thread.

//Each operation waits for the last one to complete before executing.

// call stack and memeory heap.

BLocking code vs Non blocking code

1. BLocking code.
   block the flow of program.

2. Non blocking code:
   Does not block execution.

////// nightmare:
Reading a file !
// file me se data leke aao.
program cannot fead file.
kernel can access it.
and it gives it back to program.

kernel is busy.

So sync. read file is hard.

// it it takes 5 minutes ur code is useless.

// there fore read file asynchronously.

/// but its not always that good.

user data database then notification
and tell register with success.

// this will cause an issue.
as we may give success message even if we have error..

// so there are use cases.
// this is where you have to decide between these too.

![Alt text](image-1.png)

task queue makes js async.

// there is also high priority q(promise q)

// async api:
set timeout setInterval etc.

// set timout:
(web API)
register call back. ( it registers all events/ callbacks)

Task QUEUE:

cb cb cb cb cb

//////////////

1
0,2
3

will print 1 3 and then 2. ( becuase control goes to webapi
)

// ne API :
fetch api:

// task Que got expaneded. ( or a high priority q)
// or you can call it a seond task q of hight prority.

fetch() is of high priority.
// promise.
