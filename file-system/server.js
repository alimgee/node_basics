var fs = require('fs');


// reading from file
fs.readFile('TestFile.txt', 'utf-8', function (err, data) {
    if (err) throw err;

    console.log(data);
});


// var fs = require("fs");

// fs.readFile("test.txt", function (err, data) {
//     if (err) throw err;
//     console.log(data.toString());
// });


// writing to file
fs.writeFile('test.txt', 'Hello World!', function (err) {
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});

// append to file
fs.appendFile('test.txt', 'Hello World!', function (err) {
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});

// using open
fs.open('TestFile.txt', 'r', function (err, fd) {

    if (err) {
        return console.error(err);
    }

    var buffr = new Buffer.alloc(1024);

    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {

        if (err) throw err;

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(buffr.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd, function (err) {
            if (err) throw err;
        });
    });
});

// delete file
fs.unlink('test.txt', function () {

    console.log('delete operation complete.');

});