$(document).ready(function () {

// section-2
function section2(){
    // $('.announcement-bar__row__col').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //   });
}

    // product slider
    function hairNutrition() {
        $('#slider1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '#slider2'
        })
        $('#slider2').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '#slider1',
            centerMode: true,
            focusOnSelect: true,
            arrows: true,
            // swipeToSlide: true
        })
    }

    function clinicallyProvenRes(){
        $('.clinicallyProven-slider-container').slick({
            prevArrow: $('.clinicallyRes-prev'),
            nextArrow: $('.clinicallyRes-next'),
            slidesToShow: 1, 
            slidesToScroll: 1, 
            dots:true,
            autoplaySpeed: 3000
          });
    }

      
    // Subscription
    let lastChecked = null;
    const SubscriptionBoxDisplay = document.querySelector('.SubscriptionBoxDisplay');
    const purchaseRadio = document.querySelector('#purchaseRadio');
    const subscribeRadio = document.querySelector('#subscribeRadio');
    const mostPopular_plan = document.querySelector('.mostPopular_plan');
    const bestValue_plan = document.querySelector('.bestValue_plan');
    const popularPlan_title = document.querySelector('.popularPlan_title');
    const popularPlan_border = document.querySelector('.popularPlan_border');
    const bestVale_title = document.querySelector('.bestVale_title');
    const bestVale_border = document.querySelector('.bestVale_border');
    purchaseRadio.addEventListener('click', function (e) {
        subscribeRadio.checked = true;
        if (this === lastChecked) {
            this.checked = false;
            subscribeRadio.checked = false;
            lastChecked = null;
            popularPlan_title.style.backgroundColor = '#2E1A4A';
            popularPlan_border.style.border = '3px solid #2E1A4A';
            bestVale_title.style.backgroundColor = '#2E1A4A';
            bestVale_border.style.border = '3px solid #2E1A4A';
            SubscriptionBoxDisplay.style.display = 'none';
        } else {
            lastChecked = this;
            popularPlan_title.style.backgroundColor = '#F4B4A4';
            popularPlan_border.style.border = '3px solid #F4B4A4';
            SubscriptionBoxDisplay.style.display = 'block';
        }
    });


    mostPopular_plan.addEventListener('click', function () {
        popularPlan_title.style.backgroundColor = '#F4B4A4';
        popularPlan_border.style.border = '3px solid #F4B4A4';
        if (popularPlan_title.style.backgroundColor === 'rgb(244, 180, 164)') {
            popularPlan_title.style.backgroundColor = '#F4B4A4';
            popularPlan_border.style.border = '3px solid #F4B4A4';
            bestVale_title.style.backgroundColor = '#2E1A4A';
            bestVale_border.style.border = '3px solid #2E1A4A';
        }
    })
    bestValue_plan.addEventListener('click', function () {
        if (popularPlan_title.style.backgroundColor === 'rgb(244, 180, 164)') {
            popularPlan_title.style.backgroundColor = '#2E1A4A';
            popularPlan_border.style.border = '3px solid #2E1A4A';
            bestVale_title.style.backgroundColor = '#F4B4A4';
            bestVale_border.style.border = '3px solid #F4B4A4';
        }
    })

    // accordion
    $('.accordion-list > li > .answer').hide();
    $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });
    section2();
    hairNutrition();
    clinicallyProvenRes();
});