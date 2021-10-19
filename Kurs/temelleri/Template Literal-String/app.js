const name="seyit erdemir";
const departmant="pc";
const salary=5000;

// const a="isim: "+name+"\n"+"departmant: "+departmant+"\n"+"maas: "+salary;


// const a= `isim:${name}\nDepartman:${departmant}`;

// const html="<ul>"+
//             "<li>"+ name + "</li>"+
//             "<li>"+ departmant + "</li>"+
//             "</ul>";

//             document.body.innerHTML=html;

    function a(){
return "merhaba";

    }

const htmlx=`
            <ul>
            <li>${name} </li>
            <li>${departmant} </li>
            <li>${salary} </li>
            <li>${10+2} </li>
            <li>${a()} </li>

            </ul>
            `;


            document.body.innerHTML=htmlx;


