//// [ES5For-ofTypeCheck3.ts]
var tuple: [string, number] = ["", 0];
for (var v of tuple) { }

//// [ES5For-ofTypeCheck3.js]
var tuple = ["", 0];
for (var _i = 0, _a = tuple ? tuple.length : 0; _i < _a; _i++) {
    var v = tuple[_i];
}
