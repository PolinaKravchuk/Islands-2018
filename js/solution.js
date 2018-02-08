(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        var row, cell, number=0;
        var massR = [], massS = [], massF = [];

        for (var i = 0; i < map.length; i++){
            row = map[i];
            for(var j = 0; j < row.length; j++){
                //cell = row[j];
                if(row[j] == ISLAND) {
                    massR.push(i);
                    massS.push(j);
                    number++;
                    while(row[j] == ISLAND) j++;
                    massF.push(j-1);
                    
                }
            } 
        }

        var t = massR.length;
        var a, b, q, f;
        for (var i = 0; i < massR.length-1; i++){
           dot:
           for(var j = i+1; j < massR.length; j++){
                a = massR[i];
                b = massR[j];
                q = b - a;
                 if(q == 1){
                    for (var z = massS[i]; z < massF[i] + 1; z++){
                        for (var x = massS[j]; x < massF[j] + 1; x++){
                            if (x == z){
                                number--;
                                break dot;
                            }
                        }
                    }
                 }
                 
            }
        }
       return number;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
