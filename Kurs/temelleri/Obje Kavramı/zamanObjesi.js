let value;

const now= new Date();//şuanki zamanı almamızı saglıyor
console.log(now);

const date1=new Date("05-05-2000");
const date2=new Date("11-11-2005");
const date3=new Date("1-1-2001");
value=date1;
value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();

value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();


date1.setMonth(7);
date1.setDate(2);
date1.setFullYear(1000);
date1.setHours(3);
date1.setMinutes(25);
date1.setSeconds(50);






value=date1;






console.log(value);
