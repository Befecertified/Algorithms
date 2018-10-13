function upper(strings, ...values){
    var str = "";

    for (let i = 0; i < strings.length; i++){
        if(i > 0){
            str += values[i - 1].toUpperCase();
        }
        str += strings[i];
    } return str;
}

var name = "befe",
    twitter = "befecertified",
    classname = "intro to programming";

console.log(
    upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` === "Hello BEFE (@BEFECERTIFIED), welcome to the INTRO TO PROGRAMMING!"
);