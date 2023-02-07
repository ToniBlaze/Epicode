function checkPassword(pass){
let possibleValues = ['abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVW','0123456789','!%$@()[]+-'];
for ( let i = 0; i < possibleValues.length; i++ ){
    for(const char of pass){
        if(possibleValues[i].includes(char)){
        possibleValues.splice(i--,1); 
        break;
        }
    }
}
return !possibleValues.length && pass.length>=8;
}

console.log(checkPassword('Password12%'));