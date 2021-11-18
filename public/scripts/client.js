$(document).ready(function() { 

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
const createTweetElement = function(data){
 return `<article class="tweet">
        <div class="tweetHeader">
          <span class="avatar"><img src=${data.user.avatars}><span class="tweetername">${data.user.name}</span></span>
          <span class="username">${data.user.handle}</span>
        </div>
        <p class="tweetInput"> ${data.content.text}</p>
        <hr class="divider">
        <div class="tweetFooter">
          <span class="timestamp">${timeago.format(data.created_at)} </span>
          <div class="icons">
            <i class="fas fa-heart"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-bookmark"></i>
          </div>
        </div>
      </article>`
}


const renderTweets = function(tweets) {
  for (let post of tweets){
   let newTweet = createTweetElement(post)
    $('.postTweet').append(newTweet);
  }
}
// renderTweets(data);

// // $( "#target" ).submit(function( event ) {
//   alert( "Handler for .submit() called." );
//   event.preventDefault();
// });
// // 
$('.formTweet').submit(function(event){
  const $input = $(this).serialize()
  console.log($input)
  event.preventDefault();
  $.ajax({
    method: 'POST',
    url: '/tweets',
    data: $input
  }).then((result)=>{
    loadTweets(result);
  })
})

//load tweets

  const loadTweets = function(){
    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).then((data)=>{
      console.log("TEST",data);
      renderTweets(data)
    })
  
  
  }
loadTweets();
});
