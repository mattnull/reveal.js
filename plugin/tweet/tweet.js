/**
 * Plugin to that allows tweets to be sent when a slide changes
 * @author Matt Null - http://github.com/mattnull - hello@mattnull.com
 */
var RevealTweet = (function(){
	
	var config = {
		server : '',
		tweets : []
	}

	//configure
	function config(params){
		config.server = params.server || config.server;
	}

	function init(){
		var tweets = document.querySelectorAll('[tweet]');
		config.tweets = tweets.length ? tweets.length : [];
	}

	// send a tweet to the server
	function tweet(message){

	}

	// attach event listeners

	Reveal.addEventListener('slidechanged', function(e){
		tweet()
	});

	//initialize
	init();

	return {
		config : config,
		tweet : tweet
	};

})();