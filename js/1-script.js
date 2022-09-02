// document.write("<h1>js第一句</h1>");


// 基本数据类型和变量

/* 字符串 单引号、双引号都可以
"没关系"
// 数字
45
10.26
// 布尔值
true
false

变量 变量名 = "变量名";
变量名只能是英文大小写、数字或是$或是_的组合
开头不能是数字
var my_name = "qem";
var my_age=98;
var is_ok=true;


document.write(my_name + "，没关系，今天也还活着，很厉害了，喝点勇闯天涯吧！");
document.write("<br/>");
my_name = "doggie";
document.write(my_name + "，没关系，今天也没有谋杀同事，很厉害了，喝点吨吨吨吧！");
document.write("<br/>");
document.write("没关系，今天也还活着，很厉害了，烧点同事吧！");
document.write("<br/>");
document.write("没关系，今天也玩游戏了，很厉害了，煮点同事吧！");
document.write("<br/>");
*/

//使用字符串
// charat：按位置找内容 indexof：按内容找位置 substring：按起始位置结束位置找内容
// var phrase ="hallo,\"ich bin kaffee\""
// var text="<br/>haha";
// document.write(phrase.substring(4,18)+text+"<br/>");

/* 使用数字
遵循四则运算规则，支持括号
百分号：取余数，8%3即得到8除以3的余数

var number =9;

document.write(Math.abs(number));
document.write(Math.max(120,234,45,12.92,94.12,number));
document.write("<br/>");
document.write(Math.min(120,234,45,12.92,94.12,number));
document.write("<br/>");
document.write(Math.round(2.365));
document.write("<br/>");
document.write(Math.pow(2,3));
document.write("<br/>");
document.write(Math.sqrt(number)); // 开根号
document.write("<br/>");
document.write(Math.round(Math.random() * 10)); // 随机数、随机整数
*/

/* 读取用户输入 prompt 

var account = prompt("请输入数字1");
var password= prompt("请输入数字2");
account = parseF1loat(account);
password = parseFloat(password);
document.write(account+password);
*/

/* 数组 array
var scores=[80,34,78,53,100,87];
scores[0]=91;
document.write(scores);
document.write(scores[3]);


var friends = ["aa","bb","cc"];
document.write(friends.length);
*/

// 函数 function
/*
function hello(name,age){

    document.write("你好"+name+"！你今年"+age+"岁。<br/>啊，你都这么老了啊！");
}

hello("ww","24");


function add(num1,num2){
    // document.write(num1+num2);
    return num1 + num2; // return后的语句不会被执行
}
document.write(add(8,2));
*/

/*if*/
// bool变量前加!，就表示反面，原本的true就会变成false
/* var score1 = parseFloat(prompt ("输入你的成绩"));
var rainy = true
if (score1==100 || !rainy){
    document.write("这1000你拿走");
}
else if(score1>=80){
    document.write("500，不谢");
}
else if(score1>=60){
    document.write("100，继续努力");
}
else {
    document.write("打钱");
}


function max_num(aa,bb,cc){

    if(aa>bb && aa>cc){
        return aa;
    }
    else if (bb>aa & bb>cc){
        return bb;
    }
    else if(cc>aa && cc>bb){
        return cc;
    }
}
aa=parseFloat(prompt("输入aa"));
bb=parseFloat(prompt("输入bb"));
cc=parseFloat(prompt("输入cc"));

document.write(max_num(aa,bb,cc));
*/


// 对象 object 可用于存放键值对
// key      vale
// 键       值
/*
var person = {
    name:"qem",
    age:23,
    is_female:true,
    print_name:function(){
        document.write(this.name);
    }
}
person.print_name();


var movie={
    title:"The Black Phone",
    actors:[
        {
            name:"梅森·泰晤士",
            age:15,
            is_female:false,
        },
        {
            name:"玛德琳·麦格劳",
            age:14,
            is_female:true,
        },
        {
            name:"伊桑·霍克",
            age:52,
            is_female:false,
        },
        {
            name:"杰瑞米·戴维斯",
            age:55,
            is_female:false,
        }
    ],
    type:"horror",
    language:"English",
    duration:103,
}
document.write(movie.actors[0].name)
*/

//while循环
// do{}while():先执行，再判断
/*var i =1
do{
    document.write(i);
    document.write("</br>");
    i++;
}while(i<=5)
*/

//密码判断
/*
var password=123456;
var input;
var trytime=0;
var trylimit=3;
out_of_limit = false;


while(password!=input && !out_of_limit){
    trytime++;
    if(trytime<=trylimit){
        input=prompt("请输入密码");
    }
    else{
        out_of_limit=true;
    }
}

if (out_of_limit){
    alert("超次数");
}
else{
    alert("登入成功")
}
*/

//for循环
/*
var friends=["11","22","33","44","55"];

for(var i = 0; i<friends.length; i++){
    document.write(friends[i]);
    document.write("<br/>");
}
*/
/*
var questions = [
    {
    prompt:"香蕉是什麼顏色？\n\n(a)紅色(b)綠色(c)黃色",
    answer:"c"
    }, 
    {
    prompt:"草莓是什麼顏色？\n\n(a)紅色(b)紫色(c)黃色",
    answer: "a"
    },
    {
    prompt:"1公尺等於幾公分？\n\n(a)1(b)10(c)100",
    answer:"c"
    }
] 
var score=0;
for(var i=0;i<questions.length;i++){
    var input=prompt(questions[i].prompt);
    if (input==questions[i].answer){
        score++;
        alert("答对了");
    }
    else{
        alert("答错了")
    }
}

alert("答对"+score+"题");
*/

// 二维数组和嵌套循环
/*二维数组略了


for(var i=0;i<4;i++){
    for(var a =0;a<3;a++){
        document.write("i现在等于"+i+"<br/>"+"a现在等于"+a);
        document.write("<br/>");
    }
}
*/
/*
var sth =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
]

for (var i=0;i<sth.length;i++){
    for (var b=0;b<sth[i].length;b++){
        document.write(sth[i][b]);
    }
    document.write("<br/>");
}
*/

//class ，用class创建object模板
/*class phone {
    constructor(number, year, is_waterproof) { 
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof; 
    }
        phone_age(){
            return 2021 - this.year; I
        }
}

var phone1 =new phone("123",1978,false);
document.write(phone1.phone_age());
*/
/*
var phone1 = {
    number: "123", 
    year:2020,
    is_waterproof:false,
    phone_age:function(){
        return 2021 - this.year;
    }
}

var phone2 = { 
    number: "456", 
    year: 2018,  
    is_waterproof:false, 
    phone_age:function(){
        return 2021 - this.year;
    }
}

var phone3 = {
    number: "789", 
    year : 2018,
    is_waterproof:true, 
    phone_age:function(){
        return 2021 - this.year;
    }
}
*/

//取得html元素
//window是全域的物件，document是window的一个属性，负责处理html内的元素
/*var h1=document.getElementById("header");
h1.innerText="???";
h1.style.backgroundColor="red";
h1.style.color="blue";
var link = document.getElementById("link");
console.log(link);
link.href="https://www.baidu.com";
*/

// document.write();
// window.document.write();
// window.prompt();
// var a =123;
// window.document.write(window.a);

// event listener事件监听器
// function handle_click(element){
//     // alert("??按屁啊");
//     // console.log(element);
//     element.
//     element.
// }
/* 监听事件
var btn= document.getElementById("btn");
btn.addEventListener("click",function(){
    //alert("??按屁啊");
    this.innerText = "按屁啊";
    this.style.color="blue";
})

var img=document.getElementById("img");
img.addEventListener("mouseover",function(){
    this.src="C:\\Users\\EDZ\\Desktop\\9b691bfa2b0bdb86.jpg";
})

var img=document.getElementById("img");
img.addEventListener("mouseout",function(){
    this.src="C:\\Users\\EDZ\\Desktop\\ad19c0921edd5687.jpg";
})
*/
