$(function () {
    $('input[name="radio"]').click(function () {
        var $radio = $(this);
        if ($radio.data('waschecked') == true) {
            $radio.prop('checked', false);
            $radio.data('waschecked', false);
        } else
            $radio.data('waschecked', true);

        $radio.siblings('input[name="radio"]').data('waschecked', false);
    });
});

let blankBtnOne = document.querySelector('.selection__item-one');
let blankBtnTwo = document.querySelector('.selection__item-two');
let blankBtnThree = document.querySelector('.selection__item-three');
let blankBtnFour = document.querySelector('.selection__item-four');
let blankBtnFive = document.querySelector('.selection__item-five');
let blankBtnSix = document.querySelector('.selection__item-six');
let blankBtnSeven = document.querySelector('.selection__item-seven');
let blankBtnEight = document.querySelector('.selection__item-eight');
let blankBtnNine = document.querySelector('.selection__item-nine');

blankBtnOne.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});
blankBtnTwo.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});
blankBtnThree.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});
blankBtnFour.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});
blankBtnFive.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});
blankBtnSix.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});
blankBtnSeven.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

blankBtnEight.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

blankBtnNine.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});
