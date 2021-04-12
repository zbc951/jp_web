//上排選單
$(function(){
    $('.mid a').click(function(){
        $(this).closest('li').addClass('active');
        $($(this).closest('li')).siblings().removeClass('active')
    })
})
//登入/登出
$(function(){
	$('.loginbtn').click(function(){
		$('.account').removeClass('display');
		$('.loginstyle').addClass('display');
	})
	$('.logout').click(function(){
		$('.account').addClass('display');
		$('.loginstyle').removeClass('display');
	})
})
//彈窗
$(function(){
	$('.lost').click(function(){
		$('.filter,.noacc').addClass('display');
	})
	$('.cancelbtn,.accbtn').click(function(){
		$('.filter,.noacc,.transWallet,.noCard').removeClass('display');
	})
	$('.line_BNG a').click(function(){
		$('.filter,.transWallet.BNG').addClass('display');
	})
	$('.line_PLS a').click(function(){
		$('.filter,.transWallet.PLS').addClass('display');
	})
	$('.line_PT a').click(function(){
		$('.filter,.transWallet.PT').addClass('display');
	})
	$('.line_SP a').click(function(){
		$('.filter,.transWallet.SP').addClass('display');
	})
	$('.line_CQ9 a').click(function(){
		$('.filter,.transWallet.CQ9').addClass('display');
	})
})
//圖片輪播
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
	})
})
//主區塊hover
$(function(){
	$('.imgbox a').hover(function(){
		$(this).closest('div').toggleClass('hover')
	})
	$('.img_pub').hover(function(){
		$(this).closest('div').toggleClass('hover_pub')
	})
	$('.img_soc').hover(function(){
		$(this).closest('div').toggleClass('hover_soc')
	})
	$('.img_cat').hover(function(){
		$(this).closest('div').toggleClass('hover_cat')
	})
	$('.img_lot').hover(function(){
		$(this).closest('div').toggleClass('hover_lot')
	})
	$('.img_shark').hover(function(){
		$(this).closest('div').toggleClass('hover_shark')
	})
	$('.img_dice').hover(function(){
		$(this).closest('div').toggleClass('hover_dice')
	})
})
//小按鈕的小按鈕
$(function(){
	var handle = null;
	$('.cellphone').mouseover(function(){
		$(this).addClass('active')
		$('.custom').removeClass('active')
		$('.cellphonebox').addClass('display')
		$('.custombox').removeClass('display')
		clearTimeout(handle)
	}).mouseout(function(){
		handle = setTimeout(function(){
			$('.cellphone').removeClass('active')
			$('.cellphonebox').removeClass('display')
		},500)
	})
	$('.cellphonebox a').mouseover(function(){
		clearTimeout(handle)
	}).mouseout(function(){
		setTimeout(function(){
			handle = setTimeout(function(){
				$('.cellphone').removeClass('active')
				$('.cellphonebox').removeClass('display')
			},500)
		})
	})
	$('.custom').mouseover(function(){
		$(this).addClass('active')
		$('.cellphone').removeClass('active')
		$('.custombox').addClass('display')
		$('.cellphonebox').removeClass('display')
		clearTimeout(handle)
	}).mouseout(function(){
		handle = setTimeout(function(){
			$('.custom').removeClass('active')
			$('.custombox').removeClass('display')
		},500)
	})
	$('.custombox a').mouseover(function(){
		clearTimeout(handle)
	}).mouseout(function(){
		setTimeout(function(){
			handle = setTimeout(function(){
				$('.custom').removeClass('active')
				$('.custombox').removeClass('display')
			},500)
		})
	})
	$('.arrow').mouseover(function(){
		clearTimeout(handle)
	})
})
//廠商LOGO輪播
$(function(){
	var partnerAni = function(){
		setTimeout(function(){
			$('.partner li:nth-of-type(1)').addClass('turn');
			$('.partner li:nth-of-type(5)').removeClass('turn');
		},0)
		setTimeout(function(){
			$('.partner li:nth-of-type(2)').addClass('turn');
			$('.partner li:nth-of-type(1)').removeClass('turn');
		},1500)
		setTimeout(function(){
			$('.partner li:nth-of-type(3)').addClass('turn');
			$('.partner li:nth-of-type(2)').removeClass('turn');
		},3000)
		setTimeout(function(){
			$('.partner li:nth-of-type(4)').addClass('turn');
			$('.partner li:nth-of-type(3)').removeClass('turn');
		},4500)
		setTimeout(function(){
			$('.partner li:nth-of-type(5)').addClass('turn');
			$('.partner li:nth-of-type(4)').removeClass('turn');
		},6000)
		setTimeout(function(){
			partnerAni();
		},7500)
	}
	partnerAni();
})
//回到頂端按鈕
$(function(){
	$(window).scroll(function () {
		var scrollVal = $(this).scrollTop();
		if(scrollVal > 1){
				$(".gotop").fadeIn('1000');
		} else{
				$(".gotop").fadeOut('1000')
		};
	})
	$(".gotop").click(function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
		$body.delay('0').animate({
				scrollTop:0
		},500);
	})
})
//mainbox效果
$(function(){
	$('.main_icon a').hover(function(){
		$(this).children('button').toggleClass('display');
	})
})
//slot頁切換
$(function(){
	$('.morebtn').click(function(){
		$('.game,.gamebox').addClass('turn');
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
		$body.delay('0').animate({
				scrollTop:0
		},200);
	})
	$('.BNG').click(function(){
		$('.partnerbox button:nth-of-type(1)').addClass('active');
		$('.partnerbox button:nth-of-type(1)').siblings().removeClass('active');
	})
	$('.PS').click(function(){
		$('.partnerbox button:nth-of-type(2)').addClass('active');
		$('.partnerbox button:nth-of-type(2)').siblings().removeClass('active');
	})
	$('.PT').click(function(){
		$('.partnerbox button:nth-of-type(3)').addClass('active');
		$('.partnerbox button:nth-of-type(3)').siblings().removeClass('active');
	})
	$('.SP').click(function(){
		$('.partnerbox button:nth-of-type(4)').addClass('active');
		$('.partnerbox button:nth-of-type(4)').siblings().removeClass('active');
	})
	$('.CQ9').click(function(){
		$('.partnerbox button:nth-of-type(5)').addClass('active');
		$('.partnerbox button:nth-of-type(5)').siblings().removeClass('active');
	})
	$('.partnerbox button').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})
	$('.searchbtn').click(function(){
		$('.slot,.gamebox').removeClass('turn');
	})
})
//會員中心按鈕切換
$(function(){
	$('.btnbox button').click(function(){
		$(this).removeClass('turn');
		$(this).siblings().addClass('turn');
	})
	$('.btnbox button:nth-of-type(1)').click(function(){
		$('.platform,.infor,.presents,.messages,.audit').addClass('display');
		$('.freeWallet,.account,.goods,.posts,.actWallet,.point,.sell').removeClass('display');
		$('.inforWindow .box').css('height','680px');
	})
	$('.btnbox button:nth-of-type(2)').click(function(){
		$('.platform,.infor,.presents,.messages,.audit,.point,.sell').removeClass('display');
		$('.freeWallet,.account,.goods,.posts,.actWallet').addClass('display');
		$('.inforWindow .box').css('height','395px');
	})
	$('.btnbox button:nth-of-type(3)').click(function(){
		$('.point').addClass('display');
		$('.audit,.actWallet,.sell').removeClass('display');
	})
	$('.btnbox button:nth-of-type(4)').click(function(){
		$('.sell').addClass('display');
		$('.audit,.actWallet,.point').removeClass('display');
	})
})
//fixside
$(function(){
	$('.windowBtn').click(function(){
		$(this).closest('div').toggleClass('display');
	})
})
//rowbtn
$(function(){
	$('.messages .rowbtn p:nth-of-type(1)').click(function(){
		$('.messages .rowbtn div').css('left','0%');
	})
	$('.messages .rowbtn p:nth-of-type(2)').click(function(){
		$('.messages .rowbtn div').css('left','50%');
	})
	$('.posts .rowbtn p:nth-of-type(1)').click(function(){
		$('.posts .rowbtn div').css('left','0px');
	})
	$('.posts .rowbtn p:nth-of-type(2)').click(function(){
		$('.posts .rowbtn div').css('left','120px');
	})
	$('.posts .rowbtn p:nth-of-type(3)').click(function(){
		$('.posts .rowbtn div').css('left','240px');
	})
})
//rule
$(function(){
	$('.rule .btnWindow h1').click(function(){
		$(this).closest('div').addClass('open');
		$(this).closest('div').siblings().removeClass('open');
	})
	$('.btnWindow li').click(function(){
		$('.btnWindow li').removeClass('active');
		$(this).addClass('active');
	})
	$('.btnWindow .accountBtn').click(function(){
		$('.rule .account').addClass('display');
		$('.rule .account').siblings().removeClass('display');
	})
	$('.btnWindow .GDBtn').click(function(){
		$('.rule .GD').addClass('display');
		$('.rule .GD').siblings().removeClass('display');
	})
})
//discount/activeWallet
$(function(){
	$('.discount_mainbox .leftside button').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})
	$('.openPage1').click(function(){
		$('.page1').addClass('display');
		$('.discount_mainbox,.activeWallet_mainbox').removeClass('display');
	})
	$('.discount_innerpage .contentbox .title button').click(function(){
		$('.discount_innerpage').removeClass('display');
		$('.discount_mainbox').addClass('display');
		$('.discount article').removeClass('inner');
	})
	$('.activeWallet_innerpage .contentBox .title button').click(function(){
		$('.activeWallet_innerpage').removeClass('display');
		$('.activeWallet_mainbox').addClass('display');
	})
	$('.discount_mainbox .imgBox').click(function(){
		$('.discount article').addClass('inner');
	})
})
//mail
$(function(){
	$('.mail').click(function(){
		$(this).addClass('active')
	})
})
//creditcard
$(function(){
	$('.cardWindow .card1').click(function(){
		$('.cardName1').addClass('display');
		$('.cardName1').siblings().removeClass('display');
		$('.reCardName').addClass('display');
		$('.addCardName').removeClass('display');
	})
	$('.addCardBtn').click(function(){
		$('.addCard').siblings().removeClass('display');
		$('.addCardName').addClass('display');
		$('.reCardName').removeClass('display');
		$('.addCard').addClass('display');
	})
})
//innerWallet
$(function(){
	$('.walletBtn').hover(function(){
		$('.innerWallet').toggleClass('display');
	})
})
//betting line open
$(function(){
	$('.line button').click(function(){
		$(this).closest('ul').toggleClass('open');
	})
})
//IE背景抖動問題
$(function(){
	if(navigator.userAgent.match(/Trident\/7\./)) {
		document.body.addEventListener("mousewheel", function() {
			event.preventDefault();
			var wd = event.wheelDelta;
			var csp = window.pageYOffset;
			window.scrollTo(0, csp - wd);
		});
	}
})