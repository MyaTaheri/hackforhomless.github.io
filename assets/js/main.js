/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

function displayText() {
	var dropdown = document.getElementById("dropdown");
	var selectedOption = dropdown.options[dropdown.selectedIndex].text;
	console.log(selectedOption)
	var output = document.getElementById("output");
	if(selectedOption === "How are the donations used?"){
		output.textContent = "100% of donations will be used to...";
	}
	else if(selectedOption === "Are the donations tax deductible?"){
		output.textContent = "Yes, the donations are tax deductible. Through our partnership with the Hack Club Bank, a 501(c)(3) organization, any donation you make to our project is tax deductible.";
	}
	else if(selectedOption === "What is the Hack Club Bank?"){
		output.textContent = "The Hack Club Bank is a a 501(c)(3) organization the supports hackathons run by and for high school students.";
	}
	else{
		output.textContent = "";
	}
  }

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});

})(jQuery);