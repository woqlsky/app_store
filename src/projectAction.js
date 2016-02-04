var app = $("#app");
var projectAction = function(){
    var overlap = $('<div class="overlap">Hello!</br></br></div>');
    var overlapList = $('<ul></ul>');
    overlapList.append('<li> Like us </br>on facebook</br></br></li>');
    overlapList.append('<li>Get to know</br> our players</br></br></li>');
    overlapList.append('<li>Donate us</li>');
    overlap.append(overlapList);
    app.append(overlap);
}