let jokeBox = document.querySelector('.joke-box');
let inputRef = document.querySelector('#inputTag');
let placeTag = document.querySelector('.placeTag');
let tempTag = document.querySelector('.tempTag');
let imageTag = document.querySelector('.imageTag');
let conditionTag = document.querySelector('.condition');


inputRef.addEventListener('keypress',function(res){
    if(res.code === 'Enter'){
        getClimate(res.target.value);
    }
})

const getClimate = async(place) => {
    let JsonData = await fetch(`http://api.weatherapi.com/v1/current.json?key=0106f784817d49fc8d461457231407&q=${place}&aqi=no`);
    let data = await JsonData.json();

    placeTag.innerText = `${data.location.name} / ${data.location.region}`;
    tempTag.innerText = data.current.temp_c;
    imageTag.setAttribute('src',data.current.condition.icon)
    conditionTag.innerText = data.current.condition.text;
}



