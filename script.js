$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    let formData = new FormData(this);

    // You can add any client-side validation here if needed

    // Display message below the button
    let messageElement = document.getElementById('message');
    messageElement.textContent = 'Message sent successfully!'; // Change this message as needed
    messageElement.style.color = 'green'; // Change the color if desired

    // Clear the form fields if needed
    this.reset();

    // Scroll to the message
    messageElement.scrollIntoView({ behavior: 'smooth' });
    // You can also display an alert message
    alert("This is for a demo purpose. You can contact me through below mail\nperlasivaprasad2@gmail.com \n" ); // Uncomment this line if you want to display an alert
});

    
    $("#read-more-btn").click(function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        // Toggle message visibility
        $(".message").toggle();

        // Toggle button text
        $(this).text(function(i, text) {
            return text === "Show less"  ? "Read more" : "Show less";
        });
    });
    
    
    $("#download-cv").click(function(e) {
        e.preventDefault(); // Prevent default link behavior
        // Change the URL to the location of your CV file
        var cvUrl = "Siva_Prasad_Resume.pdf"; // Update with your CV file URL
        // Create a temporary anchor element and set its href to the CV URL
        var link = document.createElement("a");
        link.href = cvUrl;
        link.download = "Siva_Prasad_CV.pdf"; // Set the desired file name
        // Trigger the click event on the anchor element to start the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Remove the temporary anchor element
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Engineer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Engineer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
