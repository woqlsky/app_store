var calendarAction = function(){
  var app = $('#app');

  var createCalendar = function(calendarData){
  var tableElement = $('<table class="table"></table>');
    var headerRow = $('<tr style="outline: thin solid"></tr>');
    headerRow.append($('<th style="text-align: center;">Monday</th>'));
    headerRow.append($('<th style="text-align: center;">Tuesday</th>'));
    headerRow.append($('<th style="text-align: center;">Wednesday</th>'));
    headerRow.append($('<th style="text-align: center;">Thursday</th>'));
    headerRow.append($('<th style="text-align: center;">Friday</th>'));
    headerRow.append($('<th style="text-align: center;">Saturday</th>'));
    headerRow.append($('<th style="text-align: center;">Sunday</th>'));
    tableElement.append(headerRow);

    calendarData.forEach(function(listDataElement){
        var dataRow = $('<tr style="outline: thin solid"></tr>');
        dataRow.append($('<td align="center">'+ listDataElement.mon +'</td>'));
        dataRow.append($('<td align="center">'+ listDataElement.tue +'</td>'));
        dataRow.append($('<td align="center">'+ listDataElement.wed +'</td>'));
        dataRow.append($('<td align="center">'+ listDataElement.thu +'</td>'));
        dataRow.append($('<td align="center">'+ listDataElement.fri +'</td>'));
        dataRow.append($('<td align="center">'+ listDataElement.sat +'</td>'));
        dataRow.append($('<td align="center">'+ listDataElement.sun +'</td>'));
        tableElement.append(dataRow);
    });

    app.append(tableElement);
  };
            
    $.get('/data/calendarData.json', function(calendarData) {
          var appListElement = $('#app_list');
          if(appListElement.length === 0){
              createCalendar(calendarData);
          };
          });  
};