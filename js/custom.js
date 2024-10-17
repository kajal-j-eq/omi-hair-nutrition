$(document).ready(function () {

    // S-2 uspa-slider
    if ($('.js-uspaSlider')?.length > 0) {
        $('.js-uspaSlider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    // S-3 product slider
    if ($('.js-product-slider-for')?.length > 0) {
        $('.js-product-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-product-slider-nav'
        });
    }

    if ($('.js-product-slider-nav')?.length > 0) {
        $('.js-product-slider-nav').slick({
            prevArrow: $('.product-prev'),
            nextArrow: $('.product-next'),
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.js-product-slider-for',
            dots: true,
            arrows: true,
            focusOnSelect: true
        });
    }
    // S-3 Subscription
    const mostPopular_plan = document.querySelector('.mostPopular_plan');
    const bestValue_plan = document.querySelector('.bestValue_plan');
    const popularPlan_title = document.querySelector('.popularPlan_title');
    const popularPlan_border = document.querySelector('.popularPlan_border');
    const bestVale_title = document.querySelector('.bestVale_title');
    const bestVale_border = document.querySelector('.bestVale_border');
    const subscribe_radio = document.querySelector('#subscribeID');
    const purchase_radio = document.querySelector('#purchaseID');
    const hideData = document.querySelectorAll('.hideDetails');
    if (subscribe_radio.checked) {
        popularPlan_title.style.backgroundColor = '#F4B4A4';
        popularPlan_border.style.border = '3px solid #F4B4A4';
    }

    subscribe_radio?.addEventListener('click', function () {
        hideData?.forEach(data => {
            data.style.display = "flex"
        })
    })
    purchase_radio?.addEventListener('click', function () {
        hideData?.forEach(data => {
            data.style.display = "none"
        })
    });

    mostPopular_plan.addEventListener('click', function () {
        let option = document.getElementById('option1');
        option.checked = true;
        popularPlan_title.style.backgroundColor = '#F4B4A4';
        popularPlan_border.style.border = '3px solid #F4B4A4';
        if (popularPlan_title.style.backgroundColor === 'rgb(244, 180, 164)') {
            bestVale_title.style.backgroundColor = '#2E1A4A';
            bestVale_border.style.border = '3px solid #2E1A4A';
        }
    });
    bestValue_plan.addEventListener('click', function () {
        bestVale_title.style.backgroundColor = '#F4B4A4';
        let option = document.getElementById('option2');
        option.checked = true;
        bestVale_border.style.border = '3px solid #F4B4A4';
        if (bestVale_title.style.backgroundColor === 'rgb(244, 180, 164)') {
            popularPlan_title.style.backgroundColor = '#2E1A4A';
            popularPlan_border.style.border = '3px solid #2E1A4A';
        }
    });
    let productForm = document.querySelector('.dummyCheck');
    productForm.addEventListener('click', (e) => {
        e.preventDefault();
        let selectedradio = document.querySelector('input[name="productPurchase"]:checked');
        if (selectedradio) {
            if (selectedradio.value === 'subscribe') {
                let option = document.querySelector('input[name="options"]:checked');
            }
        }
    })

    // S-3 accordion
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

    // S-7 Clinically Proven Res
    if ($('.js-CP-Slider-Container')?.length > 0) {
        $('.js-CP-Slider-Container').slick({
            prevArrow: $('.clinicallyRes-prev'),
            nextArrow: $('.clinicallyRes-next'),
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplaySpeed: 3000
        });
    }
    // S-10 scientifically proven
    if ($('.js-supplement-slider')?.length > 0) {
        $('.js-supplement-slider').slick({
            infinite: true,
            autoplay: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }
    // js-uspaBottom-slider
    if ($('.js-uspaBottom-slider')?.length > 0) {
        $('.js-uspaBottom-slider').slick({
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    centerMode: true,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    $('.matchHeight-regrowTitle').matchHeight();
    $('.matchHeight-regrowP').matchHeight();
    // js-regrow hair-slider
    if ($('.js-regrowingHair__slider-container')?.length > 0) {
        const $regrowSlider = $('.js-regrowingHair__slider-container').slick({
            prevArrow: $('.regrowHair-slider-prev'),
            nextArrow: $('.regrowHair-slider-next'),
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    const faqHeader = document.querySelectorAll(".js-faq-acc-header");
    faqHeader.forEach(header => {
        header.addEventListener("click", () => {
            const currentlyActiveHeader = document.querySelector(".js-faq-acc-header.active");
            if (currentlyActiveHeader && currentlyActiveHeader !== header) {
                currentlyActiveHeader.classList.remove("active");
                currentlyActiveHeader.nextElementSibling.style.maxHeight = 0;
            }

            header.classList.toggle("active");
            const faqBody = header.nextElementSibling;
            if (header.classList.contains("active")) {
                faqBody.style.maxHeight = faqBody.scrollHeight + "px";
            } else {
                faqBody.style.maxHeight = 0;
            }
        });
    });

    // video section
    let regrowHairVideoPoster = document.querySelectorAll('.js-video-poster');
    let regrowHairVideo = document.querySelectorAll('.js-video');
    let imgSections = document.querySelectorAll('.imgSection');
    imgSections?.forEach((item, index) => {
        let currentPoster = regrowHairVideoPoster[index];
        let currentVideo = regrowHairVideo[index];
        item?.addEventListener('click', function () {
            currentPoster.style.display === 'none';
            currentVideo.play();
            currentVideo.style.display = 'block';
        });
        currentVideo.addEventListener('ended', () => {
            currentPoster.style.display = 'block';
            currentVideo.style.display = 'none';
        })
    });


});