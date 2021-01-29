interface Rect{
    readonly id : string, // cannot be modyfied:
    color? : string, // not required:
    size : {
        width : number,
        height : number
    }
}

const rect : Rect = {
    id : '12321',
    size : {
        width : 1234,
        height : 1234
    },
    color : 'red'
}

const rect1 : Rect = {
    id : 'tid_text',
    size : {
        width : 100,
        height : 200
    }
}
rect1.color = 'yellow'; 

// Assign to an interface:
const react2 = {} as Rect;
// Old syntax:
const rect3 = <Rect>{};

/* Extend Interfaces */
interface RectWithArea extends Rect {
    getArea() : number
}

const rect4 : RectWithArea = {
    id : 'some_id',
    size : {
        width : 200,
        height : 100
    },
    getArea() : number {
        return this.size.width * this.size.heigth
    } 
}

/* ***************** */

interface IClock {
    time : Date,
    setTime (date : Date) : void
}

class Clock implements IClock{
    time : Date = new Date();

    setTime(date : Date) : void  {
        this.time = date
    };
}

/* ***************** */

// Styles:
interface Styles {
    margin : string,
    padding : string,
    width : string,
    height : string
}

const cssStyles : Styles = {
    margin : '10px',
    padding : '20px',
    width : '100px',
    height : '200px'
}
/* ***************** */

interface Styles2 {
    [key : string] : string
}

const sassStyles : Styles2 = {
    margin : '10px',
    padding : '20px',
    //width : 100 --> none!
}