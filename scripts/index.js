"use strict";

window.onload = init;

function init() {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.onclick = onConvertBtnClicked;
}
function onConvertBtnClicked() {
    const fahrenheitField = document.getElementById('fahrenheitField');
    const answerField = Number((fahrenheitField.value)(5/9)-32);
    const answerFieldEL = document.getElementById('answerField');
    answerField = answerFieldEL 
}