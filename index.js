// select all the thumbnails
const imageThumbnails = document.querySelectorAll('.thumbnail');

// select the main image
const imageFull = document.querySelector('.image-full');

// for each image in imageThumnails
imageThumbnails.forEach(function(thumbnail) {
    // grab the imnage source
    const image = thumbnail.querySelector('.thumbnail__image');
    const src = image.getAttribute('src');



    // when a user clicks the thumbnail
    thumbnail.addEventListener('click', function() {
        // swap the main source with the thumbnail source
        imageFull.setAttribute('src', src);
        // remove active class from all thumbnails
        imageThumbnails.forEach(function(thumbnail){
            thumbnail.classList.remove('thumbnail--active');
        });
        // set active class on clicked thumbnails
        this.classList.add('thumbnail--active');
    });

    
});


