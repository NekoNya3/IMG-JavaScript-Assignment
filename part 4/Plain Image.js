var catTimer;

function startMoving(imgSrc, original) {

    setTimeout(() => {
        image = document.getElementById('move11');
        image.src = imgSrc;
    }, 200)
    setTimeout(() => {
        image = document.getElementById('move11');
        image.src = original;
    }, 400)
    setTimeout(() => {
        image = document.getElementById('move12');
        image.src = imgSrc;
    }, 600)
    setTimeout(() => {
        image = document.getElementById('move12');
        image.src = original;
    }, 800)
    setTimeout(() => {
        image = document.getElementById('move13');
        image.src = imgSrc;
    }, 1000)
    setTimeout(() => {
        image = document.getElementById('move13');
        image.src = original;
    }, 1200)
    setTimeout(() => {
        image = document.getElementById('move23');
        image.src = imgSrc;
    }, 1400)
    setTimeout(() => {
        image = document.getElementById('move23');
        image.src = original;
    }, 1600)
    setTimeout(() => {
        image = document.getElementById('move33');
        image.src = imgSrc;
    }, 1800)
    setTimeout(() => {
        image = document.getElementById('move33');
        image.src = original;
    }, 2000)
    setTimeout(() => {
        image = document.getElementById('move32');
        image.src = imgSrc;
    }, 2200)
    setTimeout(() => {
        image = document.getElementById('move32');
        image.src = original;
    }, 2400)
    setTimeout(() => {
        image = document.getElementById('move31');
        image.src = imgSrc;
    }, 2600)
    setTimeout(() => {
        image = document.getElementById('move31');
        image.src = original;
    }, 2800)
    setTimeout(() => {
        image = document.getElementById('move21');
        image.src = imgSrc;
    }, 3000)
    setTimeout(() => {
        image = document.getElementById('move21');
        image.src = original;
    }, 3200)
    catTimer = setTimeout(()=>{
        startMoving(imgSrc, original)
    },3200)
}

function stahpMoving(imgSrc, original) {
    clearTimeout(catTimer);
}