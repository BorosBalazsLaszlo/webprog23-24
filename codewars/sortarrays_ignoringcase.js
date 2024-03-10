sortme = function( names ) {
    return names.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
};
