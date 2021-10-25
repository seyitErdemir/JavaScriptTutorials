document.getElementById("change").addEventListener("click", change);

function change() {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=526ed7ef48f8318be2d50c364bc3de55&format=1", true);

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