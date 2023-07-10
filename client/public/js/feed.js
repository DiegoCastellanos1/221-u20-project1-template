document.getElementById('portal_button').addEventListener('click', (event) => {
    window.location = 'http://my.marist.edu';
   
})




let feedItem1 = {
    title: 'title1',
    body: 'body1',
    linkUrl: 'linkUrl1',
    imageUrl: 'imageUrl1',
}




let feedItem2 = {
    title: 'title2',
    body: 'body2',
    linkUrl: 'linkUrl2',
    imageUrl: 'imageUrl2',
}




let feedItem3 = {
    title: 'title3',
    body: 'body3',
    linkUrl: 'linkUrl3',
    imageUrl: 'imageUrl3',
}




var currentStories = [feedItem1, feedItem2, feedItem3];
console.log(currentStories);




function display(currentStories) {
    document.getElementById(newsfeed).innerHTML = currentStories;
}
