$(document).ready(function () {
    prikaziNovaBukva();

    setInterval(prikaziNovaBukva, 5000);
});

function prikaziNovaBukva() {

    var vidlivaBukvaId = $('.bukvi li:visible').index();
    var slednaZaPrikazuvanjeId = getRandomInt(0, 30);

    // Провери дали следната и видливата буква се исти.
    if (slednaZaPrikazuvanjeId !== vidlivaBukvaId) {
        $('.bukvi li').hide(); // Скриј ги сите букви
        $('.bukvi li').eq(slednaZaPrikazuvanjeId).show(); // Избери буква по случаен избор
    }
    else {
        // Ако се исти, прикажи друга буква.
        prikaziNovaBukva();
    }

}

// Генерирај цел број по случаен избор помеѓу две зададени вредности- преку MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
