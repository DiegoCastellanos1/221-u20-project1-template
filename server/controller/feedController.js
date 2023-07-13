const feedPost = require('../model/feedItem')

let feedPosts = [];
let feedPost1 = feedPost.createfeedPost("Mexico beats Costa Rica with a 2-0 score to face Jamaica in the semifinals, and USA beats Canada in a penalty shootout to go to semi finals and face Panama", "https://olympics.com/en/news/concacaf-gold-cup-2023-all-results-scores-standings-complete-list", "/images/download-min.png");
let feedPost2 = feedPost.createfeedPost("Las Chivas win their second game of the season with a 3-1 win over Atletico de San Luis and now they are first in the league", "https://www.foxsports.com/soccer/guadalajara-team-standings", "/images/chivas-min.png");
let feedPost3 = feedPost.createfeedPost("Messi has been transfered to Inter Miami, and Mbappe does not wanna leave PSG so PSG is telling him that if he does not leave they are gonna sell his teamates", "https://www.footballtransfers.com/en/transfer-news/us-united-states-mls/2023/07/lionel-messi-inter-miami-interview-airport-barcelona#:~:text=On%20Tuesday%2C%20Messi%20touched%20down,lucrative%20move%20to%20Saudi%20Arabia.&text=And%20Messi%20says%20he%20is%20happy%20with%20his%20decision.", "/images/messi.png");

feedPosts.push(feedPost1);
feedPosts.push(feedPost2);
feedPosts.push(feedPost3);

exports.getfeedPosts = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	console.log(feedPosts);
	res.send(JSON.stringify(feedPosts));
}

exports.savefeedPost = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let newfeedPost = feedPost.createfeedPost(req.body.Title, req.body.Body, req.body.linkurl, req.body.imageurl);
    feedPosts.push(newfeedPost);
    res.send(JSON.stringify(feedPosts));
}

/*exports.savefeedPost = function(req, res) {
	let newfeedPost = feedPost.createfeedPost(req.body.Title, req.body.Body, req.body.linkurl, req.body.imageurl);
	feedPosts.push(newfeedPost);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts);
}*/

exports.getfeedPost = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedPosts[req.params.feedPostId]);
}

exports.deletefeedPost = function(req, res) {
	feedPosts.splice(req.params.feedPostId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts);
}

exports.updatefeedPost = function(req, res) {
	// get the existing feedPost from the array
	var updatedfeedPost = feedPosts[req.params.feedPostId];
	//console.log(updatedfeedPost);
	// check to see what has been passed and update the local copy
	console.log(req.body);
	if(req.body.Title)
		updatedfeedPost.Title = req.body.Title;
	if(req.body.Body)
		updatedfeedPost.Body = req.body.Body;
	if(req.body.linkurl)
		updatedfeedPost.linkurl = req.body.linkurl;
	if(req.body.imageurl)
		updatedfeedPost.imageurl = req.body.imageurl;

	// save the local copy of the feedPost back into the array
	feedPosts[req.params.feedPostId] = updatedfeedPost;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts[req.params.feedPostId]);
}