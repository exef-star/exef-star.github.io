window.addEventListener('load',()=>{
    var d = new Date();
    m=d.getMonth()+1;
    dd=d.getDate();
    y=d.getFullYear();
    //cookie函数
    
    
    function randomNum(minNum,maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random()*minNum+1,10); 
            break; 
            case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
                default: 
                    return 0; 
                break; 
        } 
    } 
    //纪念日
    
    if(m==9&&dd==18){
        document.getElementById("grays").innerText=":root{filter: grayscale(100%);}";
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("今天是1931.9.18九一八事变"+(y-1931).toString()+"周年。\n勿忘国耻，振兴中华！");
            sessionStorage.setItem("isPopupWindow","1");
        }    
    }
    if(m==7&&dd==7){
        document.getElementById("grays").innerText=":root{filter: grayscale(100%);}";
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("今天是1937.7.7卢沟桥事变"+(y-1937).toString()+"周年。\n勿忘国耻，振兴中华！");
            sessionStorage.setItem("isPopupWindow","1");
        }    
    }
    if(m==12&&dd==13){
        document.getElementById("grays").innerText=":root{filter: grayscale(100%);}";
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("今天是1937.12.13南京大屠杀"+(y-1937).toString()+"周年暨国家公祭日，30万余同胞的血海深仇不能忘记。\n勿忘国耻，振兴中华！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    //节假日
    
    if(m==10&&dd<=5){//国庆节
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("祖国"+(y-1949).toString()+"岁生日快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if(m==8&&dd==15){//鬼子投降
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("鬼子投降"+(y-1945).toString()+"年了！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if(m==1&&dd==1){//元旦节
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire(y.toString()+"年元旦快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if(m==3&&dd==8){//妇女节
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("各位女神们，妇女节快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    l=["震惊！日本岛于今日沉没！","Minecraft 2.0发布！","非常抱歉，因为不可控原因，博客将于明天停止运营，再见","很遗憾，PhigrOS已崩溃，愿我们在像素塔重聚","今天是愚人节，你被骗了吗？","Never gonna give you up~","？！"]
    console.log(m,dd);
    if(m==4&&dd==1){//愚人节，整活
        console.log(l[randomNum(0,l.length-1)]);
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire(l[randomNum(0,l.length-1)]);
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if(m==5&&dd==1){//劳动节
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("劳动节快乐！\n为助力各行各业发展辛勤工作的人们致敬！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if(m==6&&dd==1){//儿童节
        console.log("各位小朋友们，儿童节快乐！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("各位小朋友们，儿童节快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if(m==7&&dd==1){//建党节
        console.log("中国共产党"+(y-1921).toString()+"岁生日快乐");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("中国共产党"+(y-1921).toString()+"岁生日快乐");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    
    //传统节日部分
    
    if(m==4&&dd==4||(m==4&&dd==5)){//清明节
        console.log("清明安康\n向烈士致敬！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("清明安康\n向烈士致敬！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    
    var lunar=calendarFormatter.solar2lunar();
    
    //农历采用汉字计算，防止出现闰月导致问题
    
    if((lunar["IMonthCn"]=="正月"&&lunar["IDayCn"]=="初六")||(lunar["IMonthCn"]=="正月"&&lunar["IDayCn"]=="初五")||(lunar["IMonthCn"]=="正月"&&lunar["IDayCn"]=="初四")||(lunar["IMonthCn"]=="正月"&&lunar["IDayCn"]=="初三")||(lunar["IMonthCn"]=="正月"&&lunar["IDayCn"]=="初二")||(lunar["IMonthCn"]=="正月"&&lunar["IDayCn"]=="初一")||(lunar["IMonthCn"]=="腊月"&&lunar["IDayCn"]=="三十")||(lunar["IMonthCn"]=="腊月"&&lunar["IDayCn"]=="廿九")){
        //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
        console.log(y.toString()+"年新年快乐！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire(y.toString()+"年新年快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if((lunar["IMonthCn"]=="正月"&&lunar["IDayCn"]=="十五")){
        //元宵节
        console.log("元宵节快乐！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("元宵节快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if((lunar["IMonthCn"]=="正月"&&lunar["IDayCn"]=="十五")){
        //元宵节
        console.log("元宵节快乐！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("元宵节快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if((lunar["IMonthCn"]=="五月"&&lunar["IDayCn"]=="初五")){
        //端午节
        console.log("端午节快乐！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("端午节快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if((lunar["IMonthCn"]=="七月"&&lunar["IDayCn"]=="初七")){
        //七夕节
        console.log("七夕节快乐！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("七夕节快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if((lunar["IMonthCn"]=="八月"&&lunar["IDayCn"]=="十五")){
        //中秋节
        console.log("中秋节快乐！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("中秋节快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    if((lunar["IMonthCn"]=="九月"&&lunar["IDayCn"]=="初九")){
        //重阳节
        console.log("重阳节快乐！");
        if(sessionStorage.getItem("isPopupWindow")!="1"){
            Swal.fire("重阳节快乐！");
            sessionStorage.setItem("isPopupWindow","1");
        }
    }
    })