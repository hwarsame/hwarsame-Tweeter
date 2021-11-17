$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').on('keyup', function() {
    // console.log($(this));
    const $tweet = $(this);
    const $counter = $tweet.closest('form').find('.counter')
    const $value = $tweet.val()
    // console.log($tweet.val());
    if ($value.length > 140){
      $counter.addClass('redtext');
    }
    else {
      $counter.removeClass('redtext');
    }
    $counter.html(140 - $value.length)
  })
});