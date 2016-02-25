"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate()
{
  var result;
  var temp = original.value;
    var regexp = /^\s*([-+]?\d+(?:\.\d*)?)(?:(e)[+-]?(\d)+)?(f|fa|far|fare|faren|farenh|farenhe|farenheit|c|ce|cel|cels|celsi|celsiu|celsius)\s*$/i;
  var m = temp.match(regexp);

  if (m)
  {
    var num = m[1];
    var type = m[4];
    num = parseFloat(num);

    if(m[2]==null)
    {
      if ((type.charAt(0) == 'c') || (type.charAt(0) == 'C'))
      {
        result = (num * 9/5)+32;
        result = result.toFixed(1)+" Farenheit"
      }

      if ((type.charAt(0) == 'f' || type.charAt(0) == 'F'))
      {
       result = (num - 32)*5/9;
       result = result.toFixed(1)+" Celsius"
      }
    }

      else
      {
       var exp = m[3];
       var exttype = m[4];
       exp = parseFloat(exp);
       var aux = Math.pow(10,exp);
       exp = num * aux;

         if ((exttype.charAt(0) == 'c' || exttype.substr(0,0) == 'C'))
         {
           result = (exp * 9/5)+32;
           result = result.toFixed(1)+" Farenheit"
         }
         if ((exttype.charAt(0) == 'f' || exttype.charAt(0) == 'F'))
         {
           result = (exp - 32)*5/9;
           result = result.toFixed(1)+" Celsius"
         }
      }
    converted.innerHTML = result;
  }
  else
  {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
