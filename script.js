'use strict';
window.onload = function () {
    var myForm = document.forms['myForm'];
    var xmlhttp = new XMLHttpRequest();
    var url = "pokemons.json";
    var numero = 0;
    var name = '';
    var type = '';

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            myForm.onsubmit = function () {
                numero = this.elements['number'].value;
                if (numero < 1 || numero > 151) {
                    document.getElementById('error').innerHTML = 'Le pokémon numero ' + numero + ' n\'existe pas.';
                    document.getElementById('pokemon_name').innerHTML = '';
                    document.getElementById('pokemon_type').innerHTML = '';
                } else {
                    myPokemon(myArr, numero);
                }
                return false;
            };
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myPokemon(pick, numero) {
        if (!isNaN(numero)) {
            type = pick[numero].type;
            name = pick[numero].name;
            document.getElementById('pokemon_name').innerHTML = name;
            document.getElementById('pokemon_type').innerHTML = type;
            document.getElementById('pokemon_image').style.backgroundImage = 'url("http://img.pokemondb.net/artwork/' +
                name.toLowerCase() + '.jpg")';
            document.getElementById('error').innerHTML = '';
            myForm.elements['number'].value = '';
        }
        else {
            var number = 0;
            var i = 0;
            numero = numero.substring(0, 1).toUpperCase() + numero.substring(1).toLowerCase();
            for (i in pick) {
                if (pick[i].name == numero) {
                    number = i;
                }
            }
            numero = number;
            if (number == 0) {
                name = myForm.elements['number'].value;
                document.getElementById('error').innerHTML = name + ' n\'existe pas.';
                document.getElementById('pokemon_name').innerHTML = '';
                document.getElementById('pokemon_type').innerHTML = '';
            }
            else {
                name = pick[numero].name;
                type = pick[numero].type;
                document.getElementById('pokemon_name').innerHTML = name;
                document.getElementById('pokemon_type').innerHTML = type;
                document.getElementById('pokemon_image').style.backgroundImage = 'url("http://img.pokemondb.net/artwork/'
                    + name.toLowerCase() + '.jpg")';
                document.getElementById('error').innerHTML = '';
                myForm.elements['number'].value = '';
            }
        }
    }

    document.getElementById('btn1').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '1';
    };
    document.getElementById('btn2').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '2';
    };
    document.getElementById('btn3').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '3';
    };
    document.getElementById('btn4').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '4';
    };
    document.getElementById('btn5').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '5';
    };
    document.getElementById('btn6').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '6';
    };
    document.getElementById('btn7').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '7';
    };
    document.getElementById('btn8').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '8';
    };
    document.getElementById('btn9').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '9';
    };
    document.getElementById('btn0').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value + '0';
    };

    document.getElementById('delete').onclick = function () {
        myForm.elements['number'].value = myForm.elements['number'].value.slice(0, -1);
    };
    document.getElementById('send').onclick = function () {
        myForm.elements['submit'].click();
        myForm.elements['number'].value = '';
    };
};