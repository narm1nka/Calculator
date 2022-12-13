function calc() 
{
   var n1 = parseFloat(document.getElementById('n1').value);
   var n2 = parseFloat(document.getElementById('n2').value);


   var open = document.getElementById('operators').value ;


   if ( open === '+')
   {
    document.getElementById('result').value = n1+n2;   
   }

   if ( open === '-')
   {
    document.getElementById('result').value = n1-n2;   
   }

   if ( open === '/')
   {
    document.getElementById('result').value = n1/n2;   
   }

   if ( open === '*')
   {
    document.getElementById('result').value = n1*n2;   
   }

}