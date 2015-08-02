$(document).ready(function () {
    prikaziNovaBukva();

    setInterval(prikaziNovaBukva, 5000);
});

function prikaziNovaBukva() {

    var vidlivaBukva = $('.bukvi li:visible');
    var slednaZaPrikazuvanjeId = getRandomInt(0, 30);

    $('.bukvi li').hide(); // Скриј ги сите букви

    // Провери дали следната и видливата буква се исти.
    if (slednaZaPrikazuvanjeId === vidlivaBukva.eq()) {
        // Ако се исти, прикажи друга буква.
        prikaziNovaBukva();
    }
    else {
        $('.bukvi li').eq(slednaZaPrikazuvanjeId).show(); // Избери буква по случаен избор
    }

}

// Генерирај цел број по случаен избор помеѓу две зададени вредности- преку MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
