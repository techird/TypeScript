//// [ES5For-of17.ts]
for (let v of []) {
    v;
    for (let v of [v]) {
        var x = v;
        v++;
    }
}

//// [ES5For-of17.js]
for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
    var v = _a[_i];
    v;
    for (var _c = 0, _d = [v_1], _e = _d ? _d.length : 0; _c < _e; _c++) {
        var v_1 = _d[_c];
        var x = v_1;
        v_1++;
    }
}
