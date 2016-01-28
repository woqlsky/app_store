
var routes = {
    'home': homeAction,
    'list': listAction,
    'show': showAction,
    'calendar': calendarAction
};

$(window).on('hashchange', function(e) {
    var routeElements = window.location.hash.slice(1).split('/');
    var routeName = routeElements[0];
    var routeParams = routeElements.slice(1);
    var routeAction = routes[routeName];
    if(typeof routeAction === undefined) {
        routeAction = routes['home'];
    }
    $('#app').html('');
    routeAction.apply(null, routeParams);
});
$(window).trigger('hashchange');
