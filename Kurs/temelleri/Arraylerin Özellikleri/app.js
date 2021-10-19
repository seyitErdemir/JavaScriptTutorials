let value;

const numbers=[43,24,42,34,534,543,45,43,3,4];
//const numbers2=new Array(1,23,4,5,65,7,8,3);

const langs=["python","java","c++","javascript"];

//uzunluk
value=numbers.length;

//index
value=numbers[0];
value=numbers[2];
value=numbers[numbers.length-1];

// herhangi bir indexteki degeri degiştirme
numbers[2]=1000;
value=numbers;

//index of
value=numbers.indexOf(1000);


//arrayin sonuna deger ekleme -push
numbers.push(2000);
numbers.unshift(300);
value=numbers;

//sonundan deger atma
numbers.pop();
value=numbers;

//başından deger atma
numbers.shift();
value=numbers;

//belli aralık arasını atma
numbers.splice(0,3);
value=numbers;


numbers.reverse();
value=numbers;

//sıralama için kullanılıyor ama sadece ilk rakamlarına bakıyor
value=numbers.sort();


value=numbers.sort(function(x,y){//küçükten büyüge
    return x-y;
});

value=numbers.sort(function(x,y){//büyükten kucuge
    return y-x;
});


console.log(value);