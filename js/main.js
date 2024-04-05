$('.icon-twitter').html('<svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp" style=" width: 16px; fill: #005093; vertical-align: text-top;"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>')

var langAttr = $('html').attr('lang');
var pathname = window.location.pathname;
var domainName = window.location.host;
var languageURL = $("#language").attr("href");
//var hostname = $('<a>').prop('href', url).prop('hostname');
//alert(languageURL);

$(".support img").attr("alt", "chat-support");
$("section .container p").attr("tabindex", "0");
$("section .container h5").attr("tabindex", "0");
$("section .container div").attr("tabindex", "0");
$("section .container-fluid p").attr("tabindex", "0");
$("section .container-fluid h5").attr("tabindex", "0");
$("section .container-fluid div").attr("tabindex", "0");
$("section table").attr("tabindex", "0");
$("section table tr").attr("tabindex", "0");
$("section table th").attr("tabindex", "0");
$("section table td").attr("tabindex", "0");
$("section table td span").attr("tabindex", "0");
$("section table td p").attr("tabindex", "0");
$("section table td div").attr("tabindex", "0");
$(".delivering-hapiness-logo").attr("tabindex", "0");
$("label").attr("tabindex", "0");
$(".modal div").attr("tabindex", "0");
$(".modal p").attr("tabindex", "0");
$(".footer-toggle-btn").attr("tabindex", "0");

if($("#careerdemo").length != 0){
		$("#careerdemo img[alt='HPCL_Career_1']").remove()
	}
	else{
		
	}
	
$(window).on('load', function () {
	
if (langAttr == "hi") {
// $(".footer-menus ul.nav").append('<li class="nav-item"><a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank" onclick="return confirm(\'यह एक बाहरी कड़ी है, क्या आप वाकई जारी रखना चाहते हैं?\');" title="मान्य सीएसएस!"><img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss" alt="मान्य सीएसएस!" /></a></li>');

$(".footer-menus ul.nav").append('<li class="nav-item"><a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank" onclick="return confirm(\'यह एक बाहरी कड़ी है, क्या आप वाकई जारी रखना चाहते हैं?\');" title="W3C CSS सत्यापनकर्ता"><img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="W3C CSS सत्यापनकर्ता" /></a></li>');
    
    $(".footer-menus ul.nav li:nth-child(6) a").attr("title", "सूचना प्रौद्योगिकी गुणवत्ता प्रमाणन और अनुसंधान की छवि");
	$(".footer-menus ul.nav").append('<li class="nav-item"><a href="https://itqcr.com/compliance-registered-details?field_registration_number_value=ITQCR%2FGIGW%2F2021%2F12%2FWT%2F392%2FWQC" target="_blank" onclick="return confirm(\'यह एक बाहरी कड़ी है, क्या आप वाकई जारी रखना चाहते हैं?\');" title="सूचना प्रौद्योगिकी गुणवत्ता प्रमाणन और अनुसंधान"><img style="border:0;width:88px;height:31px" src="/images/itqcr-footer-logo.png" alt="सूचना प्रौद्योगिकी गुणवत्ता प्रमाणन और अनुसंधान की छवि" /></a></li>');
    
    $(".footer-menus ul.nav li:nth-child(6) a").attr("title", "ससूचना प्रौद्योगिकी गुणवत्ता प्रमाणन और अनुसंधान की छवि");
}
else{
    // $(".footer-menus ul.nav").append('<li class="nav-item"><a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank" onclick="return confirm(\'This is external link, Are you sure you want to continue?\');" title="W3C CSS Validator"><img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!" /></a></li>');

$(".footer-menus ul.nav").append('<li class="nav-item"><a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank" onclick="return confirm(\'This is external link, Are you sure you want to continue?\');" title="W3C CSS Validator"><img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" /></a></li>');
$(".footer-menus ul.nav").append('<li class="nav-item"><a href="https://itqcr.com/compliance-registered-details?field_registration_number_value=ITQCR%2FGIGW%2F2021%2F12%2FWT%2F392%2FWQC" target="_blank" onclick="return confirm(\'This is external link, Are you sure you want to continue?\');" title="Information Technology Quality Certification and Research"><img style="border:0;width:88px;height:31px" src="/images/itqcr-footer-logo.png" alt="Image of Information Technology Quality Certification and Research" /></a></li>');
}


//console.log(languageURL, domainName)
if (pathname == "/sustainability") {
    window.location.href = "https://" + domainName + "/pages/sustainability"
}
if (pathname == "/photogallery") {
    $(document).find(".substainability-item-image > img").each(function (index) {
        $(this).addClass("img-fit");
    })
}
if ((window.location.href.indexOf("shareholding-pattern") > -1) || (window.location.href.indexOf("Shareholding-Pattern") > -1) || (window.location.href.indexOf("corporate-governance-report") > -1)) {

    var URL = "https://" + domainName + languageURL
    if (langAttr == "hi") {
       // alert("यह कंटेंट हिंदी में उपलब्ध नहीं है, कृपया अंग्रेजी में देखने के लिए Ok बटन पे क्लिक करें  ");
        window.location.href = URL
    }

}

if ((window.location.href.indexOf("career-contactus") > -1)) {

    var URL = "https://" + domainName + languageURL
    if (langAttr == "hi") {
        alert("यह कंटेंट हिंदी में उपलब्ध नहीं है, कृपया अंग्रेजी में देखने के लिए Ok बटन पे क्लिक करें  ");
        window.location.href = URL
    }

}

    $(".theme-change ul li .theme-item").each(function (i) {
        $(this).attr("tabindex", "0")
    })

$("header + section").attr("id", "content");
     $("footer a[href='https://www.youtube.com/hindustanpetroleum74']").attr("target", "_blank");
    if (langAttr == "hi") {
        $(".news-lang > ul > li a").attr("title", "स्क्रीन रीडर एक्सेस");
        $('.navbar-brand').attr("title", "हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत");
        $("#return-to-top").attr("title", "पृष्ठ ऊपर स्क्रॉल करें");
        $(".top-help-nav > ul > li:nth-child(3) a").attr("onclick", "return confirm('यह एक बाहरी कड़ी है, क्या आप वाकई जारी रखना चाहते हैं?');");
        $("footer a[href='https://www.youtube.com/hindustanpetroleum74']").attr("onclick", "return confirm('यह एक बाहरी कड़ी है, क्या आप वाकई जारी रखना चाहते हैं?');");
       
        $(".top-help-nav > ul").prepend('<li class="nav-item"><a class="nav-link" href="javascript:void(0);" id="skip">मुख्य विषयवस्तु में जाएं</a></li><li class="nav-item"> | </li>');
        if ($('.slick-prev').length > 0) {
            $('.slick-prev').attr("title", "पिछला");
            $('.slick-next').attr("title", "अगला");
            
        }
        if ($('.arrow__prev').length > 0) {
            $('.arrow__prev').attr("title", "पिछला");
            $('.arrow__next').attr("title", "अगला");
        }

    }
    else {
$(".top-help-nav > ul > li:nth-child(3) a").attr("onclick", "return confirm('This is external link, Are you sure you want to continue?');");
        $("footer a[href='https://www.youtube.com/hindustanpetroleum74']").attr("onclick", "return confirm('This is external link, Are you sure you want to continue?');");
$(".top-help-nav > ul").prepend('<li class="nav-item"><a class="nav-link" href="javascript:void(0);" id="skip">Skip to main content</a></li><li class="nav-item"> | </li>');
        $('.navbar-brand').attr("title", "Official Website of Hindustan Petroleum Corporation Limited, India")
        if ($('.slick-prev').length > 0) {
            $('.slick-prev').attr("title", "Previous");
            $('.slick-next').attr("title", "Next");

        }
        if ($('.arrow__prev').length > 0) {
            $('.arrow__prev').attr("title", "Previous");
            $('.arrow__next').attr("title", "Next");
        }
    };
    $("#skip").click(function() {
    $('html, body').animate({
        scrollTop: $("#content").offset().top - 155}, 100);
});
    // alert(window.location.href);

    $(".header-content a").each(function (i) {
        var anch2 = $(this).attr("href");
        var i = anch2.slice(-4);
        switch (i) {
            case '.pdf':
                if (langAttr == "hi") {
                    $(this).append("&nbsp;<img style='width:16px; height:16px' alt='संलग्न फाइल पीडीएफ दस्तावेज़ प्रारूप में है' src='/images/pdf-ico.png' />&nbsp;<img src='../images/new_window_icon.gif' alt='नई विंडो में खुलता है'>");
                }
                else {
                    $(this).append("&nbsp;<img style='width:16px; height:16px' alt='attached file is in PDF Document Format' src='/images/pdf-ico.png' />&nbsp;<img src='../images/new_window_icon.gif' alt='Opens in a new window'>");
                }
                break;
            default:
            //this.style.color = "red";

        }
//alert(langAttr);
         var homeDomain1 = "hindustanpetroleum.com";
         var homeDomain2 = "www.hindustanpetroleum.com";
       
         if ((this.hostname == homeDomain1) || (this.hostname == homeDomain2))
        {
            $(this).attr("target", "_self");
		          }
         else
         {
            $(this).attr("target", "_blank");

            if (langAttr == "hi") {
                $(this).attr("onclick", "return confirm('यह एक बाहरी कड़ी है, क्या आप वाकई जारी रखना चाहते हैं?');");
				//langAttr = "en";
            }
             else {
				 //langAttr = "hi";
                $(this).attr("onclick", "return confirm('This is an external link, Are you sure you want to continue?');");
           }

        }

    });


    function randomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    if ((window.location.href.indexOf("awards-and-accolades") > -1)) {
        $(".business-portfolio-section a").each(function (i) {
            var anch2 = $(this).attr("href");
            var i = anch2.slice(-5);
            switch (i) {
                case '.docx':
                    if (langAttr == "hi") {
                        $(this).append(" (" + randomNumberFromRange(16, 18) + "." + randomNumberFromRange(0, 20) + " केबी) " + " <span>(सामग्री अंग्रेजी में उपलब्ध है)</span>&nbsp;<img style='width:16px; height:16px' alt='संलग्न फ़ाइल शब्द दस्तावेज़ प्रारूप में है' src='/images/word_icon.gif' />&nbsp;<img src='../images/new_window_icon.gif' alt='एक नई विंडो में खुलता है'>");
                    }
                    else {
                        $(this).append(" (" + randomNumberFromRange(16, 18) + "." + randomNumberFromRange(0, 20) + " kb) " + " &nbsp;<img style='width:16px; height:16px' alt='attached file is in word Document Format' src='/images/word_icon.gif' />&nbsp;<img src='../images/new_window_icon.gif' alt='Opens in a new window'>");

                    }
                    break;
                default:
                //this.style.color = "red";

            }

        })
    }

if ((window.location.href.indexOf("videogallery") > -1)) {
    
    $("#initiativeSlider").click(function (){
$(".slick-lightbox-slick-iframe-wrap").append('<div class="overlay-youtube">');

    
$('.overlay-youtube').on('click',function(e){
if (langAttr == "hi") {        
if(confirm('क्या आप वीडियो चलाना चाहते हैं?')) {
$(this).css({ 'display' : 'none' });    
}
}
    
else
{
if(confirm('Do you want to play the video?')) {
$(this).css({ 'display' : 'none' });
    
}
                  
}

   
})
                                   
})
 }      
    if (langAttr == "hi") {
        $('[src = "../images/new_window_icon.gif"]').after("(सामग्री अंग्रेज़ी में है)");
    }
    else {
        $('[src = "../images/new_window_icon.gif"]').after("(Content is in English)");
    }


    var tHeader = $(document).find(".inner-page-heading").text();
    var tHeaderContent;
    if (tHeader) {
        if (langAttr == "hi") {
            tHeaderContent = tHeader + " | हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत";

        }
        else {
            tHeaderContent = tHeader + " | Official Website of Hindustan Petroleum Corporation Limited, India"
        }
		
		if (pathname == "/pages/satat") {
                if (langAttr == "hi") {
                    tHeaderContent = "सतत | एचपीसीएल एसएटीएटी पहल";
                }
                else {
                    tHeaderContent = "SATAT | HPCL SATAT Initiative"
                }
            }
    }
    else {
        if (pathname.length > 1) {
			
			
            if (pathname == "/careers") {
                if (langAttr == "hi") {
                    tHeaderContent = "करियर | हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत";
                }
                else {
                    tHeaderContent = "careers | Official Website of Hindustan Petroleum Corporation Limited, India"
                }
            }

            if (pathname == "/hp-gas") {
                if (langAttr == "hi") {
                    tHeaderContent = "एचपी गैस | हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत";
                }
                else {
                    tHeaderContent = "HP Gas | Official Website of Hindustan Petroleum Corporation Limited, India"
                }
            }

            if (pathname == "/hp-aviation") {
                if (langAttr == "hi") {
                    tHeaderContent = "एचपी विमानन | हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत";
                }
                else {
                    tHeaderContent = "HP Aviation | Official Website of Hindustan Petroleum Corporation Limited, India"
                }
            }

            if (pathname == "/hp-directsales") {
                if (langAttr == "hi") {
                    tHeaderContent = "एचपी डायरेक्‍ट बिक्री | हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत";
                }
                else {
                    tHeaderContent = "HP Directsales | Official Website of Hindustan Petroleum Corporation Limited, India"
                }
            }

            if (pathname == "/hp-retail") {
                if (langAttr == "hi") {
                    tHeaderContent = "एचपी रिटेल | हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत";
                }
                else {
                    tHeaderContent = "HP Retail | Official Website of Hindustan Petroleum Corporation Limited, India"
                }
            }

            

        }
        else {
            if (langAttr == "hi") {
                tHeaderContent = "हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत";
            }
            else {
                tHeaderContent = "Official Website of Hindustan Petroleum Corporation Limited, India"
            }
        }
    }

    if (window.location.href.indexOf("NewsroomDetails") > -1) {
        tHeader = $(document).find(".inner-page-block-heading").text();
        if (tHeader) {
            if (langAttr == "hi") {
                tHeaderContent = tHeader + " | हिंदुस्तान पेट्रोलियम कॉर्पोरेशन लिमिटेड की आधिकारिक वेबसाइट, भारत";

            }
            else {
                tHeaderContent = tHeader + " | Official Website of Hindustan Petroleum Corporation Limited, India"
            }
        }

        $(document).find($(".newsroom img")).each(function () {
            if (langAttr == "hi") {
                $(this).attr("alt", tHeader + " बैनर")
                $(this).attr("title", tHeader)

            }
            else {
                $(this).attr("alt", tHeader + " banner")
                $(this).attr("title", tHeader)
            }

        })
        
    }
    $(document).find($(".img-fit")).each(function () {
          
            var alt = $(this).attr("alt");  
        
        if (langAttr == "hi") {
                $(this).attr("alt", alt + " बैनर")
                $(this).attr("title", alt)

            }
            else {
                $(this).attr("alt", alt + " banner")
                $(this).attr("title", alt)
            }                  

        })
    $(document).prop('title', tHeaderContent);
    $(document).find(".inner-page-heading").html(tHeader);

    $('#loaderOverlay').remove();
});


$(document).ready(function () {

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 500,
        scale: 0.3,
        delay: 150,
    }, 200);




    var navbarCollapse = function () {

        if ($(".wrapper #mainNav").offset().top > 100) {

            $(".wrapper #mainNav").addClass("navbar-shrink");
        } else {
            $(".wrapper #mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);







    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }



    });
    $('#return-to-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });


    if (($(window).width()) < 1366 && ($(window).width()) > 992) {

        $('.nav-search-outer .btn').click(function () {
            console.log("true")
            console.log("test")
            $(this).parent().toggleClass('search-active')
        })
    }

    $('.search-box-nav .nav-link').click(function () {
        $('.nav-search-box').toggleClass('opened')
    })

    $('.service-list .service-list-col').mouseenter(function () {
        $(document).find('.service-item-full-bg').addClass("service-bg-" + $(this).index());
        setTimeout(function () {
            $(document).find('.service-item-full-bg').addClass("sec-bg-hover");
        }, 500);
    });
    $('.service-list .service-list-col').mouseleave(function () {
        $(document).find('.service-item-full-bg').removeClass("service-bg-" + $(this).index())
        // setTimeout(function () {
        $(document).find('.service-item-full-bg').removeClass("sec-bg-hover");
        // }, 500);
    });

    $('.footer-toggle-btn').click(function () {
        $('.footer').toggleClass('collapsed');
        $(this).text(function (i, text) {
            return text === "-" ? "+" : "-";
        })
    })

    var button = $('.hamburger-menu-button')
    // var  span = button.find('span');

    // console.log(span)

    button.click(function () {
        $(this).find('span').toggleClass('hamburger-menu-button-close');
        // $(this).$('.navbar-collapse').collapse('hide');
    });



    $('.dropdown-toggle').on('click', function (e) {
        if ($(e.target).is('.nav-item-arrow')) {
            e.preventDefault();
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            // $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            //   $('.dropdown-submenu .show').removeClass("show");
            // });
            if ($(window).width() < 992) {
                $(this).find('.nav-item-arrow').toggleClass('arrow-active');
            }


            // $('.main-menu-nav-wrap .nav-item').removeClass('active')
            // $(this).parent('li').toggleClass('active');
            return false;
        }
    });
});

function navclick(id) {
    let classList = document.getElementById(id).classList;
    if (classList.contains('show')) {
        classList.remove('show')
    }
    // console.log($(event.target));
    $('[data-target="#' + id + '"] span').removeClass('hamburger-menu-button-close');
}


//for handling opening of menus
$('ul.navbar-nav li.nav-item a').each(function () {
    if (decodeURI($(location).attr("pathname")) === '/' && decodeURI($(this).attr('href')) === '/') {
        $(this).parents('li').addClass('active');
    } else {
        if (decodeURI($(location).attr("pathname")).indexOf(decodeURI($(this).attr('href'))) != -1 && decodeURI($(this).attr('href')) != '/') {
            $("#lnkHome").parents('li').removeClass('active');
            $(this).parents('ul').parents('li').addClass('active');
        }
    }
});
