let output = [];

function fizzBuzz(){
    let size = output.length;
    size++;
    if(size%3==0){
        output.push("fizz");
    }else if(size%5 == 0){
        output.push("Buzz");
    }else if(size%3==0 && size%5 == 0){
        output.push("fizzBuzz");
    }else{
        output.push(size);
    }

    console.log(output);
}

fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
fizzBuzz()
