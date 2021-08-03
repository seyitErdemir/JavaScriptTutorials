let value;

const firstName="louis";
const lastName="armstrong";

const langs="java,python,c#";

value=firstName+" "+lastName;

value="seyit xx";

value+="  erdemir"; //value= value+"erdemir"
 
value=firstName.length;

value=firstName.concat(" ",lastName," "," caz ");

value =firstName.toLowerCase();
value =firstName.toUpperCase();

value= firstName[0];
value= firstName[2];
value= firstName[4];

value= firstName[firstName.length-1];


//index of
value=firstName.indexOf("l");
value=firstName.indexOf("o");
value=firstName.indexOf("3");

//char at
value=firstName.charAt(0);
value=firstName.charAt(firstName.length-1);

//split
value=langs.split(",");

//replace
value=langs.replace("python","css");


//includes
value=langs.includes("java");
value=langs.includes("javaasd");


console.log(value);
