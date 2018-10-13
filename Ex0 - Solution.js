// (() => x => y = x * 2 )


// ()

// iife = () => 3;

// foo = (x, y = x * 2) => bar = z => z.length > 3 ? ( => z.map )

foo = (x,y) => x > y ? var tmp = x, x = y, y = tmp;

foo = (x,y) => {if(x > y) {var tmp = x, x = y, y = tmp; console.log(x, y)}};

foo = (x,y) => x > y ? ((tmp = x, x = y, y = tmp), console.log(x, y)) : console.log(x);