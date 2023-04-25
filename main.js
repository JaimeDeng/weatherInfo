//獲得現在時間(小時)
const currentDate = new Date();
let currentHour = currentDate.getHours();

//賦予目前時間定義是白天或晚上
let time;
if(currentHour >= 6 && currentHour < 18){
    time = "day";
}else if(currentHour >= 0 && currentHour < 6 || currentHour >=18 && currentHour <=23){
    time = "night";
}

//獲取父元素
let taipei = document.getElementById("taipei");
let newTaipei = document.getElementById("newTaipei");
let taichung = document.getElementById("taichung");
let tainan = document.getElementById("tainan");
let kaohsiung = document.getElementById("kaohsiung");
let pingtung = document.getElementById("pingtung");
let hualien = document.getElementById("hualien");
let taitung = document.getElementById("taitung");

//獲取各自子元素status
let taipeiStatus = taipei.querySelector(".status");
let newTaipeiStatus = newTaipei.querySelector(".status");
let taichungStatus = taichung.querySelector(".status");
let tainanStatus = tainan.querySelector(".status");
let kaohsiungStatus = kaohsiung.querySelector(".status");
let pingtungStatus = pingtung.querySelector(".status");
let hualienStatus = hualien.querySelector(".status");
let taitungStatus = taitung.querySelector(".status");

//獲取各自子元素minTemp
let taipeiMinTemp = taipei.querySelector(".minTemp");
let newTaipeiMinTemp = newTaipei.querySelector(".minTemp");
let taichungMinTemp = taichung.querySelector(".minTemp");
let tainanMinTemp = tainan.querySelector(".minTemp");
let kaohsiungMinTemp = kaohsiung.querySelector(".minTemp");
let pingtungMinTemp = pingtung.querySelector(".minTemp");
let hualienMinTemp = hualien.querySelector(".minTemp");
let taitungMinTemp = taitung.querySelector(".minTemp");

//獲取各自子元素maxTemp
let taipeiMaxTemp = taipei.querySelector(".maxTemp");
let newTaipeiMaxTemp = newTaipei.querySelector(".maxTemp");
let taichungMaxTemp = taichung.querySelector(".maxTemp");
let tainanMaxTemp = tainan.querySelector(".maxTemp");
let kaohsiungMaxTemp = kaohsiung.querySelector(".maxTemp");
let pingtungMaxTemp = pingtung.querySelector(".maxTemp");
let hualienMaxTemp = hualien.querySelector(".maxTemp");
let taitungMaxTemp = taitung.querySelector(".maxTemp");

//獲取各自子元素status圖示
let taipeiStatusIcon = taipei.querySelector(".right");
let newTaipeiStatusIcon = newTaipei.querySelector(".right");
let taichungStatusIcon = taichung.querySelector(".right");
let tainanStatusIcon = tainan.querySelector(".right");
let kaohsiungStatusIcon = kaohsiung.querySelector(".right");
let pingtungStatusIcon = pingtung.querySelector(".right");
let hualienStatusIcon = hualien.querySelector(".right");
let taitungStatusIcon = taitung.querySelector(".right");

//依照時間更改背景色
let body = document.querySelector("body");
let card = body.querySelectorAll(".card");  //獲得所有.card元素的collection
let img = body.querySelector("img");
console.log(img)
if(time === "night"){
    body.style.backgroundColor = "#485B7F";
    body.style.color = "white";
    img.style.filter = "brightness(1000%)"; //filter更改img的顏色
    card.forEach((element)=>{   //card是collection , 必須用遍歷來設定
        element.style.cssText = "background-color: rgba(31, 48, 80, 0.7);";
        element.style.cssText += "box-shadow: none !important;";
    });
}

//更改天氣狀況示意圖判斷
function changImg(element,String) {
    if(String === "晴天"){
        element.innerHTML = '<i class=\'fa-solid fa-sun\'></i>';
    }
    if(String === "多雲短暫雨" || String === "多雲午後短暫陣雨" || String === "陰時多雲短暫雨"){
        element.innerHTML = '<i class=\'fa-solid fa-cloud-rain\'></i>';
    }
    if(String === "陰短暫雨" || String === "多雲時陰短暫雨"){
        element.innerHTML = '<i class=\'fa-solid fa-cloud-sun-rain\'></i>';
    }
    if(String === "多雲"){
        element.innerHTML = '<i class=\'fa-solid fa-cloud\'></i>';
    }
    if(String === "晴時多雲"){
        element.innerHTML = '<i class=\'fa-regular fa-sun-cloud\'></i>';
    }

    let i = element.querySelector("i");
    console.log(i);
    if(time === "night"){
        i.style.color = "white";
    }
}

//讀取並修改天氣狀況&示意圖
function readStatus() {
    let i;
    if(time === "day"){
        i = 0;
    }else if(time === "night"){
        i = 1;
    }
    taipeiStatus.innerHTML = weatherData.records.location[5].weatherElement[0].time[i].parameter.parameterName;
    changImg(taipeiStatusIcon,weatherData.records.location[5].weatherElement[0].time[i].parameter.parameterName);
    newTaipeiStatus.innerHTML = weatherData.records.location[1].weatherElement[0].time[i].parameter.parameterName;
    changImg(newTaipeiStatusIcon,weatherData.records.location[1].weatherElement[0].time[i].parameter.parameterName);
    taichungStatus.innerHTML = weatherData.records.location[11].weatherElement[0].time[i].parameter.parameterName;
    changImg(taichungStatusIcon,weatherData.records.location[11].weatherElement[0].time[i].parameter.parameterName)
    tainanStatus.innerHTML = weatherData.records.location[6].weatherElement[0].time[i].parameter.parameterName;
    changImg(tainanStatusIcon,weatherData.records.location[6].weatherElement[0].time[i].parameter.parameterName)
    kaohsiungStatus.innerHTML = weatherData.records.location[15].weatherElement[0].time[i].parameter.parameterName;
    changImg(kaohsiungStatusIcon,weatherData.records.location[15].weatherElement[0].time[i].parameter.parameterName)
    pingtungStatus.innerHTML = weatherData.records.location[17].weatherElement[0].time[i].parameter.parameterName;
    changImg(pingtungStatusIcon,weatherData.records.location[17].weatherElement[0].time[i].parameter.parameterName)
    hualienStatus.innerHTML = weatherData.records.location[10].weatherElement[0].time[i].parameter.parameterName;
    changImg(hualienStatusIcon,weatherData.records.location[10].weatherElement[0].time[i].parameter.parameterName)
    taitungStatus.innerHTML = weatherData.records.location[12].weatherElement[0].time[i].parameter.parameterName;
    changImg(taitungStatusIcon,weatherData.records.location[12].weatherElement[0].time[i].parameter.parameterName)
}

//讀取並修改最低溫度
function readMinTemp() {
    let i;
    if(time === "day"){
        i = 0;
    }else if(time === "night"){
        i = 1;
    }
    taipeiMinTemp.innerHTML = weatherData.records.location[5].weatherElement[2].time[i].parameter.parameterName;
    newTaipeiMinTemp.innerHTML = weatherData.records.location[1].weatherElement[2].time[i].parameter.parameterName;
    taichungMinTemp.innerHTML = weatherData.records.location[11].weatherElement[2].time[i].parameter.parameterName;
    tainanMinTemp.innerHTML = weatherData.records.location[6].weatherElement[2].time[i].parameter.parameterName;
    kaohsiungMinTemp.innerHTML = weatherData.records.location[15].weatherElement[2].time[i].parameter.parameterName;
    pingtungMinTemp.innerHTML = weatherData.records.location[17].weatherElement[2].time[i].parameter.parameterName;
    hualienMinTemp.innerHTML = weatherData.records.location[10].weatherElement[2].time[i].parameter.parameterName;
    taitungMinTemp.innerHTML = weatherData.records.location[12].weatherElement[2].time[i].parameter.parameterName;
}

//讀取並修改最高溫度
function readMaxTemp() {
    let i;
    if(time === "day"){
        i = 0;
    }else if(time === "night"){
        i = 1;
    }
    taipeiMaxTemp.innerHTML = weatherData.records.location[5].weatherElement[4].time[i].parameter.parameterName;
    newTaipeiMaxTemp.innerHTML = weatherData.records.location[1].weatherElement[4].time[i].parameter.parameterName;
    taichungMaxTemp.innerHTML = weatherData.records.location[11].weatherElement[4].time[i].parameter.parameterName;
    tainanMaxTemp.innerHTML = weatherData.records.location[6].weatherElement[4].time[i].parameter.parameterName;
    kaohsiungMaxTemp.innerHTML = weatherData.records.location[15].weatherElement[4].time[i].parameter.parameterName;
    pingtungMaxTemp.innerHTML = weatherData.records.location[17].weatherElement[4].time[i].parameter.parameterName;
    hualienMaxTemp.innerHTML = weatherData.records.location[10].weatherElement[4].time[i].parameter.parameterName;
    taitungMaxTemp.innerHTML = weatherData.records.location[12].weatherElement[4].time[i].parameter.parameterName;
}

//fetch
let weatherData;
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-6596876D-10D1-4BA9-92C6-F4E4454C42A8", {method: 'get'})
    .then(res => res.json())
    .then((data)=>{
        weatherData = data;
        console.log(weatherData);
        readStatus();
        readMinTemp();
        readMaxTemp();
    })
    .catch(err => console.log(err))
