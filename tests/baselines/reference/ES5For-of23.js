//// [ES5For-of23.ts]
for (var x of [1, 2, 3]) {
    var _a = 0;
    console.log(x);
}

//// [ES5For-of23.js]
for (var _i = 0, _b = [1, 2, 3], _c = _b ? _b.length : 0; _i < _c; _i++) {
    var x = _b[_i];
    var _a = 0;
    console.log(x);
}
