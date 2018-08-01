'use strict';

const chryslerNationalOffers = ["/promo/national-offers-chrysler.htm", "/promo/national-offers-dodge.htm", "/promo/national-offers-jeep.htm", "/promo/national-offers-ram.htm"];
const currentUrl = location.pathname;

const promoJSdata = (function () {

	let functionality, general, dealership, website, data, currentOffers, dealershipCampaign, dynamicContent;

	functionality = {
		'lpActive': true,
		'lpDisclaimer': true,
		'mobileBanner': true,
		'ePrice': true,
	};

	general = {
		'currentTime': new Date(),
		'expiryDate': new Date('July 31, 2018 19:59:59')
	};

	dealership = {
		//'name': 'Wellington Motors'
	};

	website = {
		'protocol': window.location.protocol,
		'domain': window.location.hostname,
		'pageUrl': window.location.href,
		'fullUrl': null,
		'currentOffer': null,
	};

	currentOffers = [];

	data = {
		'oem': [{
			'make': 'chrysler',
			'offers': {
				'tagline': 'Get 0% FINANCING * For up to 72 months + Get up to $4,000 In TOTAL DISCOUNTS * On most 2018 Pacifica models or Get 0% FINANCING * For up to 60 months + Get up to $7,850 In TOTAL DISCOUNTS * On select 2018 Grand Caravan models',
				'landingPageUrl': '/promo/national-offers-chrysler.htm',
				'filterdVLP': '/new-inventory/index.htm?search=Pacifica+or+Caravan&compositeType=new&year=2018', //'/new-inventory/index.htm?make=Chrysler&model=Pacifica'
				'desktopLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1200x300_July-OEM_LP-VANS.jpg',
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1920x520_July-OEM_WB-VANS.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1200x148_July-OEM_VLP-VANS.jpg',
				'mobileWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_960x520_July-OEM_MB-VANS.jpg',
				'mobileLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_960x520_July-OEM_MB-VANS.jpg',
				'searchParam': '?search=Pacifica+or+Caravan&compositeType=new&year=2018', //'?search=&compositeType=new&make=Chrysler&model=Pacifica'
				'expiryDate': new Date('July 31, 2018 19:59:59'),
				'initialDisclaimer': '<p>Vehicles may not be exactly as shown. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. The Power of Zero Sales Event offers apply to retail deliveries of selected new and unused models purchased from July 4, 2018 to July 31, 2018 from participating retailers. Retailer order/trade may be necessary. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. See dealer for details. Some conditions apply.</p><p>0.00% purchase financing for up to 72 months available to qualified customers on approved credit through Royal Bank of Canada, Scotiabank and TD Auto Finance on select 2018 Chrysler models.  Example on a 2018 Chrysler Pacifica L: $34,998, with a $0 down payment, financed at 0.00% for 72 months equals 312 weekly payments of $112.17; cost of borrowing of $0 and a total obligation of $34,997.04. Dealer may sell for less. Offer ends July 31, 2018.</p>',
				'remainingDisclaimer': ''
			}
		}, {
			'make': 'dodge',
			'offers': {
				'tagline': 'Get 0% FINANCING * For up to 72 months + Get up to $4,000 In TOTAL DISCOUNTS * On most 2018 Pacifica models or Get 0% FINANCING * For up to 60 months + Get up to $7,850 In TOTAL DISCOUNTS * On select 2018 Grand Caravan models',
				'landingPageUrl': '/promo/national-offers-dodge.htm',
				'filterdVLP': '/new-inventory/index.htm?search=Pacifica+or+Caravan&compositeType=new&year=2018',
				'desktopLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1200x300_July-OEM_LP-VANS.jpg',
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1920x520_July-OEM_WB-VANS.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1200x148_July-OEM_VLP-VANS.jpg',
				'mobileWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_960x520_July-OEM_MB-VANS.jpg',
				'mobileLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_960x520_July-OEM_MB-VANS.jpg',
				'searchParam': '?search=Pacifica+or+Caravan&compositeType=new&year=2018', //'?search=&compositeType=new&make=Dodge&model=Grand+Caravan'
				'expiryDate': new Date('July 31, 2018 19:59:59'),
				'initialDisclaimer': 'Vehicles may not be exactly as shown. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. The Power of Zero Sales Event offers apply to retail deliveries of selected new and unused models purchased from July 4, 2018 to July 31, 2018 from participating retailers. Retailer order/trade may be necessary. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. See dealer for details. Some conditions apply.',
				'remainingDisclaimer': ''
			}
		}, {
			'make': 'jeep',
			'offers': {
				'tagline': 'Get 0% FINANCING * for up to 36 months on all 2018 Wrangler models or Get 0% FINANCING* For up to 72 months + Get up to $3,500 In TOTAL DISCOUNTS * On select 2019 Cherokee models ',
				'landingPageUrl': '/promo/national-offers-jeep.htm',
				'filterdVLP': '/new-inventory/index.htm?search=&make=Jeep&model=Cherokee&model=Grand+Cherokee&model=Wrangler&model=Wrangler+JK',
				'desktopLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1200x300_July-OEM_LP-JEEP.jpg',
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1920x520_July-OEM_WB-JEEP.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1200x148_July-OEM_VLP-JEEP.jpg',
				'mobileWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_960x520_July-OEM_MB-JEEP.jpg',
				'mobileLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_960x520_July-OEM_MB-JEEP.jpg',
				'searchParam': '?search=&make=Jeep&model=Cherokee&model=Wrangler&model=Wrangler+JK', //'?search=&compositeType=new&make=Jeep&model=Cherokee'
				'expiryDate': new Date('July 31, 2018 19:59:59'),
				'initialDisclaimer': '<p>Vehicles may not be exactly as shown. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. The Power of Zero Sales Event offers apply to retail deliveries of selected new and unused models purchased from July 4, 2018 to July 31, 2018 from participating retailers. Retailer order/trade may be necessary. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. See dealer for details. Some conditions apply.',
				'remainingDisclaimer': ''
			}
		}, {
			'make': 'ram',
			'offers': {
				'tagline': 'Get 0% FINANCING * For up to 36 months + Get up to $5,000 In CASH DISCOUNTS * On select 2019 RAM 1500 models or Get 0% FINANCING * For up to 72 months + Get up to $11,890 In CASH DISCOUNTS * On select 2018 RAM 1500 models',
				'landingPageUrl': '/promo/national-offers-ram.htm',
				'filterdVLP': '/new-inventory/index.htm?make=Ram&model=1500',
				'desktopLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1200x300_July-OEM_LP-RAM.jpg',
				'desktopWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1920x520_July-OEM_WB-RAM.jpg',
				'desktopVLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_1200x148_July-OEM_VLP-RAM.jpg',
				'mobileWB': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_960x520_July-OEM_MB-RAM.jpg',
				'mobileLP': '//actrader.acmediaworks.com/wp-content/trader/F11_PROMO/IMG/_FCA_960x520_July-OEM_MB-RAM.jpg',
				'searchParam': '?search=&compositeType=new&model=1500',
				'expiryDate': new Date('July 31, 2018 19:59:59'),
				'initialDisclaimer': '<p>Vehicles may not be exactly as shown. All dealer rebates, discounts, factory incentives, prices, and interest rates are subject to change or end without notice as new retail incentive programs are announced. The Power of Zero Sales Event offers apply to retail deliveries of selected new and unused models purchased from July 4, 2018 to July 31, 2018 from participating retailers. Retailer order/trade may be necessary. Although we make every effort to ensure the accuracy of the information and offers on this website, we cannot guarantee that the site will be error-free. See dealer for details. Some conditions apply.</p>',
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
			}]
			//		'dealership': {
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
			//					'expiryDate': new Date('July 3, 2018 19:59:59')
			//				}
			//			}],
			//
			//		}
	};


	return {
		functionality: functionality,
		general: general,
		dealership: dealership,
		website: website,
		data: data,
		currentOffers: currentOffers
	};


})();

if (chryslerNationalOffers.includes(currentUrl) === true && window.location.search === '') {
	pageRedirect();
}

if (document.body.clientWidth < 400) {

	promoJSlogic(promoJSdata);
	
	changeEprice(promoJSdata);

} else {

	toggleBody();

	document.onreadystatechange = function () {
		if (document.readyState === 'interactive') {
			// document ready
			promoJSlogic(promoJSdata);

		} else if (document.readyState === 'complete') {
			changeEprice(promoJSdata);
		}
	};

}

function pageRedirect() {

	var protocol = window.location.protocol;
	var domain = window.location.hostname;
	var path = window.location.pathname;

	var url = window.location.href;
	var capturemake = url.split("-");
	var trimmedMake = capturemake[2].split(".")[0];

	promoJSdata.data.oem.forEach(function (offer) {

		if (window.location.href === protocol + '//' + domain + path && offer.make === trimmedMake) {

			toggleBody('inline');

			window.location.href = protocol + '//' + domain + path + offer.offers.searchParam;

		}

	});

}

function toggleBody() {

	if (chryslerNationalOffers.includes(currentUrl) === true && window.location.search === '') {

		document.body.style.display = 'none';

	} else if (chryslerNationalOffers.includes(currentUrl) === true && window.location.search !== '') {
		document.body.style.display = 'block';
	}
}

function changeEprice(db) {
	
	//+++++++++++++START EPRICE LOGIC

			if (db.functionality.ePrice === true && db.website.layoutType === "desktop" && DDC.dataLayer.page.pageInfo.pageName === "AUTO_NEW_DETAILS") {
				jQuery('.vdp .links-list .btn[data-href*="/eprice-form.htm"]').html('<i class="ddc-icon ddc-icon-banknote"></i>Get Monthly Quote');

			} else if (db.functionality.ePrice === true && db.website.layoutType === "mobile" && DDC.dataLayer.page.pageInfo.pageName === "AUTO_NEW_DETAILS") {

				jQuery('.dialog[data-href*="/eprice-form.htm"]').text('Get Monthly Quote');

			} else if (db.functionality.ePrice === true && DDC.dataLayer.page.pageInfo.pageName === "INVENTORY_LISTING_DEFAULT_AUTO_NEW" ) {
				jQuery('.dialog[data-href*="/eprice-form.htm"]').text('Get Monthly Quote');
			}

}

	//+++++++++++++END EPRICE LOGIC




function promoJSlogic(db) {

	promoJSdata.dealership = {
		'franchise': DDC.dataLayer.site.franchises[0],
		'name': DDC.dataLayer.dealership.dealershipName
	};

	//Trim pagename
	let fullPageName = DDC.dataLayer.page.pageInfo.pageName;

	let trimmedPageName;

	if (fullPageName !== 'INDEX') {
		trimmedPageName = fullPageName.substr(0, fullPageName.length - 2);
	}

	promoJSdata.website = {
		'pageName': fullPageName !== 'INDEX' ? trimmedPageName : fullPageName,
		'layoutType': DDC.dataLayer.page.attributes.layoutType
	};

	// TURN OFF LANDING PAGE

	if (db.general.currentTime > db.general.expiryDate) {

		db.functionality.lpActive = false;

	} else {

		// LOAD CSS

		// CACHE BUSTER
		let d = new Date();
		let n = d.getTime();

		jQuery('head').append('<link rel="stylesheet" type="text/css" href="//actrader.wpengine.com/wp-content/trader/F11_PROMO/JS/F11_PROMO_CHRYSLER_4x.css?nocache=' + n + '">');

		jQuery(".content-oem-program").show();

	}


	

	// ADD MOBILE BANNER CONTAINER

	if (db.functionality.mobileBanner === true && ((db.website.layoutType === "mobile") && (db.website.pageName === "INDEX"))) {

		jQuery('.ddc-content.inventory-search-form').after('<div id="mobile-pre-links-list"><div id="mobileSlideshow"></div></div');

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

			if (db.general.currentTime < offerExpiryDate) {

				db.currentOffers.push(currentOffer);

			}

		}

	}

	addToCurrentOffers(db.data.oem);

	// CHECK FRANCHISE AND DEALERSHIP TARGETING
	//			function checkTargeting(targetArray, targetType, targetDealership) {
	//
	//				for (let i = 0; i < targetArray[targetType].length; i++) {
	//
	//					let result = targetArray[targetType].indexOf(targetDealership);
	//
	//					if (result > -1) {
	//
	//						var indexPosition = targetArray.importance.indexPosition;
	//
	//						var replaceOffer = targetArray.importance.replace;
	//
	//						var expiryDate = targetArray.offers.expiryDate;
	//
	//						if (db.general.currentTime < expiryDate) {
	//
	//							db.currentOffers.splice(indexPosition, replaceOffer, targetArray.offers);
	//
	//						}
	//
	//						return true;
	//
	//					}
	//				}
	//
	//			}

	// SET CAMPAIGN OFFERS
	//			for (let i = 0; i < db.data.campaign.length; i++) {
	//
	//				var checkMatched = checkTargeting(db.data.campaign[i], 'dealerships', db.dealership.name);
	//
	//				if (checkMatched === undefined) {
	//
	//					checkTargeting(db.data.campaign[i], 'franchises', db.dealership.franchise);
	//
	//				}
	//
	//			}




	//			if (db.data.dealership[db.dealership.name] !== undefined) {
	//
	//
	//				db.data.dealership[db.dealership.name].forEach(function (currentOffer) {
	//
	//					let indexPosition = db.currentOffer.importance.indexPosition;
	//
	//					let replaceOffer = db.currentOffer.importance.replace;
	//
	//					let expiryDate = db.currentOffer.offers.expiryDate;
	//
	//					if (db.general.currentTime < expiryDate) {
	//
	//						db.currentOffers.splice(indexPosition, replaceOffer, db.currentOffer.offers);
	//
	//					}
	//
	//					if (currentOffer.importance.category === 'oem') {
	//
	//						db.data.oem.splice(indexPosition, replaceOffer, currentOffer);
	//
	//					}
	//
	//				});
	//
	//			}


	if (db.functionality.lpActive === true) {

		// BANNER


		let chryslerOffers = ['SITEBUILDER_NATIONAL_OFFERS_CHRYSLER', 'SITEBUILDER_NATIONAL_OFFERS_DODGE', 'SITEBUILDER_NATIONAL_OFFERS_JEEP', 'SITEBUILDER_NATIONAL_OFFERS_RAM']
		db.website.currentOffer = chryslerOffers.indexOf(db.website.pageName);

		if (db.website.currentOffer > -1) {

			db.website.fullUrl = db.website.protocol + '//' + db.website.domain + db.data.oem[db.website.currentOffer].offers.landingPageUrl + db.data.oem[db.website.currentOffer].offers.searchParam;

		}

		chryslerOffers[db.website.currentOffer];

		if (db.website.layoutType === "desktop" && db.website.pageName === chryslerOffers[db.website.currentOffer]) {

			//Desktop JS

			// SINGLE OFFER LANDING PAGE
			//jQuery('.oem-body-desktop .oem-graphic').append('<img src="' + data.oem[website.currentOffer].offers.desktopLP + '" id="desktop-hero" alt="' + data.oem[website.currentOffer].offers.tagline + '" title="View Inventory">');

			jQuery('.ddc-content.inventory-listing-default').prepend('<img src="' + db.data.oem[db.website.currentOffer].offers.desktopLP + '" id="desktop-hero" alt="' + db.data.oem[db.website.currentOffer].offers.tagline + '" title="View Inventory"><div align="right"><a class="legal" href="#disclaimer">Legal</a></div>');




		} else if (db.website.layoutType === "mobile" && db.website.pageName === chryslerOffers[db.website.currentOffer]) {

			//Mobile JS	

			// SINGLE OFFER LANDING PAGE	

			//jQuery('.oem-body-mobile .oem-graphic').append('<img src="' + data.oem[website.currentOffer].offers.mobileLP + '" id="mobile-hero" alt="' + data.oem[website.currentOffer].offers.tagline + '" title="View Inventory">');

			jQuery('.ddc-content.inventory-listing-default').prepend('<img src="' + db.data.oem[db.website.currentOffer].offers.mobileLP + '" id="mobile-hero" alt="' + db.data.oem[db.website.currentOffer].offers.tagline + '" title="View Inventory"><div align="right"><a class="legal" href="#disclaimer">Legal</a></div>');

		}

		// LP FILTERING

		// DESKTOP - SEE GLOBAL DESKTOP HEAD AND TURBO GLOBAL DESKTOP HEAD

		// MOBILE

		//            if (website.layoutType === "mobile" && window.location.href === website.protocol + '//' + website.domain + data.oem[website.currentOffer].offers.landingPageUrl ) {
		//              window.location.href = website.protocol + '//' + website.domain + data.oem[website.currentOffer].offers.landingPageUrl + data.oem[website.currentOffer].offers.searchParam;
		//            }



		// DISCLAIMER

		//jQuery('.content-oem-program.footer').append('<div class="disclaimer"><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap">' + data.oem[website.currentOffer].offers.initialDisclaimer + '<span class="read-more-target">' + data.oem[website.currentOffer].offers.remainingDisclaimer + '</span></p><label for="post-1" class="read-more-trigger"></label></div>');

		if (db.website.currentOffer > -1 && db.website.pageName === chryslerOffers[db.website.currentOffer]) {

			jQuery('.ddc-content.inventory-listing-default').append('<a name="disclaimer"></a><div class="disclaimer"><input type="checkbox" class="read-more-state" id="post-1" /><p class="read-more-wrap">' + db.data.oem[db.website.currentOffer].offers.initialDisclaimer + '<span class="read-more-target">' + db.data.oem[db.website.currentOffer].offers.remainingDisclaimer + '</span></p><label for="post-1" class="read-more-trigger"></label>');

		}

	}


	if (db.functionality.mobileBanner === true && ((db.website.layoutType === "mobile") && (db.website.pageName === "INDEX"))) {

		for (var i = 0; i < db.currentOffers.length; i++) {

			$('div#mobileSlideshow').append('<a href="' + db.currentOffers[i].landingPageUrl + '" title="' + db.currentOffers[i].tagline + '" onclick="dataLayer.push({\'event\': \'trackEvent\',\'eventCategory\': \'***Slideshow Click\', \'eventAction\': \'' + db.currentOffers[i].landingPageUrl + '\', \'eventLabel\' : \'Position ' + (i + 1) + '\',\'eventValue\': \'undefined\' });"><img src="' + db.currentOffers[i].mobileWB + '" alt="' + db.currentOffers[i].tagline + '" /></a>');

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




	return {
		//		data: data,
		//		currentOffers: currentOffers
	};


};
