var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var descMain = document.querySelector('.descMain');

var tempmin = document.querySelector('.temp_min');
var tempmax = document.querySelector('.temp_max');

var button = document.querySelector('.submit');


button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=de15ca842b5fd60c4cae4e0815941899&units=metric')
        .then(response => {
            if (!response.ok) {
                document.getElementById('error-image').style.display = 'block';
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('img').style.display = 'none';
                document.getElementById('name').style.display = 'none';
                var additionalText1 = document.querySelector('.temp');
                var additionalText2 = document.querySelector('.descMain');
                var additionalText3 = document.querySelector('.temp_min');
                var additionalText4 = document.querySelector('.temp_max');
                var additionalText5 = document.querySelector('.desc');
                additionalText1.style.display = 'none';
                additionalText2.style.display = 'none';
                additionalText3.style.display = 'none';
                additionalText4.style.display = 'none';
                additionalText5.style.display = 'none';
                throw new Error("City not found");
            } else {
                document.getElementById('error-image').style.display = 'none';
                document.getElementById('error-message').style.display = 'none';
                document.getElementById('img').style.display = 'block';
                document.getElementById('name').style.display = 'block';
                var additionalText1 = document.querySelector('.temp');
                var additionalText2 = document.querySelector('.descMain');
                var additionalText3 = document.querySelector('.temp_min');
                var additionalText4 = document.querySelector('.temp_max');
                var additionalText5 = document.querySelector('.desc');
                additionalText1.style.display = 'block';
                additionalText2.style.display = 'block';
                additionalText3.style.display = 'block';
                additionalText4.style.display = 'block';
                additionalText5.style.display = 'block';
            }
            return response.json();
        })
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name']; 
            var tempminValue = data['main']['temp_min'];
            var tempmaxValue = data['main']['temp_max'];
            var descValue = data['weather'][0]['main'];
            var descMainValue = data['weather'][0]['description'];

            main.innerHTML = nameValue;
            desc.innerHTML = descValue;
            temp.innerHTML = "Temperature " + tempValue + "°";
            tempmin.innerHTML = "Temp.min. - " + tempminValue + "°";
            tempmax.innerHTML = "Temp.max. - " + tempmaxValue + "°";
            descMain.innerHTML = "Desc.temp. - " + descMainValue;
        })
        .catch(err => {
            console.error(err);
        });
})