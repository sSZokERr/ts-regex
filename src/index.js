"use strict";
let cardRegex = /^[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}$/;
let fullNameRegex = /[aA-zZ]{1,}/;
let countryRegex = /[aA-zZ]{1,}/;
let cityRegex = /[aA-zZ]{1,}/;
let addressRegex = /[aA-zZ 1-9]{1,}/;
let zipRegex = /[A-Z1-9]{1,}/;
let cardNumberRegex = /[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}-[1-9]{4,4}/;
let ccvRegex = /[1-9]{3,3}/;
let cardNameRegex = / [aA-zZ ]{1,}/;
document.addEventListener("DOMContentLoaded", () => {
    let name = document.getElementById("fullName");
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    let address = document.getElementById("address");
    let postal = document.getElementById("postalCode");
    let cardNum = document.getElementById("card");
    let ccv = document.getElementById("ccv");
    let cardName = document.getElementById("cardName");
    document.getElementById('payButton').addEventListener("click", () => {
        let check = false;
        if (!fullNameRegex.test(name.value)) {
            name.placeholder = "Wrong name";
            name.style.backgroundColor = "red";
            name.value = '';
        }
        else {
            name.style.backgroundColor = "white";
            name.placeholder = "Full name";
            check = true;
        }
        if (!cardNumberRegex.test(cardNum.value)) {
            cardNum.placeholder = "Wrong card number";
            cardNum.style.backgroundColor = "red";
            cardNum.value = '';
        }
        else {
            cardNum.style.backgroundColor = "white";
            cardNum.placeholder = "Card Number";
            check = true;
        }
        if (!cardNameRegex.test(cardName.value)) {
            cardName.placeholder = "Wrong Name on Card";
            cardName.style.backgroundColor = "red";
            cardName.value = '';
        }
        else {
            cardName.style.backgroundColor = "white";
            cardName.placeholder = "Name on Card";
            check = true;
        }
        if (!ccvRegex.test(ccv.value)) {
            ccv.placeholder = "Wrong CCV";
            ccv.style.backgroundColor = "red";
            ccv.value = '';
        }
        else {
            ccv.style.backgroundColor = "white";
            ccv.placeholder = "CCV";
            check = true;
        }
        if (!countryRegex.test(country.value)) {
            country.placeholder = "Wrong country";
            country.style.backgroundColor = "red";
            country.value = '';
        }
        else {
            country.style.backgroundColor = "white";
            country.placeholder = "country";
            check = true;
        }
        if (!addressRegex.test(address.value)) {
            address.placeholder = "Wrong address";
            address.style.backgroundColor = "red";
            address.value = '';
        }
        else {
            address.style.backgroundColor = "white";
            address.placeholder = "Street Address";
            check = true;
        }
        if (!cityRegex.test(city.value)) {
            city.placeholder = "Wrong city";
            city.style.backgroundColor = "red";
            city.value = '';
        }
        else {
            city.style.backgroundColor = "white";
            city.placeholder = "City";
            check = true;
        }
        if (!zipRegex.test(postal.value)) {
            postal.placeholder = "Wrong ZIP Code";
            postal.style.backgroundColor = "red";
            postal.value = '';
        }
        else {
            postal.style.backgroundColor = "white";
            postal.placeholder = "ZIP Code";
            check = true;
        }
        if (check) {
            alert("Transaction Completed");
        }
    });
});
