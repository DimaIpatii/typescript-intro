function handleInput(input) {
    if (typeof input === 'number') {
        return input.toFixed(2);
    }
    return input.trim().toUpperCase();
}
handleInput(9); // 9.00
handleInput('hello world'); // HELLO WORLD
var ResponseMessage = /** @class */ (function () {
    function ResponseMessage() {
        this.header = '200';
        this.message = 'Response message';
    }
    return ResponseMessage;
}());
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage() {
        this.header = "404";
        this.message = "Cannot find...";
    }
    return ErrorMessage;
}());
var data = new ResponseMessage();
var err = new ErrorMessage();
function result(res) {
    if (res instanceof ResponseMessage) {
        return {
            info: {
                header: res.header,
                message: res.message
            }
        };
    }
    if (res instanceof ErrorMessage) {
        return {
            info: {
                header: res.header,
                message: res.message
            }
        };
    }
}
console.log(result(data));
console.log(result(err));
