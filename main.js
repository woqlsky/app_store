var app = $('#app');
var appList = $('<ul></ul>');
var header = $('<h3> tralalala </h3>');
app.append(header);
/*
appList.append($('<li>A</li>'));
appList.append($('<li>B</li>'));
appList.append($('<li>C</li>'));
app.append(appList);

*/
for(var i = 0; i < appList.length; i++){

    appList.append(i);
}
