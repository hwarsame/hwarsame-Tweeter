$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').on('keyup', function() {
    // console.log($(this));
    const $tweet = $(this);
    const $counter = $tweet.closest('form').find('.counter')
    // console.log($tweet.val());
    if ($tweet.val().length > 140){
      $counter.addClass('redtext');
    }
    else {
      $counter.removeClass('redtext');
    }
    $counter.html(140 - $tweet.val().length)
  })
});