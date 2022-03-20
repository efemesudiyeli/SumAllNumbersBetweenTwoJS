var total;
var sonuc;
var first;
var second;
var tekcift;
var h2 = document.getElementById("sonuc");
var tekorcift = document.getElementById("tekorcift");
var alertbox = document.getElementById("alertbox");




function isNotEmptySum() {


    // Girilen Alanların Boşluğu Doğrulaması
    if (document.getElementById("firstNumber").value == "" || document.getElementById("secondNumber").value == "") {
        alertbox.textContent = "SAYI ALANLARI BOŞ BIRAKILAMAZ. LÜTFEN ALANLARI DOLDURUN."
    }
   

    // Sayıların Toplamı
    else {
        alertbox.textContent = " ";
        first = parseInt(document.getElementById("firstNumber").value);
        second = parseInt(document.getElementById("secondNumber").value);

        function Sirala(minimum, maksimum) {
            return minimum - maksimum;
        }


        function Topla(arr) {
            var list = arr.sort(Sirala);
            var a = list[0];
            var b = list[1];
            var c = 0;

            while (a <= b) {
                c = c + a;
                a += 1;
            }

            return c;
        }

        sonuc = (Topla([first, second]));
        calc();


        // DAHİLİYET FONKSİYONU
        function calc()
        {
          if (!document.getElementById('cb_dahil').checked) 
          {

            // GİRİLEN SAYILARI SONUÇTAN ÇIKARMA.
              sonuc = sonuc - first;
              sonuc = sonuc - second;
              console.log("Sayılar dahil değil.")
          } else {
              console.log("Sayılar dahil.")
          }
        }



        // TEK ÇİFT DOĞRULAMASI
        var validate = sonuc % 2;
        if (validate != 1) {
            tekcift = "  | Çift Sayı"
            h2.style.backgroundColor = "red"
            h2.style.color = "white";
        }

        else {
            tekcift = "  | Tek Sayı"
            h2.style.backgroundColor = "yellow"
            h2.style.color = "black";
            

        }





        
        h2.textContent = " " + sonuc + "  ";
        tekorcift.textContent = tekcift;










    }






}