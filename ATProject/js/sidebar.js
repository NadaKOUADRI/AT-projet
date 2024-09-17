$(document).ready(function() {
    // Handler for '.prj-btn'
    $('.prj-btn').click(function() {
        // Close all other submenus and clear previous selections
        $('.cmpn-show').removeClass('show1');
        $('.user-show').removeClass('show2');
        $('.bpu-show').removeClass('show3');
        $('.second, .third, .fourth').removeClass('rotate');
        $('nav ul li').removeClass('active');  // Clear active from all list items

        // Toggle current submenu and icon rotation
        $('nav ul .prj-show').toggleClass("show");
        $('nav ul .first').toggleClass("rotate");
    });

    // Handler for '.cmpn-btn'
    $('.cmpn-btn').click(function() {
        // Close all other submenus and clear previous selections
        $('.prj-show').removeClass('show');
        $('.user-show').removeClass('show2');
        $('.bpu-show').removeClass('show3');
        $('.first, .third, .fourth').removeClass('rotate');
        $('nav ul li').removeClass('active');  // Clear active from all list items

        // Toggle current submenu and icon rotation
        $('nav ul .cmpn-show').toggleClass("show1");
        $('nav ul .second').toggleClass("rotate");
    });

    // Handler for '.user-btn'
    $('.user-btn').click(function() {
        // Close all other submenus and clear previous selections
        $('.prj-show').removeClass('show');
        $('.cmpn-show').removeClass('show1');
        $('.bpu-show').removeClass('show3');
        $('.first, .second, .fourth').removeClass('rotate');
        $('nav ul li').removeClass('active');  // Clear active from all list items

        // Toggle current submenu and icon rotation
        $('nav ul .user-show').toggleClass("show2");
        $('nav ul .third').toggleClass("rotate");
    });


    // Handler for '.bpu-btn'
    $('.bpu-btn').click(function() {
        // Close all other submenus and clear previous selections
        $('.prj-show').removeClass('show');
        $('.cmpn-show').removeClass('show1');
        $('.user-show').removeClass('show2');
        $('.first, .second, .third').removeClass('rotate');
        $('nav ul li').removeClass('active');  // Clear active from all list items

        // Toggle current submenu and icon rotation
        $('nav ul .bpu-show').toggleClass("show3");
        $('nav ul .fourth').toggleClass("rotate");
    });




    // Handler to toggle active class on list item click
    $('nav ul li').click(function(e) {
        e.stopPropagation(); // Stop propagation to avoid parent list items also getting selected
        $(this).addClass("active").siblings().removeClass("active");
    });

    // This captures clicks inside nested lists
    $('nav ul ul li').click(function(e) {
        e.stopPropagation(); // This prevents the event from bubbling up to parent elements
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parentsUntil($('nav ul'), 'li').addClass('active'); // Keep the parent active
    });
});