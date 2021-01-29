"use strict";
var createObject = function (a, b) {
    return Object.assign({}, a, b);
};
var apple = createObject({ name: 'apple' }, { color: 'green' });
var strawberry = createObject({ name: 'strawberry' }, { color: 'red' });
var countLength = function (value) {
    return {
        value: value,
        countedLenght: "The value has " + value.length + " caracters."
    };
};
var getObjValue = function (obj, key) {
    return obj[key];
};
getObjValue({ name: 'name', age: 20, job: 'some job' }, 'name');
var Collection = (function () {
    function Collection(props) {
        if (props === void 0) { props = []; }
        this.props = props;
    }
    Collection.prototype.add = function (file) {
        this.props.push(file);
    };
    Collection.prototype.remove = function (file) {
        this.props = this.props.filter(function (item) { return item !== file; });
    };
    Object.defineProperty(Collection.prototype, "display", {
        get: function () {
            return this.props;
        },
        enumerable: false,
        configurable: true
    });
    return Collection;
}());
var listOfStrings = new Collection(['one', 'two', 'three']);
listOfStrings.add('five');
listOfStrings.remove('two');
var listOfNumbers = new Collection();
listOfNumbers.add(2);
listOfNumbers.add(3);
listOfNumbers.add(4);
listOfNumbers.remove(3);
var findCar = function (model, year) {
    var car = {};
    if (model.length > 3) {
        car.model = model;
        car.color = 'red';
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
};
findCar('Mercedess', 2001);
var list = [123, 2, 'text', 12, 4, 'Hello'];
var myCar = {
    model: 'Audi',
    year: 2005,
    color: 'blumoon'
};
//# sourceMappingURL=generic.js.map