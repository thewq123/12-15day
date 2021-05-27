//打印一个hello_world
alert("hello_world");
alert("请输入你的年龄");
var age, i;
age = prompt(age);
if(age < 18){
    alert("你还是个孩子还未成年~~~");
}else if(age >= 18 && age <30){
    alert("你已经是一个成年人了~~~");
}else if(age >= 30 && age < 60){
    alert("你已经是一个中年人了!");
}else if(age >= 60 && age < 100){
    alert("你已经是一个老年人了~~~");
}else if(age >= 100 && age <=150){
    alert("你已经是一位长寿老人了!~~");
}else{
    alert("你说谎!系统还用100秒将启动自爆程序!");
    for(i=1; i<=100; ++i){
        document.write(i);
    }
    alert("跟你开个玩笑~~~~~~~~~~~~~~");
}
