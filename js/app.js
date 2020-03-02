// var myAnswer = '';
function displayAnswer(num){
    var romanNumber = convertToRoman(num);
    document.getElementById("answer").innerHTML=" <h2> your Roman numeral is " +romanNumber+"</h2>"
}

var elem = document.getElementById("container");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
    //    console.log('you hit enter')
       var  myArgument = document.getElementById("num").value;
       displayAnswer(myArgument);
    }
}

function convertToRoman(num, myAnswer="") {
    console.log('num', num)
    var remaining = num;

    var romanNumerals = ['I' , 'IV' , 'V' , 'IX' , 'X' , 'XL' , 'L' , 'XC' , 'C' , 'CD' , 'D' , 'CM' , 'M']
    var romanValues = [1,4,5,9,10,40,50,90,100,400,500,900,1000]

    for(var i = romanValues.length -1; i >= 0; i--){
        if (romanValues[i] <= remaining){
            console.log('roman Value',romanValues[i]);
            myAnswer = myAnswer + romanNumerals[i];
            remaining = remaining - romanValues[i];
            console.log('remaining',remaining);
            if (remaining == 0){
                console.log('answer:',myAnswer)
                return myAnswer
            } else {
                return convertToRoman(remaining, myAnswer)
            }
        }
    }
}

