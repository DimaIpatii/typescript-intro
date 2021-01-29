"use strict";
var Form;
(function (Form) {
    var MyForm = (function () {
        function MyForm(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        MyForm.prototype.getInfo = function () {
            return {
                type: this.type,
                state: this.state
            };
        };
        return MyForm;
    }());
    var myForm = new MyForm('some.mail@gmail.com');
    console.log(myForm);
})(Form || (Form = {}));
//# sourceMappingURL=namespaces.js.map