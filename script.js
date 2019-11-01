//write first method
function sleep_in(weekday,vacation) {

    return !weekday || vacation;
}

//write second method
function monkey_trouble(firstSmile, secondSmile) {

    return firstSmile && secondSmile || !firstSmile && !secondSmile ;
}

function string_times(str,int){

    var outputStr = "";
    for(var i = 0; i<int; i++){
        outputStr += str;
    }
    return outputStr;

}

function front_times(word,num){

    var outputWord = "";
    var front = word.substring(0,3);

    for(var i = 0; i<num; i++) {
        outputWord = outputWord + front
    }
    return outputWord;
}

function string_bits(string){
    var outputString = "";
    for(var i = 0; i < string.length; i= i+2){
        if(i % 2 == 0){
            outputString += string.substring(i, i+1)
        }
    }
    return outputString
}

function caughtSpeeding(speed,birth) {
    var numTicket = 0;

    if (birth == true) {
        if (speed <= 65) {
            numTicket =+ 0;
        }
        if (65 < speed && speed <= 85) {
            numTicket += 1;
        }
        if (speed > 85) {
            numTicket += 2;
        }
        return numTicket;
    } else {
        if (speed <= 60) {
            numTicket += 0;
        }
        if (60 < speed && speed <= 80) {
            numTicket += 1;
        }
        if (speed > 80) {
            numTicket += 2;
        }

        return numTicket;
    }
}

function fizz_buzz(num){
    var mod = "";
    if(num % 3 ==0){
        mod += 'Fizz'
    }
    if(num % 5 == 0){
        mod += 'Buzz'
    }
    if(num % 3 != 0 && num % 5 != 0){
        mod = num + '!'
    }
    return mod
}

function teaParty(tea, candy){
    var party = "";
    if (candy >= 5 && tea >= 5 ){
        party = 1;
    }
    if (candy >= tea * 2 || tea >= candy * 2){
        party = 2;
    }
    if (candy <5 || tea < 5){
        party =0;
    }

    return party
}

function blackjack(num1, num2) {
    var black = '';
    if(num1 > 21 && num2 > 21){
        black= 0;
    }else{
        if (num1 > 21 && num2 < 21){
            if (num1 <= 21){
                black = num1;
            }
            if(num1 > 21){
                black = num2;
            }
        }
        if (num2 > num1 ){
            if (num2 > 21){
                black = num1;
            }
        }
        if (num2 > 21 && num2 < 21){
            black = num2;
        }
        if(num1<= 21 && num2<= 21){
            if(21 - num1 > 21- num2){
                black = num2;
            }
            if(21 - num1 < 21 - num2){
                black = num2;
            }
            if(num1 > num2 && num1 <= 21){
                black = num1;
            }
            if(num2 > num1 && num2 <= 21){
                black = num2;
            }
            if(num1 < num2 && num1 > 21){
                black = num2;
            }
            if(num2 < num1 && num2 > 21){
                black = num1;
            }
        }

    }
    return black;
}

function loneSum (int1, int2, int3){
    var sum = int1 + int2 + int3;
    if (int1 == int2){
        sum = sum - int1 - int2;
    }
    if(int1 == int3){
        sum = sum - int1 - int3;
    }

    if(int2 == int3){
        sum = sum - int2 - int3;
    }
    if( (int1 == int2) && (int2 == int3)){
        sum = 0;
    }
    return sum;
}

//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(yes,3);
    document.getElementById("output").innerHTML += front_times(bakery,5);
    document.getElementById("output").innerHTML += string_bits(soccer);
    document.getElementById("output").innerHTML += caughtSpeeding(67,true);
    document.getElementById("output").innerHTML += fizz_buzz(18);
    document.getElementById("output").innerHTML += teaParty(5,6);
    document.getElementById("output").innerHTML += blackjack(21,7);
    document.getElementById("output").innerHTML += loneSum(2,4,7);



    //test third method, etc
}


