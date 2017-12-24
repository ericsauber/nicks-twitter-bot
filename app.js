
var TwitterPackage = require('twitter');

var secret = {
  	consumer_key: 'dDY45lmodCQEsAyyOtMDMrlRA',
  	consumer_secret: 'krekzV08RuhsVmHE98ZCv3t4rLVC77lmmNm9M21wdQdkgQWz83',
  	access_token_key: '944829702023319552-JMPDQZWXrXtu0Dl3HUfdEnXHGyopb7D',
  	access_token_secret: 'i2E1sofAMh1iTc4vmNQcHQyi0c7ETe6TravN7lZvKu4E9'
}

var Twitter = new TwitterPackage(secret);
var randomNumber;
var text;

Twitter.stream('statuses/filter', {follow: '942983036005691393'}, function(stream) {
  
  	stream.on('data', function(tweet) {
    
  		
  		
		wait(tweet);
		

	});

  stream.on('error', function(error) {
    console.log(error);
  });

});


function replyTo(tweet) {
	

	var response = '';

	response = getText();

	text = '';
	text = '@' + tweet.user.screen_name + response;
	
	Twitter.post('statuses/update', {status: text, in_reply_to_status_id: tweet.id_str}, 
	    
	    function(err, data, response) {
			console.log(data)
	    }
	);
}

async function wait(tweet) {

  	randomNumber = Math.floor(Math.random() * 20);

  	if (randomNumber < 10)
  		randomNumber += 10;
	
	var msg = '';
	msg = tweet.text;

  	if (msg.includes('thats gay') ||
  		msg.includes('so gay') ||
  		msg.includes('great tweet Nick') ||
  		msg.includes('oh yeah?') ||
  		msg.includes('gay.') ||
  		msg.includes('sweet') ||
  		msg.includes('oh yeah?') ||
  		msg.includes('thats so cool. jk tho')) {
  		
  	} else {

		await sleep(randomNumber*1000);
  		replyTo(tweet);
  	}
}

function sleep(ms) {
  	
  	return new Promise(resolve => setTimeout(resolve, ms));
}

function getText() {

	var replies = [' thats gay',
					 ' so gay',
					 ' great tweet Nick',
					 ' oh yeah?',
					 ' gay.',
					 ' sweet',
					 ' thats so cool. jk tho']

	var rand = Math.floor(Math.random() * 7);

	return replies[rand];
}


