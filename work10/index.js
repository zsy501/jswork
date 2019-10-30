function mokey(){
    let total = document.getElementById("monkeytotal").Value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for (let i=1;i<=total;i++ ){
        mokey.push(i)
    }
    let i=0
    while (monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kick!=0){
            mokey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText = monkey[0]
}