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
    
    new Soru("4-Aşağıdaki cümlelerin hangisinde 'ki' eki doğru yazılmıştır?", 
    { a: "Her oğlan annesine yardım etmez miki?", b: "Öyle hastaydıki babası ona ıhlamur yaptı.", c: "Oysaki cinsiyet ayrımı eskide kalmamış mıydı?", }, "c"),

    new Soru("5-Aşağıdaki cümlelerin hangisinde bir yazım yanlışı yapılmıştır", 
    { a: "Kadın, kocasına elindeki çiçekleri verdi.", b: "Babası, kızda ki önlüğünü temizledi. ", c: "Unutma ki cinsiyet normları diye bir şey yok!", }, "b"),

     new Soru("6-Aşağıdaki cümlelerin hangisinde bir yazım yanlışı yapılmıştır?", 
    { a: "Ah be oğlum sendeki bu şefkat bende olsa...", b: "Bir gün gelir ki herkes çok ama çok mutlu olur", c: "Babası tam ev işlerini bitirmişti ki, kedi sütü döktü.", }, "a"),
    
    new Soru("7-Aşağıdaki cümlelerin hangisinde bir yazım yanlışı yapılmıştır?", 
    { a: "Kabul et ki erkekler de ağlar.", b: "Tanıdık mı ki bu adamın fedakarlığı", c: "Çocuğun, kankasına yaptığı bu seferki hazırlıklar tamamdı", }, "c"),

    new Soru("8-Aşağıdaki cümlelerin hangisinde bir yazım yanlışı yapılmıştır?", 
    { a: "Sevdiklerinizi kucaklayınki faydası olsun.", b: "Köpek tatlı ki tatlı", c: "Bir baktım ki kedi geri gelmiş", }, "a"),

    new Soru("9-Aşağıdaki cümlelerin hangisinde bir yazım yanlışı yapılmıştır?", 
    { a: "Farz edelim ki cinsiyet ayrımı olmadan yaşıyoruz.", b: "Kadın, tamir işlerinde öyleydiki", c: "Evet ama zararlı değil ki", }, "b"),
    
    new Soru("10-Aşağıdaki cümlelerin hangisinde 'ki' eki doğru yazılmıştır", 
    { a: "Çok çalışki kimseye muhtaç kalma", b: "Ah öyle mutlu haldeydiki", c: "Abim dedi ki:'ben hallederim'", }, "b"),
];
