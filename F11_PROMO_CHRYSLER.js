'use strict';
const promoJS = (function () {

	let functionality, general, dealership, website, data, currentOffers, dealershipCampaign, dynamicContent, trimmedPageName;

	functionality = {
		'indexHero': false,
		'oemLP': true,
		'oemLPnew': false,
		'epriceNew': true,
		'epriceUsed': false,
		'countdownClock': false,
		'mobileBanner': true,
		'vlpStickyBanner': false
	};

	general = {
		'currentTime': new Date(),
		'expiryDate': new Date('August 31, 2018 19:59:59')
	};

	dealership = {
		'franchise': DDC.dataLayer.site.franchises[0],
		//'name': 'Wellington Motors'
		'name': DDC.dataLayer.dealership.dealershipName
	};

	//Trim pagename

	let fullPageName = DDC.dataLayer.page.pageInfo.pageName;

	if (fullPageName !== 'INDEX') {
		trimmedPageName = fullPageName.substr(0, fullPageName.length - 2);
	}

	website = {
		'pageName': fullPageName !== 'INDEX' ? trimmedPageName : fullPageName,
		'layoutType': DDC.dataLayer.page.attributes.layoutType
	};

	let chryslerOffers = ['SITEBUILDER_NATIONAL_OFFERS_CHRYSLER', 'SITEBUILDER_NATIONAL_OFFERS_DODGE', 'SITEBUILDER_NATIONAL_OFFERS_JEEP', 'SITEBUILDER_NATIONAL_OFFERS_RAM']

	website.currentOffer = chryslerOffers.indexOf(website.pageName);

	currentOffers = [];

	data = {
		'ePrice': {
			'new': 'Get Monthly Quote',
			'used': null,
		},
		'oem': [{
			'make': 'chrysler',
			'offers': {
				'tagline': 'Get up to $7,500 In TOTAL DISCOUNTS * On select 2018 Pacifica models',
				'landingPageUrl': '/promo/national-offers-chrysler.htm',
				'filterdVLP': '/new-inventory/index.htm?search=&compositeType=new&year=2018&make=Chrysler&make=Pacifica', 
				'desktopLP': '#',
				'desktopWB': '#',
				'desktopVLP': '#',
				'mobileWB': '#',
				'mobileLP': '#',
				'searchParam': '?search=&compositeType=new&year=2018&make=Chrysler&make=Pacifica',
				'expiryDate': new Date('August 31, 2018 19:59:59'),
				'initialDisclaimer': '<p>Total discounts of up to $7,500 are offered on most 2018 Pacifica models, (excludes Hybrid models) and consist of $6,000 in Consumer Cash and $1,500 in Bonus Cash. Consumer Cash Discounts are deducted before taxes. Bonus Cash are deducted after taxes. This offer cannot be combined with 0% financing. See your dealer for details.</p><p>Vehicles may not be exactly as shown. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. The Power of Zero Sales Event offers apply to retail deliveries of selected new and unused models purchased from August 1, 2018 to August 31, 2018 from participating retailers. Retailer order/trade may be necessary. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. See dealer for details. Some conditions apply.</p><p>0.00% purchase financing for up to 72 months available to qualified customers on approved credit through Royal Bank of Canada, Scotiabank and TD Auto Finance on select 2018 Chrysler models.  Offer ends August 31, 2018.</p>',
				'remainingDisclaimer': ''
			}
		}, {
			'make': 'dodge',
			'offers': {
				'tagline': 'Get up to $12,850 In TOTAL DISCOUNTS * On select 2018 Grand Caravan models',
				'landingPageUrl': '/promo/national-offers-dodge.htm',
				'filterdVLP': '/new-inventory/index.htm?search=&compositeType=new&year=2018&make=Dodge&make=Grand+Caravan',
				'desktopLP': '#',
				'desktopWB': '#',
				'desktopVLP': '#',
				'mobileWB': '#',
				'mobileLP': '#',
				'searchParam': '?search=&compositeType=new&year=2018&make=Dodge&make=Grand+Caravan',
				'expiryDate': new Date('August 31, 2018 19:59:59'),
				'initialDisclaimer': '<p>A maximum of $12,850 in total discounts is available on select 2018 Dodge Grand Caravan models (excluding CVP models) and consist of $9,500 in Consumer Cash, $2,500 in Ultimate Family Program Bonus Cash, and a No Charge Ultimate Family Uconnect Hands-free Group worth $850 available on select SXT models (excludes non SXT trims). Consumer Cash Discounts are applied before taxes and Bonus Cash Discounts are applied after taxes. Consumer Cash Discounts are applied before taxes. This offer cannot be combined with 0% financing. See your dealer for details.</p><p>Vehicles may not be exactly as shown. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. The Power of Zero Sales Event offers apply to retail deliveries of selected new and unused models purchased from August 1, 2018 to August 31, 2018 from participating retailers. Retailer order/trade may be necessary. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. See dealer for details. Some conditions apply.</p>',
				'remainingDisclaimer': ''
			}
		}, {
			'make': 'jeep',
			'offers': {
				'tagline': 'Get up to $7,000 In TOTAL DISCOUNTS * On select 2019 Cherokee models',
				'landingPageUrl': '/promo/national-offers-jeep.htm',
				'filterdVLP': '/new-inventory/index.htm?search=&year=2019&make=Jeep&model=New+Cherokee',
				'desktopLP': '#',
				'desktopWB': '#',
				'desktopVLP': '#',
				'mobileWB': '#',
				'mobileLP': '#',
				'searchParam': '?search=&year=2019&make=Jeep&model=New+Cherokee',
				'expiryDate': new Date('August 31, 2018 19:59:59'),
				'initialDisclaimer': '<p>A maximum of $7,000 in total discounts is available on select 2019 Jeep Cherokee KL models and consist of $3,500 in Consumer Cash, $2,500 in Bonus Cash and a No Charge package worth up to $1,000 (Max $1,000 packages available on select Trailhawk and Limited models, excludes Sport and Overland Models). Consumer Cash Discounts are applied before taxes and Bonus Cash Discounts are applied after taxes. This offer cannot be combined with 0% financing. See your dealer for details.</p><p>Vehicles may not be exactly as shown. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. The Power of Zero Sales Event offers apply to retail deliveries of selected new and unused models purchased from August 1, 2018 to August 31, 2018 from participating retailers. Retailer order/trade may be necessary. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. See dealer for details. Some conditions apply.</p>',
				'remainingDisclaimer': ''
			}
		}, {
			'make': 'ram',
			'offers': {
				'tagline': 'Get up to $16,640 In CASH DISCOUNTS * On select 2018 RAM 1500 models',
				'landingPageUrl': '/promo/national-offers-ram.htm',
				'filterdVLP': '/new-inventory/index.htm?year=2018&make=Ram&model=1500',
				'desktopLP': '#',
				'desktopWB': '#',
				'desktopVLP': '#',
				'mobileWB': '#',
				'mobileLP': '#',
				'searchParam': '?search=&compositeType=new&year=2018&make=Ram&model=1500',
				'expiryDate': new Date('August 31, 2018 19:59:59'),
				'initialDisclaimer': '<p>A maximum of $16,640 in total discounts is available on select 2018 RAM 1500 DS models (excludes Regular Cab) and consist of $11,750 in Consumer Cash, $1,500 in Loyalty/Conquest Bonus Cash and a No Charge package worth up to $3,390. Max $3,390 No Charge Katkzin Leather Special available on SLT Crew Cab 4x4 models with the 3.0L EcoDiesel V6 w/8-speed (excludes non SLT trims). Consumer Cash Discounts are applied before taxes and Bonus Cash Discounts are applied after taxes. This offer cannot be combined with 0% financing. See your dealer for details.</p><p>Vehicles may not be exactly as shown. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. The Power of Zero Sales Event offers apply to retail deliveries of selected new and unused models purchased from August 1, 2018 to August 31, 2018 from participating retailers. Retailer order/trade may be necessary. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. See dealer for details. Some conditions apply.</p>',
				'remainingDisclaimer': ''
			}
		}],
		'campaign': [{
			'dealerships': ['Dealership Name'],
			'franchises': ['make'],
			'importance': {
				'indexPosition': 1,
				'replace': false
			},
			'offers': {
				'tagline': 'VW Campaign',
				'headline': '<h5>Get Up To $2,000 Bonus Cash On Select 2018 Models<br><br>Finance Rates From 0% For Up To 36 Months</h5>',
				'landingPageUrl': '/promo/national-offers.htm',
				'filterdVLP': '/new-inventory/index.htm?year=2018&model=Tiguan',
				'desktopLPstandard': 'https://actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_940x_LP.jpg',
				'desktopLPturbo': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_1200x_LP.jpg',
				'mobileLP': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_600x_LP.jpg',
				'mobileWB': 'http://actrader.wpengine.com/wp-content/trader/F11_PROMO/IMG/VW_OEM_480x140_MWB.jpg',
				'offerParam': '',
				'disclaimer': '',
				'expiryDate': new Date('April 2, 2018 19:59:59')
			}
		}],
				'dealership': {
		//			'Wellington Motors': [{
		//				'importance': {
		//					'indexPosition': 0,
		//					'category': 'oem',
		//					'replace': true
		//				},
		//				'offers': {
		//					'tagline': '2017 RAM 1500 Now 30% Off MSRP - That\'s Up To $19,340 In Total Discounts On Select Models OAC',
		//					'headline': '<h5>2017 RAM 1500 Now 30% Off MSRP - That\'s Up To $19,340 In Total Discounts On Select Models OAC</h5>',
		//					'landingPageUrl': '/promo/national-offers.htm',
		//					'filterdVLP': '/certified-inventory/index.htm?year=2017&make=Ram&model=1500',
		//					'desktopLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0048/c36d06149c245e3fc924555be7fcdf90x.jpg',
		//					'desktopWB': 'https://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0791/de66e72b2f5265d6aa4393d3e3ee1ff4x.jpg',
		//					'desktopVLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0350/a960578565413eb000d099a27d44aab5x.jpg',
		//					'mobileLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1884/c995a577de2b85b5753207283db6579cx.jpg',
		//					'mobileWB': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0762/406b3290221e2818b76c0823ae940b35x.jpg',
		//					'searchParam': null,
		//					'disclaimer': '',
		//					'expiryDate': new Date('April 3, 2018 19:59:59')
		//				}
		//			}, {
		//				'importance': {
		//					'indexPosition': 2,
		//					'category': 'oem',
		//					'replace': true
		//				},
		//				'offers': {
		//					'tagline': 'Up To 35% Off On Select 2017 Dodge Grand Caravans',
		//					'headline': '<h5>Up To 35% Off On Select 2017 Dodge Grand Caravans</h5>',
		//					'landingPageUrl': '/promo/national-offers.htm',
		//					'filterdVLP': '/new-inventory/index.htm?year=2017&make=Dodge&model=Grand+Caravan',
		//					'desktopLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1394/6293904fa5fb8a5532fa848303d24839x.jpg',
		//					'desktopWB': 'https://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0487/ebed07b941d8b31e3851db233f9dc289x.jpg',
		//					'desktopVLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1971/00f82974a2b138fecbc123ae8956cfaax.jpg',
		//					'mobileLP': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/0189/9c96e247e8248f0082dd23314c0d992ex.jpg',
		//					'mobileWB': 'http://pictures.dealer.com/w/wellingtonmotorsguelph2tc/1116/dbf0094ddb680fb4ba2dfde612e1fd22x.jpg',
		//					'searchParam': null,
		//					'disclaimer': '',
		//					'expiryDate': new Date('April 3, 2018 19:59:59')
		//				}
		//			}],
		//			'Ponoka Dodge Chrysler Jeep Ram': [{
		//				'importance': {
		//					'indexPosition': 0,
		//					'category': 'oem',
		//					'replace': true
		//				},
		//				'offers': {
		//					'tagline': '2018 RAM 1500 Now 30% Off MSRP - That\'s Up To $21,834 In Total Discounts On Select Models OAC',
		//					'headline': '<h5>2018 RAM 1500 Now 30% Off MSRP - That\'s Up To $21,834 In Total Discounts On Select Models OAC</h5>',
		//					'landingPageUrl': '/promo/national-offers.htm',
		//					'filterdVLP': '/new-inventory/index.htm?year=2018&make=Ram&model=1500',
		//					'desktopLP': '',
		//					'desktopWB': '',
		//					'desktopVLP': 'https://pictures.dealer.com/p/ponokachryslerjeeptc/0343/b9ffd8dd0aa01aedd31d9c43164b469cx.jpg',
		//					'mobileLP': '',
		//					'mobileWB': 'http://pictures.dealer.com/p/ponokachryslerjeeptc/0352/8213074ced9334d6e170e9150b28cf80x.jpg',
		//					'searchParam': '',
		//					'disclaimer': '',
		//					'expiryDate': new Date('August 3, 2018 19:59:59')
		//				}
		//			}],
		//
				}
	};

	// TURN OFF LANDING PAGE

	if (general.currentTime > general.expiryDate) {

		functionality.oemLP = false;

	} else {

		// LOAD CSS

		// CACHE BUSTER
		let d = new Date();
		let n = d.getTime();

		jQuery('head').append('<link rel="stylesheet" type="text/css" href="//actrader.wpengine.com/wp-content/trader/F11_PROMO/JS/F11_PROMO_CHRYSLER.css?nocache=' + n + '">');

		jQuery(".content-oem-program").show();

	}

	// ADD MOBILE BANNER CONTAINER

	if (functionality.mobileBanner === true  && website.layoutType === "mobile") {

		jQuery('.ddc-content.inventory-search-form').after('<div id="mobile-pre-links-list"><div id="mobileSlideshow"></div></div');

	}

	// START EPRICE LOGIC
	if (functionality.epriceNew === true) {

		if (website.layoutType === "desktop" && website.pageName === "AUTO_NEW_DETAILS") {
			jQuery('.vdp .links-list .btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>Get Monthly Quote');

		} else if (website.layoutType === "mobile" && website.pageName === "AUTO_NEW_DETAILS") {

			jQuery('.dialog[data-href*="/eprice-form.htm"]').text(data.ePrice.new);

		} else if (website.pageName === "INVENTORY_LISTING_DEFAULT_AUTO_NEW") {
			jQuery('.dialog[data-href*="/eprice-form.htm"]').text(data.ePrice.new);
		}

	} else if (functionality.epriceUsed === true) {
		
		if (website.layoutType === "desktop" && website.pageName === "AUTO_NEW_DETAILS") {
			jQuery('.vdp .links-list .btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>Get Monthly Quote');

		} else if (website.layoutType === "mobile" && website.pageName === "AUTO_NEW_DETAILS") {

			jQuery('.dialog[data-href*="/eprice-form.htm"]').text(data.ePrice.used);

		} else if (website.pageName === "INVENTORY_LISTING_DEFAULT_AUTO_NEW") {
			jQuery('.dialog[data-href*="/eprice-form.htm"]').text(data.ePrice.used);
		}

	}

	// ADD CLASS TO LANDING PAGE



	if (jQuery('.ddc-container.main').width() > 961) {


		// TURBO
		jQuery('.chrysler.alias-sitebuilder-national-offers-1 body').addClass('chrysler-oem-program-lp-turbo');

		jQuery('.chrysler.alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program-lp-turbo');

	} else if (jQuery('.main').width() < 500) {

		//NON-TURBO
		jQuery('.chrysler.alias-sitebuilder-national-offers-1 body').addClass('chrysler-oem-program-lp-evolve');

		jQuery('.chrysler.alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program-lp-evolve');

	} else {

		//NON-TURBO
		jQuery('.chrysler.alias-sitebuilder-national-offers-1 body').addClass('chrysler-oem-program-lp');

		jQuery('.chrysler.alias-sitebuilder-promo-national-offers-1 body').addClass('chrysler-oem-program-lp');

	}

	// POPULATE CURRENT OFFERS ARRAY
	function addToCurrentOffers(offerArray) {

		for (let i = 0; i < offerArray.length; i++) {

			var currentOffer = offerArray[i].offers;

			var offerExpiryDate = offerArray[i].offers.expiryDate;

			if (general.currentTime < offerExpiryDate) {

				currentOffers.push(currentOffer);

			}

		}

	}

	addToCurrentOffers(data.oem);

	// CHECK FRANCHISE AND DEALERSHIP TARGETING
	function checkTargeting(targetArray, targetType, targetDealership) {

		for (let i = 0; i < targetArray[targetType].length; i++) {

			let result = targetArray[targetType].indexOf(targetDealership);

			if (result > -1) {

				var indexPosition = targetArray.importance.indexPosition;

				var replaceOffer = targetArray.importance.replace;

				var expiryDate = targetArray.offers.expiryDate;

				if (general.currentTime < expiryDate) {

					currentOffers.splice(indexPosition, replaceOffer, targetArray.offers);

				}

				return true;

			}
		}

	}

	// SET CAMPAIGN OFFERS
	// for (let i = 0; i < data.campaign.length; i++) {

	// 	var checkMatched = checkTargeting(data.campaign[i], 'dealerships', dealership.name);

	// 	if (checkMatched === undefined) {

	// 		checkTargeting(data.campaign[i], 'franchises', dealership.franchise);

	// 	}

	// }


	// if (data.dealership[dealership.name] !== undefined) {


	// 	data.dealership[dealership.name].forEach(function (currentOffer, index) {

	// 		let indexPosition = currentOffer.importance.indexPosition;

	// 		let replaceOffer = currentOffer.importance.replace;

	// 		let expiryDate = currentOffer.offers.expiryDate;

	// 		if (general.currentTime < expiryDate) {

	// 			currentOffers.splice(indexPosition, replaceOffer, currentOffer.offers);

	// 		}

	// 		if (currentOffer.importance.category == 'oem') {

	// 			data.oem.splice(indexPosition, replaceOffer, currentOffer)

	// 		}

	// 	});

	// }


	// GET URL PARAM

	// CONTENT PERSONALIZATION JS 
	function getParameterByName(e, a) {
		a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
		var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
			r = n.exec(a);
		return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null;
	}
	dynamicContent = getParameterByName("offer");


	//        for(let i = 0; i < currentOffers.length; i++){
	//                    
	//            let currentOffers = currentOffers[i].offerParam;
	//                    
	//            console.log(currentOffers);
	//                    
	//        }

	//+++++++++++++ LANDING PAGE CONTENT PERSONALIZATION

	if (functionality.oemLP === true) {


		if (website.layoutType === "desktop" && (website.pageName === "SITEBUILDER_NATIONAL_OFFERS_1" || website.pageName === "SITEBUILDER_PROMO_NATIONAL_OFFERS_1")) {

			//Desktop JS

			// SINGLE OFFER LANDING PAGE
			jQuery('.main').prepend('<div id="default-content" class="dynamic-content"><a href="' + data.oem[0].offers.landingPageUrl + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + data.oem[0].offers.desktopLP + '" id="desktop-hero" alt="' + data.oem[0].offers.tagline + '" title="View Inventory"></a></div>');

			if (dynamicContent !== null) {

				data.oem.forEach(function (offer) {

					if (dynamicContent === offer.offers.offerParam) {
						jQuery("#desktop-hero").attr("src", offer.offers.desktopLP);
						jQuery("#default-content a").attr("href", offer.offers.landingPageUrl);
						jQuery("#default-content img").attr("alt", offer.offers.tagline);

					}

				});

			}

		} else if (website.layoutType === "mobile" && (website.pageName === "SITEBUILDER_NATIONAL_OFFERS_1" || website.pageName === "SITEBUILDER_PROMO_NATIONAL_OFFERS_1")) {

			//Mobile JS	

			// SINGLE OFFER LANDING PAGE

			//jQuery('.content-oem-program .oem-body-mobile').append('<div id="SlideshowContainer"><div id="newMobileLP"></div></div>');	

			jQuery('.content-oem-program .oem-body-mobile').append('<div id="default-content" class="dynamic-content"><a href="' + data.oem[0].offers.landingPageUrl + '" class="dynamic-link"  title="View Inventory" id="ext-gen2150"><img src="' + data.oem[0].offers.mobileLP + '" id="mobile-hero" alt="' + data.oem[0].offers.tagline + '" title="View Inventory"></a></div>');


			if (dynamicContent !== null) {

				data.oem.forEach(function (offer) {

					if (dynamicContent === offer.offers.offerParam) {
						jQuery("#mobile-hero").attr("src", offer.offers.mobileLP);
						jQuery("#default-content a").attr("href", offer.offers.landingPageUrl);
						jQuery("#default-content img").attr("alt", offer.offers.tagline);

					}

				});

			}

		}

		// DISCLAIMER

		// jQuery('.content-oem-program.footer').append('<div class="disclaimer"><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap">' + data.disclaimers.oem.initialDisclaimer + '<span class="read-more-target">' + data.disclaimers.oem.remainingDisclaimer + '</span></p><label for="post-1" class="read-more-trigger"></label></div>');

		if (website.currentOffer > -1 && website.pageName === chryslerOffers[website.currentOffer]) {

			jQuery('.ddc-content.inventory-listing-default').append('<a name="disclaimer"></a><div class="disclaimer"><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap">' + data.oem[website.currentOffer].offers.initialDisclaimer + '<span class="read-more-target">' + data.oem[website.currentOffer].offers.remainingDisclaimer + '</span></p><label for="post-1" class="read-more-trigger"></label>');

			console.log('success');

		} else {
			
			console.log('website.currentOffer ', website.currentOffer);
			console.log('chryslerOffers[website.currentOffer] ', chryslerOffers[website.currentOffer]);
			console.log('website.pageName ', website.pageName);
		
		}

		// SET OFFER FORM FIELD
		jQuery('.ddc-content.contact-form.type-1 input[data-id="Offer"]').val(dynamicContent ? dynamicContent : 'not specified');


	}


	if (functionality.mobileBanner === true && ((website.layoutType === "mobile") && (website.pageName === "INDEX"))) {

		for (var i = 0; i < currentOffers.length; i++) {

			$('div#mobileSlideshow').append('<a href="' + currentOffers[i].landingPageUrl + '" title="' + currentOffers[i].tagline + '" onclick="dataLayer.push({\'event\': \'trackEvent\',\'eventCategory\': \'***Slideshow Click\', \'eventAction\': \'' + currentOffers[i].landingPageUrl + '\', \'eventLabel\' : \'Position ' + (i + 1) + '\',\'eventValue\': \'undefined\' });"><img src="' + currentOffers[i].mobileWB + '" alt="' + currentOffers[i].tagline + '" /></a>');

		}

		$('div#mobileSlideshow a:first-of-type').addClass('active');

		function cycleImages() {
			var $active = $('#mobileSlideshow .active');
			var $next = ($active.next().length > 0) ? $active.next() : $('#mobileSlideshow a:first');
			$next.css('z-index', 2); //move the next image up the pile
			$active.fadeOut(1500, function () { //fade out the top image
				$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
				$next.css('z-index', 3).addClass('active'); //make the next image the top one
			});
		}

		//$(document).ready(function () {
		// run every 3s

		if ($('div#mobileSlideshow a').length > 1) {

			setInterval(cycleImages, 3000);
		}

		//});

	}


	//+++++++++++++END MOBILE BANNER LOGIC


	function test() {
		console.log('test');
	}

	return {
		data: data,
		offerParam: dynamicContent,
		currentOffers: currentOffers
	};


})();