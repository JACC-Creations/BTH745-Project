$(".multi-item-carousel .carousel-item").each(function () {
  var next = $(this).next();
  if (!next.length) next = $(this).siblings(":first");
  next.children(":first-child").clone().appendTo($(this));
});
$(".multi-item-carousel .carousel-item").each(function () {
  var prev = $(this).prev();
  if (!prev.length) prev = $(this).siblings(":last");
  prev.children(":nth-last-child(2)").clone().prependTo($(this));
});

var login = false;
var accountBalance = 1000;
var username = "jared.cotton";
var password = "charles12";
var address = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"