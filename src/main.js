let route = require('./route');
// let result = route();  //接收数据
//console.log(route);

let readline = require('readline');
function controlRoute(input) {
    let result = route(input);  //接收数据
    console.log(result.text);//打印数据
    if (result.rerun) {
        controlRoute(input);
    }
}
function  print () {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function (line) {
        controlRoute(line);
    });
    controlRoute();
}
print();













