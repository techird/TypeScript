//// [ES5For-ofTypeCheck5.ts]
var union: string | number[];
for (var v of union) { }

//// [ES5For-ofTypeCheck5.js]
var union;
for (var _i = 0, _a = union ? union.length : 0; _i < _a; _i++) {
    var v = union[_i];
}
