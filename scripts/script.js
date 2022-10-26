var $doc = $('html, body');
$('.rolar').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});