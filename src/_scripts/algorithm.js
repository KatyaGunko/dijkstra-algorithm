var _min=100000000000000;


function countDijkstraAlgorithm(size, pathes, from_spot, to_spot) {

    for( var k = 0; k < size ; k++) {
        for( var i = 0; i < size; i++ ) {
            for( var j = 0; j < size; j++ ) {
                if( i !== j ) {
                    if( pathes[i][k] + pathes[k][j] < pathes[i][j] && pathes[i][k] + pathes[k][j] <_min) {
                        pathes[i][j] = pathes[i][k] + pathes[k][j];
                    }
                }
            }
        }
    }
    if( pathes[from_spot-1][to_spot-1] >=_min ) {
       return new Error('No way to get from pion A to point B');
    }
    
    return pathes[from_spot-1][to_spot-1];
}

function prepare(size, pathes) {

    for( var i = 0; i < size; i++ ) {
        for( var j = 0; j < size; j++ ) {

            if( pathes[i][j] === 0 ) {
                pathes[i][j] = _min;
            }
        }
    }
}


