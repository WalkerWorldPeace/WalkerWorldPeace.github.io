/* Keep the navigation within its container, including after viewport changes. */
var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden').removeClass('close').attr('aria-expanded', 'false');
  $hlinks.addClass('hidden');
  if ($vlinks.outerWidth() > $nav.width()) {
    $btn.removeClass('hidden');
    var available = $nav.width() - $btn.outerWidth() - 16;
    while ($vlinks.outerWidth() > available && $vlinks.children().length > 1) {
      $vlinks.children().last().prependTo($hlinks);
    }
  }
}
$(window).on('resize', updateNav);
$btn.on('click', function() {
  var open = $hlinks.hasClass('hidden');
  $hlinks.toggleClass('hidden', !open);
  $btn.toggleClass('close', open).attr('aria-expanded', String(open));
});
$hlinks.on('click', 'a', function() {
  $hlinks.addClass('hidden');
  $btn.removeClass('close').attr('aria-expanded', 'false');
});
$nav.on('keydown', function(event) {
  if (event.key === 'Escape') {
    $hlinks.addClass('hidden');
    $btn.removeClass('close').attr('aria-expanded', 'false').trigger('focus');
  }
});
updateNav();
