
funtion calendar(y) {

    var html = 'div class="box">';


    for (var m = 1; m <= 12; ++m) {
        html += '<table>';
        html +='<tr class="title"><th colspan="7">' + y + '年' + m '月'</th></tr>';
    }
}