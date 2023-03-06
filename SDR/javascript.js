let kullanciSayi,rastgeleSayi,hak=0;
rastgeleSayi=Math.round(Math.random()*100);

let baslikSonuc=document.getElementById("baslikSonuc");

function oyna(){
    
    kullanciSayi=document.getElementById("txtSayi").value;
    console.log(rastgeleSayi);

    if(hak<10){
        if(kullanciSayi==""){
            baslikSonuc.innerHTML="Sayı giriniz!!!";
        }
        else{
            hak++;
            if(kullanciSayi<rastgeleSayi){
                baslikSonuc.innerHTML="Daha BÜYÜK bir sayı giriniz!";
            }
            else if(kullanciSayi>rastgeleSayi){
                baslikSonuc.innerHTML="Daha KÜÇÜK bir sayı giriniz!";
            }
            else if(kullanciSayi==rastgeleSayi){
                baslikSonuc.innerHTML="Tebrikler KAZANDINIZ!"+hak+". hakkınızda buldunuz...";
            }
        }
    }
    else{
        baslikSonuc.innerHTML="Hakkınız kalmadı. Sıfırlayıp yeniden deneyin!";
    }
}

function sifirla(){
    hak=0;
    rastgeleSayi=Math.round(Math.random()*100);
    baslikSonuc.innerHTML="";
    document.getElementById("txtSayi").value="";
}