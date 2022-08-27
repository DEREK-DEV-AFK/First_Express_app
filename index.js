const express = require('express');

const app = express();

const { readFile } = require('fs').promises;
/*
 * We should know at this point taht callbacks can be very difficult
 * to work with especially when your app grows in complexity it often
 * lead to a state know as callback hell where ou have an bunch of callbacks
 * nested with callbacks within more callbacks and so on
 * 
 * A great way to avoid code like this is to use promises instead of callbacks
 * that's very easy to do in node.js
 */
app.get('/', async (request, response) => {
    /* 
     * An express gives an two parameters to make use of :
     * 1) request : is the incoming data from user.
     *    - At many cases you might want to look at the headers or the body of the request to 
     *      authenticate a user or understand what the user is trying to do
     *    
     *      
     * 2) response : is the outgoing data
     *    - At this point we need to implement the code to handle the request, what we want to do
     *      is read some html from our file system and then send it back down to the browser
     */

    // reading the file and sending it to browser
    // await readFile('./home.html','utf-8', (err, html) => {
    //     if(err){
    //         // code 500 means server error
    //         response.status(500).send('sorry, out of order');
    //     }

    /*
     * that's much more concise and readble but it's especially usefull
     * when you have multiple async operations to handle in a single request
     * 
     */
        response.send(await readFile('./home.html','utf-8'));
    //});
});

app.listen(process.env.PORT || 3000, () =>console.log(`App avaiable on http://localhost:3000`));
