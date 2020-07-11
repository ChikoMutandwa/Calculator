// var _num1, _num2, _ans;

// _num1 = parseFloat(document.calcForm.num1.value);
// _num2 = parseFloat(document.calcForm.num2.value);

function add() {
    var _num1, _num2, _ans;

    _num1 = parseFloat(document.calcForm.num1.value);
    _num2 = parseFloat(document.calcForm.num2.value);

    _ans = _num1 + _num2;
    document.calcForm.ans.value = _ans;
}

function sub() {
    var _num1, _num2, _ans;

    _num1 = parseFloat(document.calcForm.num1.value);
    _num2 = parseFloat(document.calcForm.num2.value);

    _ans = _num1 - _num2;
    document.calcForm.ans.value = _ans;
}

function multi() {
    var _num1, _num2, _ans;

    _num1 = parseFloat(document.calcForm.num1.value);
    _num2 = parseFloat(document.calcForm.num2.value);

    _ans = _num1 * _num2;
    document.calcForm.ans.value = _ans;
}

function div() {
    var _num1, _num2, _ans;

    _num1 = parseFloat(document.calcForm.num1.value);
    _num2 = parseFloat(document.calcForm.num2.value);

    _ans = _num1 / _num2;
    document.calcForm.ans.value = _ans;
}