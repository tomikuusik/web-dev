$(function () {
    var $posts = $('#posts');

    $.ajax({
        type: 'GET',
        url: 'https://api.npoint.io/22d74f579180ab6a1126',
        success: function(data) {
            $.each(data, function(i, item) {
                $posts.append(
                '<li>' + 
                '<div class="boxes">' + 
                '<img src=https://icon-library.com/images/facebook-user-icon/facebook-user-icon-17.jpg>' + 
                '<div class="date">' + item.Time + '</div>' + 
                '<img src=' + item.Image +'>' +
                '<p>' + item.Text + '</p>' +
                '<button> Like </button>' +
                '</div>' + 
                '</li>')
            });
            console.log('success', data);
        }
    })

});
    