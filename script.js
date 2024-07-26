  document.addEventListener('DOMContentLoaded', function() {
            // Store the previous page's URL
            var previousPage = null;

            // Get all links in the navigation menu
            var links = document.querySelectorAll('.navbar-nav a');

            // Function to handle link clicks
            function handleLinkClick(event) {
                event.preventDefault(); // Prevent default link behavior
                var href = this.getAttribute('href'); // Get the link's href attribute
                previousPage = window.location.href; // Store the current page's URL
                // Navigate to the clicked page
                window.location.href = href;
            }

            // Attach event listeners to all links
            links.forEach(function(link) {
                link.addEventListener('click', handleLinkClick);
            });

            // Function to handle going back to the previous page
            function goBack() {
                if (previousPage) {
                    window.location.href = previousPage; // Navigate to the previous page
                } else {
                    // If there's no previous page, go to the homepage or a default page
                    window.location.href = 'index.html'; // Change 'index.html' to your homepage or default page
                }
            }


        });

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.video-gallery-slide');
    const indicators = document.querySelectorAll('.video-gallery-indicator');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('video-gallery-active');
                slide.style.left = '0';
                slide.style.opacity = '1';
            } else {
                slide.classList.remove('video-gallery-active');
                slide.style.left = '100%';
                slide.style.opacity = '0';
            }
        });

        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('video-gallery-active');
            } else {
                indicator.classList.remove('video-gallery-active');
            }
        });

        currentSlide = index;
    }

    function nextSlide() {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });

    setInterval(nextSlide, 10000);  // Change slide every 5 seconds

    // Function to play the video
    window.playVideo = function(button) {
        const video = button.closest('.video-gallery-slide').querySelector('video');
        video.play();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const smallVideos = document.querySelectorAll('.video-gallery-small-video');

    smallVideos.forEach(videoContainer => {
        const video = videoContainer.querySelector('video');
        const playButton = videoContainer.querySelector('.video-gallery-play-button');

        // Play video function
        function playVideo() {
            video.play();
            video.setAttribute('controls', 'controls'); // Show controls when playing
            playButton.style.display = 'none'; // Hide play button once video is playing
        }

        // Pause video function
        function pauseVideo() {
            video.pause();
            video.removeAttribute('controls'); // Hide controls when paused
            playButton.style.display = 'block'; // Show play button when video is paused
        }

        // Show play button on video end or pause
        video.addEventListener('ended', function() {
            playButton.style.display = 'block';
        });

        // Handle play button click
        playButton.addEventListener('click', function(event) {
            event.preventDefault();
            playVideo();
        });

        // Toggle play/pause on video click
        video.addEventListener('click', function() {
            if (video.paused) {
                playVideo();
            } else {
                pauseVideo();
            }
        });

        // Show poster on hover
        videoContainer.addEventListener('mouseenter', function() {
            video.setAttribute('poster', video.getAttribute('poster'));
        });


    });
});

    window.addEventListener('scroll', function() {
        var newsroom = document.getElementById('newsroom');
        var navbarHeight = document.querySelector('.navbar').offsetHeight;
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop >= navbarHeight) {
            newsroom.classList.add('sticky-newsroom');
        } else {
            newsroom.classList.remove('sticky-newsroom');
        }
    });

// Get the modal
    var modal = document.getElementById("boardMemberModal");

    // Get the image column
    var imageColumn = document.getElementById("imageTrigger");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the image column, open the modal
    imageColumn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

        // Get the modal
    var modal = document.getElementById("leadershipModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("leadership-close")[0];

    // Get all images
    var images = document.querySelectorAll(".leadership-image");

    // When the user clicks on an image, open the modal and set the iframe src
    images.forEach(image => {
        image.onclick = function() {
            var url = this.getAttribute('data-url');
            modal.style.display = "block";
            modal.querySelector("iframe").src = url;
        }
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        modal.querySelector("iframe").src = "";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.querySelector("iframe").src = "";
        }
    }

