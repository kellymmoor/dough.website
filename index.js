function counter() {
    const minus = document.querySelector('.number__control--minus');
    const plus = document.querySelector('.number__control--plus');
    const number = document.querySelector('.number__count');
    let currentNumber = parseInt(number.value);
    
    function add(num) {
        return num + 1;
    }

    function subtract(num) {
        return num - 1;
    }

    plus.addEventListener('click', function () {
        currentNumber = add(currentNumber);
        number.value = currentNumber;
    });
   
    minus.addEventListener('click', function () {
        currentNumber = subtract(currentNumber);
        if (currentNumber < 0) {
            currentNumber = 0;
            return;
        }
        number.value = currentNumber;
    });

}

function gallery() {
    /*
        when click on small image big image will appear 
    */
   const smallImages = document.querySelectorAll('.thumbnail__image');
   const listItems = document.querySelectorAll('.thumbnail');
   const bigImage = document.querySelector('.image-full');
   

   smallImages.forEach(function (image) {
    image.addEventListener('click', function () {
        const src = image.getAttribute('src');
        bigImage.setAttribute('src', src);
        listItems.forEach(function (item) {
            item.classList.remove('thumbnail--active');
        });
        image.parentElement.classList.add ('thumbnail--active');
        
    });
   });
}

counter();
gallery ();

