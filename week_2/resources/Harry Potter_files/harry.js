$.ajax({
    url: 'http://hp-api.herokuapp.com/api/characters',
})

.done(function (data) {
    var img1Slider = document.createElement('img');
    img1SliderParent = document.querySelector('.carousel-item');
    for(var i = 0; i< data.length; i++) {
        img1Slider.setAttribute('src' , data[i].image);
    img1Slider.setAttribute('class' , 'w-100');
    img1Slider.setAttribute('class' , 'd-block');
    img1SliderParent.appendChild(img1Slider);

    }
    

})