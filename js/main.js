$(document).ready(function () {
    changeBackgroundNav();
    toggleMenu();
});

function changeBackgroundNav() {
    var margin = $('#top_header').height() - 2*$('#top_nav').height();
    var startchange = $('#top_header');

    if (startchange.length){
        $(document).scroll(function(event) {
            scroll_start = $(this).scrollTop();
            var st = $(this).scrollTop();

            if(scroll_start > margin) {
                $('#top_nav').addClass('importantBackground');
                $('.icon-bar').css('background', '#707070');
            } else {
                $('#top_nav').removeClass('importantBackground');
                $('.icon-bar').css('background', '#ffff');
            }

        });
    }
}

function toggleMenu(){

}