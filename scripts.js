$(document).ready(function () {
    prikaziNovaBukva();

    setInterval(prikaziNovaBukva, 5000);
});

function prikaziNovaBukva() {

    var slednaZaPrikazuvanjeId = getRandomInt(0, 30);

    $('.bukvi li').css('display', 'none'); // Скриј ги сите букви
    $('.bukvi li').eq(slednaZaPrikazuvanjeId).css('display', 'table-cell'); // Избери буква по случаен избор

}

// Генерирај цел број по случаен избор помеѓу две зададени вредности- преку MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
