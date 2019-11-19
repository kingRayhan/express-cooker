$(document).ready(function($) {
    $('#menu-toggle').click(function(e) {
        e.preventDefault()
        $('#wrapper').toggleClass('toggled')

        if ($('.toggled').length) {
            $('#navbarIcon').attr('class', 'fa fa-angle-right')
        } else {
            $('#navbarIcon').attr('class', 'fa fa-angle-left')
        }
    })

    $('.submenu').on('click', function() {
        $(this)
            .children('ul')
            .slideToggle()
        $(this)
            .find('i.fa')
            .toggleClass('fa-minus')
    })
})
