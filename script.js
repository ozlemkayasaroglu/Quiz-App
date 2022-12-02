console.log(sorular);
const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else { // sınav bitti 
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);

        certificated();
    }
       
});



ui.btn_replay.addEventListener("click", function () {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}
// EMREYE SOR
function certificated (){
    if (quiz.sorular.length !== quiz.dogruCevapSayisi){
        ui.btn_cert.classList.add("disabled");
    } else { 
        ui.btn_cert.addEventListener("click", function(){
            window.open(
                'http://ozlem.kayasaroglu.com/wp-content/uploads/2022/12/ozlem-acar-quiz-app.jpg',
                '_blank' 
              )
        })
       

    }
}








let counter;
function startTimer(time) {
    counter = setInterval(timer, 1400);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if (time < 0) {
            clearInterval(counter);

            ui.time_text.textContent = "Süre Bitti.";

            let cevap = quiz.soruGetir().dogruCevap;

            for (let option of ui.option_list.children) {
                if (option.querySelector("span b").textContent === cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.btn_next.classList.add("show");
        }
    }
};


let counterLine;

function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 200);
    function timer() {
        line_width += 10;
        ui.time_line.style.width = line_width + "px";

        if (line_width > 549) {
            clearInterval(counterLine);
        }
    }

}
