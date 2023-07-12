document.getElementById('portal_button').addEventListener('click', event => {
    goToLocation('https://my.marist.edu/');
  })

let feedNumber1 = {
  Title: 'Gold Cup Updates and Scores',
  Body: 'Mexico beats Costa Rica with a 2-0 score to face Jamaica in the semifinals, and USA beats Canada in a penalty shootout to go to semi finals and face Panama',
  linkUrl: 'https://olympics.com/en/news/concacaf-gold-cup-2023-all-results-scores-standings-complete-list',
  imageUrl: '/images/download-min.png'
}

let feedNumber2 = {
  Title: 'Chivas de Guadalajara',
  Body: 'Las Chivas win their second game of the season with a 3-1 win over Atletico de San Luis and now they are first in the league',
  linkUrl: '',
  imageUrl: '/images/chivas-min.png'
}

let feedNumber3 = {
  Title: 'Soccer Transfers',
  Body: 'Messi has been transfered to Inter Miami, and Mbappe does not wanna leave PSG so PSG is telling him that if he does not leave they are gonna sell his teamates',
  linkUrl: '',
  imageUrl: '/images/messi.png'
}

var currentStories = [feedNumber1, feedNumber2, feedNumber3]

window.addEventListener("load", () => {
  for(var i=0; i < currentStories.length; i++){
    displayFeed(currentStories[i]);

  }
});

function displayFeed(currentStories){
  let feed = document.getElementById('newsfeed');
  feed.innerHTML += "<span><img class ='myImage' src ='" + currentStories.imageUrl +"'>" +"</span>";
  feed.innerHTML += "<span><h2><a href+'" + currentStories.linkUrl+ "'> " + currentStories.Title + "</a></h2></span>"
  feed.innerHTML += "<span>" +currentStories.Body + "</span>";
  feed.innerHTML += "<hr />"
}