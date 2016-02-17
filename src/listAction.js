var listAction = function(){
    var app = $('#app');

    var createList = function(listData) {
        var tableElement = $('<table class="table"></table>');
        var headerRow = $('<tr></tr>');
        headerRow.append($('<th>Action</th>'));
        headerRow.append($('<th>ID</th>'));
        headerRow.append($('<th>Name</th>'));
        headerRow.append($('<th>Price</th>'));
        headerRow.append($('<th>Author</th>'));
        headerRow.append($('<th>Type</th>'));
        tableElement.append(headerRow);

        listData.forEach(function(listDataElement){
            var dataRow = $('<tr></tr>');
            var showLink = $('<a class=>Show</a>');
            showLink.attr('href', '#show/' + listDataElement.id);
            dataRow.append($('<td></td>').append(showLink));
            dataRow.append($('<td>'+ listDataElement.id +'</td>'));
            dataRow.append($('<td>'+ listDataElement.name +'</td>'));
            dataRow.append($('<td>'+ listDataElement.price +'</td>'));
            dataRow.append($('<td>'+ listDataElement.author +'</td>'));
            dataRow.append($('<td>'+ listDataElement.type +'</td>'));
            tableElement.append(dataRow);
        });

        app.append(tableElement);
    };

    $.get('/data/listData.json', function(listData) {
        var appListElement = $('#app_list');
        if(appListElement.length === 0){
            createList(listData);
        }
    });
};
