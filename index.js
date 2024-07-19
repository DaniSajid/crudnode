const fs = require('fs');

fs.mkdir('hello', (err) => {
    if (!err) {
        console.log('The directory has been created!');}
        else{
            console.log(err);
        }
})
fs.writeFile('./hello/hello.txt', 'Hello, World!', (err) => {
    if (!err) {
        console.log('The file has been saved!');}
        else{
            console.log(err);
        }
})
fs.appendFile('./hello/hello.txt', '\nWelcome Daniyal', (err) => {
    if (!err) {
        console.log('The file has been updated!');}
        else{
            console.log(err);
        }
})
fs.readFile('./hello/hello.txt', 'utf8', (err, data) => {
    if (!err) {
        console.log(data);}
        else{
            console.log(err);
        }
})
fs.rename('./hello/hello.txt', './hello/world.txt', (err) => {
    if (!err) {
        console.log('The file has been renamed!');}
        else{
            console.log(err);
        }
})
fs.unlink('./hello/world.txt', (err) => {
    if (!err) {
        console.log('The file has been deleted!');}
        else{
            console.log(err);
        }
})
fs.rmdir('hello', (err) => {
    if (!err) {
        console.log('The directory has been deleted!');}
        else{
            console.log("ERROR FOLDER NOT DELETED");
        }   
})