//// [ES5For-of14.ts]
for (const v of []) {
    var x = v;
}

//// [ES5For-of14.js]
for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
    var v = _a[_i];
    var x = v;
}
