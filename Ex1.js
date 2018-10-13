var x = 2, fns = []

(function(){
    const x = 5;

    for (let i = 0; i < x; i++){
        fns.push(function(){
            return i;
        });
    }
})();

console.log(
    (x * 2) === fns[x*2]()
);

console.log(sum(range(1,10)));


