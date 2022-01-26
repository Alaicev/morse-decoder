const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let simbol = "";
    let number = ""
    let rezult = "";
    let key = ""
    
    for (let i = 0; i < expr.length; i+=10) {
        simbol = expr.slice(i, i+10);
        console.log(simbol)
        if(simbol === "**********") {
            rezult += " ";
        } else {
        for(let j = 0; j < simbol.length; j+=2) {
            number = simbol.slice(j, j+2);
            if(number === "10"){
                key+= ".";
            }
            if(number === "11") {
                key += "-";
            }
            console.log(key)
        }
        rezult+=MORSE_TABLE[key];
        key="";
    }
    }
    return rezult
    }

module.exports = {
    decode
}