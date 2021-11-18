document.getElementById("change").addEventListener("click", change);

function change() {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=2145fc88497a1c7ed1812f0ccd54ae4a", true);
   xhr.onload = function () {
      if (this.status == 200) {
         const response = JSON.parse(this.responseText);


         const rate = response.rates.TRY;
         const amount =Number(document.getElementById("amount").value) ;
         document.getElementById("tl").value=amount*rate;
      }
   }

   xhr.send();

}