var regex = /is/;                        // A REGEX THAT CAN BE USED TO MATCH AGAINST SOME OTHER STRING. THE REGEX IS DEFINED BY //, WITH THE CASE TO MATCH WITHIN THE SLASHES. IN THIS CASE, THIS WILL BE USED TO MATCH-CASE THE WORD "is"
var string = "Regex is great!";          // THE STRING VARIABLE THAT WILL BE USED AGAINST THE REGEX CHECK

var result = string.match(regex);       // UP UNTIL NOW, NO jQUERY HAS BEEN USED. HERE, THIS CHANGES. JAVASCRIPT CAN BE USED, BUT jQUERY'S MATCH MAKES IT EASIER HERE.
                                        // LINE 15 MEANS - MATCH THE STRING CONTENTS ACCORDING TO THE REGEX VARIABLE AND PARSE THE CONTENTS (EITHER TRUE - THE VALUE, OR FALSE - null, TO THE result VARIABLE)
alert(result);            