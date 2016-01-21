var showAction = function (id) {
    var app = $('#app');
    $.get('/data/listData.json', function(listData) {
        var application = listData
            .find((listDataElement) => listDataElement.id == id);
        if(typeof application !== 'undefined') {
        } else {
            app.append($('<h3>Application with id ' + id + ' was not found.</h3>'));
        }
    });
};
