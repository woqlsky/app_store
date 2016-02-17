var showAction = function (id) {
    var app = $('#app');
    $.get('/data/listData.json', function(listData) {
        var application = listData
            .find((listDataElement) => listDataElement.id == id);
        if(typeof application !== 'undefined') {
            app.append($("<div style='height: 300px; width: 300px;'>" + application.img + "</div>"));
            var tableElement = $('<table class= "table"></table>');
            var dataRow = $('<tr></tr>');
            var headerRow = $('<tr></tr>');
            headerRow.append($('<th>ID</th>'));
            headerRow.append($('<th>Name</th>'));
            headerRow.append($('<th>Price</th>'));
            headerRow.append($('<th>Author</th>'));
            headerRow.append($('<th>Type</th>'));
            dataRow.append($('<td>'+ application.id +'</td>'));
            dataRow.append($('<td>'+ application.name +'</td>'));
            dataRow.append($('<td>'+ application.price +'</td>'));
            dataRow.append($('<td>'+ application.author +'</td>'));
            dataRow.append($('<td>'+ application.type +'</td>'));
            tableElement.append(headerRow);
            tableElement.append(dataRow);
            app.append(tableElement);
        } else {
            app.append($('<h3>Application with id ' + id + ' was not found.</h3>'));
        }
        app.append($('<button onclick="goBack()" > back</button>'));
    });
};
function goBack(){
    window.history.back();
};