"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Log = function (constructor) {
};
var LogText = function (target, propName) {
};
var LogMethod = function (target, propName, descriptor) {
};
var PersonClass = (function () {
    function PersonClass(name) {
        this.name = name;
    }
    Object.defineProperty(PersonClass.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        LogText
    ], PersonClass.prototype, "name", void 0);
    __decorate([
        LogMethod
    ], PersonClass.prototype, "getName", null);
    PersonClass = __decorate([
        Log
    ], PersonClass);
    return PersonClass;
}());
function Bind(_, _2, descriptor) {
    var original = descriptor.value;
    return {
        configurable: true,
        enumerable: true,
        get: function () {
            return original.bind(this);
        }
    };
}
var Component = function (config) {
    return function (Constructor) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                var card = document.querySelector(config.selector);
                card.innerHTML = config.template;
                return _this;
            }
            return class_1;
        }(Constructor));
    };
};
var Block = (function () {
    function Block(name) {
        this.name = name;
    }
    Block.prototype.displayName = function () {
        console.log("My name is: " + this.name);
    };
    __decorate([
        Bind
    ], Block.prototype, "displayName", null);
    Block = __decorate([
        Component({
            selector: "#block",
            template: "\n    <div class=\"card\">\n        <div class=\"card-content\">\n            <h2 class=\"card-title\">Decorators Component</h2>\n        </div>\n    </div>\n    "
        })
    ], Block);
    return Block;
}());
var card = new Block('My card');
var btn = document.querySelector('#btn');
btn.addEventListener('click', card.displayName);
//# sourceMappingURL=decorators.js.map