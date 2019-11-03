function goldbach(){
    let odd = document.getElementById("odd").value
    let sushu= parseFloat(document.getElementById('odd').value)
    if (isNaN(sushu) || sushu<= 2 || sushu % 2 == 1) {
        alert('请输入有效的数字')
        return false
    } else  {
        isTrue (odd)
    }
    return true
}
function bach(k) {
    var sum = 0;
    for (var i = 1; i <= k; i++){
        if (k % i== 0) {
            sum++;
        }
    }
    if (sum == 2) {
        return true;
    } else {
        return false;
    }
}
function isTrue(odd) {
    let str = "" ;
    for (var x = 2; x < odd; x++) {
        var y = odd - x;
        if (bach(x) &&bach(y) &&x <= y) {
           (str += odd+ "可以拆分为两个质数" + x + "与" + y + "的和" + '<br>')
        }
    }
    document.getElementById('goldbach').innerHTML = str;
}