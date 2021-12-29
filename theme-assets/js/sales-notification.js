

$(window).on('load', function() {
    // Notification 1
    setTimeout(function() {
        var time = "2 minutes ago";
        $.notify({
            icon: '../../../../theme-assets/images/user-1.png',
            title: 'Website Traffic Increase ',
            message: 'Everyone visited website'
        },{
            type: 'minimalist',
            placement: {
                from: "bottom",
                align: "left"
            },
            animate: {
                enter: 'animated fadeInLeftBig',
                exit: 'animated fadeOutLeftBig'
            },
            icon_type: 'image',
            template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<div id="image">' +
                '<img data-notify="icon" class="rounded-circle float-left">' +
                '</div><div id="text">' +
                '<span data-notify="title">{1}</span>' +
                '<span data-notify="message">{2}</span>' +
                '<span data-notify="time">'+time+'</span>' +
                '</div>'+
            '</div>'
        });
    },5000);

    // Notification 2
    setTimeout(function() {
        var time = "20 seconds ago";
        $.notify({
            icon: '../../../../theme-assets/images/user-11.png',
            title: 'Someone reach ',
            message: 'Someone Stay on website'
        },{
            type: 'minimalist',
            placement: {
                from: "bottom",
                align: "left"
            },
            animate: {
                enter: 'animated fadeInLeftBig',
                exit: 'animated fadeOutLeftBig'
            },
            icon_type: 'image',
            template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<div id="image">' +
                '<img data-notify="icon" class="rounded-circle float-left">' +
                '</div><div id="text">' +
                '<span data-notify="title">{1}</span>' +
                '<span data-notify="message">{2}</span>' +
                '<span data-notify="time">'+time+'</span>' +
                '</div>'+
            '</div>'
        });
    }, 15000);
});