function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}


let sorular = [
    new Soru("1-Aşağıdaki cümlelerden hangisinde ki’nin yazımı yanlıştır?", 
    { a: "Haberlerdeki adam karısına her gün çiçek götürüyordu.", b: "Onun yüreği de köpeğin ki kadar geniş!", c: "Sendeki bu erkek kalbi de yumuşacık, pamuk gibi!"}, "b"),
    
    new Soru("2-Aşağıdakilerin hangisinde “ki” nin yazımıyla ilgili bir yanlışlık yapılmıştır?", 
    { a: "Sevgilisini öyle seviyorduki bir dediğini iki etmiyordu.", b: "Heyecanla kucağındaki kediyi sevdi.", c: "Kız kardeşindeki mutluluğu hemen fark etti." }, "a"),
    
    new Soru("3-Hangi cümlede yazım yanlışı vardır?", 
    { a: "Sen ne yaptınki onu bu kadar mutlu ettin.", b: "Halbuki kızına en güzel kitapları hediye edecekti.", c: "Öyle bir erkekti ki hep sevecen ve şefkatli." }, "a"),
    
    new Soru("4-Aşağıdaki cümlelerin hangisinde bir yazım yanlışı vardır?", 
    { a: "Her oğlan annesine yardım etmez mi ki?", b: "Öyle hastaydıki babası ona ıhlamur yaptı.", c: "Oysaki cinsiyet ayrımı eskide kalmamış mıydı?", }, "b"),

    new Soru("5-Aşağıdaki cümlelerin hangisinde bir yazım yanlışı yapılmıştır", 
    { a: "Kadın, kocasına elindeki çiçekleri verdi.", b: "Babası, kızının önlüğünü temizledi. ", c: "Unutmaki cinsiyet normları diye bir şey yok!", }, "b"),


];
