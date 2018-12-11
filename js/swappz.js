window.onload = function() {
  document.querySelectorAll('[data-ga-event]').forEach(function (el) {
    el.addEventListener('click', function() {
      gtag('event', 'click', {
        event_category: 'button',
        event_label: el.dataset.gaEvent
      });
    });
  });
};

function onFormSubmit(evt) {
  evt.preventDefault();
  gtag('event', 'submit', {
    event_category: 'signup-form',
    event_callback: function() { evt.target.submit(); }
  });
  return false;
}

// Load Video

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player(window.innerWidth <= 992 ? 'player' : 'player2', {
    videoId: 'EOFwj1m60SU',
    playerVars: { controls: 0, showinfo: 0 },
    events: { 'onStateChange': onPlayerStateChange }
  });
}

var playStarted = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !playStarted) {
    gtag('event', 'video.play', {
      event_category: 'video',
    });
    playStarted = true;
  }
}
