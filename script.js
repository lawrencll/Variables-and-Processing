var containerEle = document.body.querySelector(".container");

var bill = Number(prompt("What is your total bill?"));
var tax = bill * .07
var taxbill = tax + bill
var tip = taxbill*.05
var totalbill = taxbill+tip;



containerEle.innerHTML = totalbill;