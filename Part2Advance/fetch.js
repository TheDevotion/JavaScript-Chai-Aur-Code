// fetch came natively in node js in ES6.
// we revised the diagram.

//  how fetch works ?
// 1st feb 2022 Fetch API finally came to node.js

// Backstory:

/*
we had xhmHTTPRequest.
we then got Fetch API.
then Fetch API liabray came.
But it was not inside nodejs


They included it inside core js
Request module.(avoided.)

Syntax. 
fetch 
.then
.catch


WTF is fetch doinng.

its a global fetch method which starts the process of
fetching a resourse from the network, returning 
a promise which is fullfilled once the response is available. 


Error 404 is a response not error.


////////////////////////////////////////////////////////////////////////////

He explained the fetch using digram.


// so how does fetch actually work ?


response = fetch('something')

at a time two things happen.
1. Yellow guy goes and reserve memory as data field in heap
in form of two empty arrays, onFullfilled[] and on Rejection[]
 you do not have access to this.

 2. green guy goes to webBrowser/ node talks to it.
 and sends a network request. if the request is sent.
 that means that you have successfully completed the task and then that respnse gets stored inside onfullfilled[]
 (even if it is a error 404 as we sent the request.)
 if we are unable to send a network request, that data goes inside the rejection[] array.
 now  either fullfilled or rejection[] sends this data to the global variable 'Response' which is iside global memory"

 */
