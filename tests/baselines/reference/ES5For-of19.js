//// [ES5For-of19.ts]
for (let v of []) {
    v;
    function foo() {
        for (const v of []) {
            v;
        }
    }
}


//// [ES5For-of19.js]
for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
    var v = _a[_i];
    v;
    function foo() {
        for (var _i = 0, _a = [], _b = _a ? _a.length : 0; _i < _b; _i++) {
            var v_1 = _a[_i];
            v_1;
        }
    }
}
