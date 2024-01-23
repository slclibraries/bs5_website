<script>
  (function() {
    var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
    x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "ca.libraryh3lp.com/js/libraryh3lp.js?719";
    var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
  })();
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("lib-chat-button").style.bottom = "0";
    document.getElementById("pop").style.top = "0";
  } else {
    document.getElementById("lib-chat-button").style.bottom = "-50px";
    document.getElementById("pop").style.top = "-143px";
  }
  prevScrollpos = currentScrollPos;
}
</script>
