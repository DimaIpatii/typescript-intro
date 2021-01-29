function handleInput (input : number | string){
    if(typeof input === 'number'){
        return input.toFixed(2);
    }

    return input.trim().toUpperCase();
}

handleInput(9); // 9.00
handleInput('hello world'); // HELLO WORLD


class ResponseMessage {
    header = '200';
    message = 'Response message';
}

class ErrorMessage{
    header = "404";
    message = "Cannot find..."
}

const data = new ResponseMessage();
const err = new ErrorMessage();

function result (res : ResponseMessage | ErrorMessage) : {} {
    if(res instanceof ResponseMessage){
        return {
            info : {
                header : res.header,
                message : res.message
            }
        }
    }

    if(res instanceof ErrorMessage) {
        return { 
            info : {
                header : res.header,
                message : res.message
            }
        }
    }
}

result(data); // { info: { header: '200', message: 'Response message' } }
result(err); // { info: { header: '404', message: 'Cannot find...' } }


/* ****************************** */

type Alert = "success" | "progress" | "error";

const hendleMessage = (msg : Alert) => {
    
}

hendleMessage('success');
hendleMessage('progress');
hendleMessage('error');
/* hendleMessage('disable'); --> none! */