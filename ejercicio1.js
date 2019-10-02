// Todas las palabras que tengan una logintud de 7 o mas letras
let mensaje1="1.-el ferrocarril es un tren que se uso en la era de la revolucion industrial";
let newMensaje1= mensaje1.match(/[a-z]{7,}/g," ");
console.log(newMensaje1);


//Expresiones que No finalicen con una vocal
let mensaje2="2.-esta aventura hubo habitantes que vieron bestias en jaulas";
let newMensaje2= mensaje2.replace(/[^aeiou\s]\b/g,"*");
console.log(newMensaje2);


//La palabras que inicien con"M" donde la segunda no sea vocal
let mensaje3="3.-las Palabras es una forma de comunicarse con las personas por mcdonals ms mr mc";
let newMensaje3= mensaje3.replace(/[m][^aeiou][a-z]{0,}/g," ");
console.log(newMensaje3);


//Eliminar la comillas y el texto dentro
let mensaje4="4.-es un mundo de 'fantasia'hay viajeros destinados a 'pelear'";
let newMensaje4= mensaje4.replace(/[''?][a-z]{0,}/g," ");
console.log(newMensaje4);


//Eliminar el IP
let mensaje5="5.-Las computadoras Ultimizan el Ip 172.192.1.2 y no 34 53";
let newMensaje5= mensaje5.replace( /(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/g,"");
console.log(newMensaje5);;
/*
Expresion regular para encontrar palabras en una cadena con el delimitador de palabras \b.
var historia = "para someter situado fuera de los limites bayotenazo"
var expresion =/[a-za-Z]+[aeio]\b/gm
result=historia.match(expresion);
console.log(result)
*/


//eliminar LA HORA
let mensaje6="6.- Me levanto alas 07:00:00 para desayunar";
let newMensaje6= mensaje6.replace( /(\d\W)?[00:00:00][0-9][0-9]{0,}/g,"");
console.log(newMensaje6)


//Numero Telefonico 
let mensaje7 = "7.-Mi numero Tel es:9851019573 pero para mis desconocidos es 123 , 89 "; 
let newMensaje7 = mensaje7.replace(/[0-9]{10,20}/g, "*");
console.log(newMensaje7);

//Eliminar el correo electronico
let mensaje8="8.-Tengo una cuenta que es victor.dzib1023@gmail.com para mandar documentos";
let newMensaje8= mensaje8.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/g,"");
console.log(newMensaje8);


//eliminar el URL
let mensaje9 = "9.-https://www.facebook.com , Es una pagina para navegacion"; //elimina el URL
let newMensaje9 = mensaje9.replace(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/g, "+");
console.log(newMensaje9)


//elimina un codigo postal
let mensaje10 = "10.-97780, 78 , 51  97783"; 
let newMensaje10 = mensaje10.replace(/[0-9]{5}/g, "*");
console.log(newMensaje10);