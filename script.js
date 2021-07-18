var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
var convertedDate = moment(currentDate)

moment();
moment();
// From 2.14.0 onward, also supported
moment([]);
moment({});

var timeEl = document.getElementById('currentDay');
timeEl.innerText=currentDate;



var storedItem = localStorage.getItem("storedItem");

function save(){
    var item = document.getElementById("input").value;
    localStorage.setItem("storedItem", item);
    document.getElementById("savedText").innerHTML = item;
}
function get(){
    localStorage.getItem("storedItem");
    document.getElementById("openedText").innerHTML = storedItem;
}




var storedItem1 = localStorage.getItem("storedItem1");

function save1(){
    var item1 = document.getElementById("input1").value;
    localStorage.setItem("storedItem1", item1);
    document.getElementById("savedText1").innerHTML = item1;
}
function get1(){
    localStorage.getItem("storedItem1");
    document.getElementById("openedText1").innerHTML = storedItem1;
}




var storedItem2 = localStorage.getItem("storedItem2");

function save2(){
    var item2 = document.getElementById("input2").value;
    localStorage.setItem("storedItem2", item2);
    document.getElementById("savedText2").innerHTML = item2;
}
function get2(){
    localStorage.getItem("storedItem2");
    document.getElementById("openedText2").innerHTML = storedItem2;
}



var storedItem3 = localStorage.getItem("storedItem3");

function save3(){
    var item3 = document.getElementById("input3").value;
    localStorage.setItem("storedItem3", item3);
    document.getElementById("savedText3").innerHTML = item3;
}
function get3(){
    localStorage.getItem("storedItem3");
    document.getElementById("openedText3").innerHTML = storedItem3;
}



var storedItem4 = localStorage.getItem("storedItem4");

function save4(){
    var item4 = document.getElementById("input4").value;
    localStorage.setItem("storedItem4", item4);
    document.getElementById("savedText4").innerHTML = item4;
}
function get4(){
    localStorage.getItem("storedItem4");
    document.getElementById("openedText4").innerHTML = storedItem4;
}



var storedItem5 = localStorage.getItem("storedItem5");

function save5(){
    var item5 = document.getElementById("input5").value;
    localStorage.setItem("storedItem5", item5);
    document.getElementById("savedText5").innerHTML = item5;
}
function get5(){
    localStorage.getItem("storedItem5");
    document.getElementById("openedText5").innerHTML = storedItem5;
}



var storedItem6 = localStorage.getItem("storedItem6");

function save6(){
    var item6 = document.getElementById("input6").value;
    localStorage.setItem("storedItem6", item6);
    document.getElementById("savedText6").innerHTML = item6;
}
function get6(){
    localStorage.getItem("storedItem6");
    document.getElementById("openedText6").innerHTML = storedItem6;
}



var storedItem7 = localStorage.getItem("storedItem7");

function save7(){
    var item7 = document.getElementById("input7").value;
    localStorage.setItem("storedItem7", item7);
    document.getElementById("savedText7").innerHTML = item7;
}
function get7(){
    localStorage.getItem("storedItem7");
    document.getElementById("openedText7").innerHTML = storedItem7;
}



var i = 0;
var j = 0;

 function divClrChange(){
     var divTag = document.getElementById("taskArea");
     var bgColor = ["green"]
     var txtColor = ["white"]
     divTag.style.backgroundColor=bgColor[i];
     divTag.style.color=txtColor[j];
     i=(i+1)%bgColor.length;
     j=(j+1)%txtColor.length;
    }
    setInterval(divClrChange, 2000);

    







/*
var i = 0;
var j = 0;

 function divClrChange(){
     var divTag = document.getElementById("taskArea");
     var bgColor = ["green"]
     var txtColor = ["white"]
     divTag.style.backgroundColor=bgColor[i];
     divTag.style.color=txtColor[j];
     i=(i+1)%bgColor.length;
     j=(j+1)%txtColor.length;
     if(i>currentDate){
        document.getElementById("taskArea", bgColor).innerHTML;

     }else{
        return 0;
     }
 }
*/





