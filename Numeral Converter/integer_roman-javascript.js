//Numeral Converter project
function integerRoman(n){
    // Your code here
    returnstring = '';
    table = [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]];
    for(i=0; i < table.length; i++){
        while (n-table[i][1] >= 0){
            n -= table[i][1];
            returnstring += table[i][0];
        }
    }
    return returnstring;
    
}