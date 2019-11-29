$(function(){
    　//ローディングエリアを取得
    　var loading = $("#loading");
    　//ローディングエリアを隠す処理
    　var isHidden = function(){
    　　loading.fadeOut(2000); //1000ミリ秒かけてフェードアウト
    　};
    　//1000ミリ秒後にloadingFunc開始
    　setTimeout(isHidden,3000);
});


window.onload=function(){
    var now = new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var today = now.getDate();
    // today = 26;
    // year=2020;
    // console.log(year);
    // console.log(month);
    // console.log(today);


    var target = document.getElementsByClassName('on_img');

    //ドアの処理
　  for (var i =0; i <target.length; i++) {
        if((i+1<today&&month==12)||year>2019){
            target[i].classList.add('opened');
        }else if(i+1==today&&month==12){
            target[i].classList.add('patapata');
            target[i].addEventListener("click", function(){
                this.classList.remove('patapata');
                this.classList.add('open');
    　　    });
        }else{
            target[0].classList.add('patapata');
            target[0].addEventListener("click", function(){
                this.classList.remove('patapata');
                this.classList.add('open');
    　　    });
        }    
　  }

    //ロゴの雪が積もる
    setTimeout(snowing3, 0);
    setTimeout(snowing4, 10000);
    setTimeout(snowing5, 20000);
    setTimeout(snowing6, 30000);
    setTimeout(snowing7, 40000);
    setTimeout(snowing8, 50000);
    setTimeout(snowing9, 60000);
    setTimeout(snowing10, 70000);
    setTimeout(snowing11, 80000);
    setTimeout(snowing12, 90000);

    function snowing3(){
        document.getElementById("snow3").classList.add('snowing');
    }
    function snowing4(){
        document.getElementById("snow4").classList.add('snowing');
    }
    function snowing5(){
        document.getElementById("snow5").classList.add('snowing');
    }
    function snowing6(){
        document.getElementById("snow6").classList.add('snowing');
    }
    function snowing7(){
        document.getElementById("snow7").classList.add('snowing');
    }
    function snowing8(){
        document.getElementById("snow8").classList.add('snowing');
    }
    function snowing9(){
        document.getElementById("snow9").classList.add('snowing');
    }
    function snowing10(){
        document.getElementById("snow10").classList.add('snowing');
    }
    function snowing11(){
        document.getElementById("snow11").classList.add('snowing');
    }
    function snowing12(){
        document.getElementById("snow12").classList.add('snowing');
    }

    

    //モーダル
    if(today>=1){
        var modalArea1 = document.getElementById('modalArea1');
        var toggle1 = [document.getElementById('openModal1'),document.getElementById('closeModal1'),document.getElementById('modalBg1')];
        for(let i=0; i<toggle1.length ; i++){
            toggle1[i].addEventListener('click',function(){
                setTimeout(showing1,800);
                setTimeout(writeLine1,1000);
                setTimeout(showText1,1200);
            },false);
        }
        function showing1(){
            modalArea1.classList.toggle('is-show');
        } 
        function writeLine1(){
            document.getElementById('topLine1_1').classList.toggle('writingLine');
            document.getElementById('bottomLine1_1').classList.toggle('writingLine');
            document.getElementById('topLine1_2').classList.toggle('writingLine');
            document.getElementById('bottomLine1_2').classList.toggle('writingLine');
        }
        function showText1(){
            document.getElementById('text1_1').classList.toggle('showingText1');
            document.getElementById('text1_2').classList.toggle('showingText2');
            document.getElementById('text1_3').classList.toggle('showingText3');
        }
    }
    if((today>=2&&month==12)||year>2019){
        var modalArea2 = document.getElementById('modalArea2');
        var toggle2 = [document.getElementById('openModal2'),document.getElementById('closeModal2'),document.getElementById('modalBg2')];
        for(let i=0; i<toggle2.length ; i++){
            toggle2[i].addEventListener('click',function(){
                setTimeout(showing2,800);
                setTimeout(writeLine2,1000);
                setTimeout(showText2,1200);
            },false);
        }
        function showing2(){
            modalArea2.classList.toggle('is-show');
        }
        function writeLine2(){
            document.getElementById('topLine2_1').classList.toggle('writingLine');
            document.getElementById('bottomLine2_1').classList.toggle('writingLine');
            document.getElementById('topLine2_2').classList.toggle('writingLine');
            document.getElementById('bottomLine2_2').classList.toggle('writingLine');
        }
        function showText2(){
            document.getElementById('text2_1').classList.toggle('showingText1');
            document.getElementById('text2_2').classList.toggle('showingText2');
            document.getElementById('text2_3').classList.toggle('showingText3');
        }
    }
    if((today>=3&&month==12)||year>2019){
        var modalArea3 = document.getElementById('modalArea3');
        var toggle3 = [document.getElementById('openModal3'),document.getElementById('closeModal3'),document.getElementById('modalBg3')];
        for(let i=0; i<toggle3.length ; i++){
            toggle3[i].addEventListener('click',function(){
                setTimeout(showing3,800);
                setTimeout(writeLine3,1000);
                setTimeout(showText3,1200);
            },false);
        }
        function showing3(){
            modalArea3.classList.toggle('is-show');
        }
        function writeLine3(){
            document.getElementById('topLine3_1').classList.toggle('writingLine');
            document.getElementById('bottomLine3_1').classList.toggle('writingLine');
            document.getElementById('topLine3_2').classList.toggle('writingLine');
            document.getElementById('bottomLine3_2').classList.toggle('writingLine');
        }
        function showText3(){
            document.getElementById('text3_1').classList.toggle('showingText1');
            document.getElementById('text3_2').classList.toggle('showingText2');
            document.getElementById('text3_3').classList.toggle('showingText3');
        }
    }
    if((today>=4&&month==12)||year>2019){
        var modalArea4 = document.getElementById('modalArea4');
        var toggle4 = [document.getElementById('openModal4'),document.getElementById('closeModal4'),document.getElementById('modalBg4')];
        for(let i=0; i<toggle4.length ; i++){
            toggle4[i].addEventListener('click',function(){
                setTimeout(showing4,800);
                setTimeout(writeLine4,1000);
                setTimeout(showText4,1200);
            },false);
        }
        function showing4(){
            modalArea4.classList.toggle('is-show');
        }
        function writeLine4(){
            document.getElementById('topLine4_1').classList.toggle('writingLine');
            document.getElementById('bottomLine4_1').classList.toggle('writingLine');
            document.getElementById('topLine4_2').classList.toggle('writingLine');
            document.getElementById('bottomLine4_2').classList.toggle('writingLine');
        }
        function showText4(){
            document.getElementById('text4_1').classList.toggle('showingText1');
            document.getElementById('text4_2').classList.toggle('showingText2');
            document.getElementById('text4_3').classList.toggle('showingText3');
        }
    }
    if((today>=5&&month==12)||year>2019){
        var modalArea5 = document.getElementById('modalArea5');
        var toggle5 = [document.getElementById('openModal5'),document.getElementById('closeModal5'),document.getElementById('modalBg5')];
        for(let i=0; i<toggle5.length ; i++){
            toggle5[i].addEventListener('click',function(){
                setTimeout(showing5,800);
                setTimeout(writeLine5,1000);
                setTimeout(showText5,1200);
            },false);
        }
        function showing5(){
            modalArea5.classList.toggle('is-show');
        }
        function writeLine5(){
            document.getElementById('topLine5_1').classList.toggle('writingLine');
            document.getElementById('bottomLine5_1').classList.toggle('writingLine');
            document.getElementById('topLine5_2').classList.toggle('writingLine');
            document.getElementById('bottomLine5_2').classList.toggle('writingLine');
        }
        function showText5(){
            document.getElementById('text5_1').classList.toggle('showingText1');
            document.getElementById('text5_2').classList.toggle('showingText2');
            document.getElementById('text5_3').classList.toggle('showingText3');
        }
    }
    if((today>=6&&month==12)||year>2019){
        var modalArea6 = document.getElementById('modalArea6');
        var toggle6 = [document.getElementById('openModal6'),document.getElementById('closeModal6'),document.getElementById('modalBg6')];
        for(let i=0; i<toggle6.length ; i++){
            toggle6[i].addEventListener('click',function(){
                setTimeout(showing6,800);
                setTimeout(writeLine6,1000);
                setTimeout(showText6,1200);
            },false);
        }
        function showing6(){
            modalArea6.classList.toggle('is-show');
        }
        function writeLine6(){
            document.getElementById('topLine6_1').classList.toggle('writingLine');
            document.getElementById('bottomLine6_1').classList.toggle('writingLine');
            document.getElementById('topLine6_2').classList.toggle('writingLine');
            document.getElementById('bottomLine6_2').classList.toggle('writingLine');
        }
        function showText6(){
            document.getElementById('text6_1').classList.toggle('showingText1');
            document.getElementById('text6_2').classList.toggle('showingText2');
            document.getElementById('text6_3').classList.toggle('showingText3');
        }
    }
    if((today>=7&&month==12)||year>2019){
        var modalArea7 = document.getElementById('modalArea7');
        var toggle7 = [document.getElementById('openModal7'),document.getElementById('closeModal7'),document.getElementById('modalBg7')];
        for(let i=0; i<toggle7.length ; i++){
            toggle7[i].addEventListener('click',function(){
                setTimeout(showing7,800);
                setTimeout(writeLine7,1000);
                setTimeout(showText7,1200);
            },false);
        }
        function showing7(){
            modalArea7.classList.toggle('is-show');
        }
        function writeLine7(){
            document.getElementById('topLine7_1').classList.toggle('writingLine');
            document.getElementById('bottomLine7_1').classList.toggle('writingLine');
            document.getElementById('topLine7_2').classList.toggle('writingLine');
            document.getElementById('bottomLine7_2').classList.toggle('writingLine');
        }
        function showText7(){
            document.getElementById('text7_1').classList.toggle('showingText1');
            document.getElementById('text7_2').classList.toggle('showingText2');
            document.getElementById('text7_3').classList.toggle('showingText3');
        }
    }
    if((today>=8&&month==12)||year>2019){
        var modalArea8 = document.getElementById('modalArea8');
        var toggle8 = [document.getElementById('openModal8'),document.getElementById('closeModal8'),document.getElementById('modalBg8')];
        for(let i=0; i<toggle8.length ; i++){
            toggle8[i].addEventListener('click',function(){
                setTimeout(showing8,800);
                setTimeout(writeLine8,1000);
                setTimeout(showText8,1200);
            },false);
        }
        function showing8(){
            modalArea8.classList.toggle('is-show');
        }
        function writeLine8(){
            document.getElementById('topLine8_1').classList.toggle('writingLine');
            document.getElementById('bottomLine8_1').classList.toggle('writingLine');
            document.getElementById('topLine8_2').classList.toggle('writingLine');
            document.getElementById('bottomLine8_2').classList.toggle('writingLine');
        }
        function showText8(){
            document.getElementById('text8_1').classList.toggle('showingText1');
            document.getElementById('text8_2').classList.toggle('showingText2');
            document.getElementById('text8_3').classList.toggle('showingText3');
        }
    }
    if((today>=9&&month==12)||year>2019){
        var modalArea9 = document.getElementById('modalArea9');
        var toggle9 = [document.getElementById('openModal9'),document.getElementById('closeModal9'),document.getElementById('modalBg9')];
        for(let i=0; i<toggle9.length ; i++){
            toggle9[i].addEventListener('click',function(){
                setTimeout(showing9,800);
                setTimeout(writeLine9,1000);
                setTimeout(showText9,1200);
            },false);
        }
        function showing9(){
            modalArea9.classList.toggle('is-show');
        }
        function writeLine9(){
            document.getElementById('topLine9_1').classList.toggle('writingLine');
            document.getElementById('bottomLine9_1').classList.toggle('writingLine');
            document.getElementById('topLine9_2').classList.toggle('writingLine');
            document.getElementById('bottomLine9_2').classList.toggle('writingLine');
        }
        function showText9(){
            document.getElementById('text9_1').classList.toggle('showingText1');
            document.getElementById('text9_2').classList.toggle('showingText2');
            document.getElementById('text9_3').classList.toggle('showingText3');
        }
    }
    if((today>=10&&month==12)||year>2019){
        var modalArea10 = document.getElementById('modalArea10');
        var toggle10 = [document.getElementById('openModal10'),document.getElementById('closeModal10'),document.getElementById('modalBg10')];
        for(let i=0; i<toggle10.length ; i++){
            toggle10[i].addEventListener('click',function(){
                setTimeout(showing10,800);
                setTimeout(writeLine10,1000);
                setTimeout(showText10,1200);
            },false);
        }
        function showing10(){
            modalArea10.classList.toggle('is-show');
        }
        function writeLine10(){
            document.getElementById('topLine10_1').classList.toggle('writingLine');
            document.getElementById('bottomLine10_1').classList.toggle('writingLine');
            document.getElementById('topLine10_2').classList.toggle('writingLine');
            document.getElementById('bottomLine10_2').classList.toggle('writingLine');
        }
        function showText10(){
            document.getElementById('text10_1').classList.toggle('showingText1');
            document.getElementById('text10_2').classList.toggle('showingText2');
            document.getElementById('text10_3').classList.toggle('showingText3');
        }
    }
    if((today>=11&&month==12)||year>2019){
        var modalArea11 = document.getElementById('modalArea11');
        var toggle11 = [document.getElementById('openModal11'),document.getElementById('closeModal11'),document.getElementById('modalBg11')];
        for(let i=0; i<toggle11.length ; i++){
            toggle11[i].addEventListener('click',function(){
                setTimeout(showing11,800);
                setTimeout(writeLine11,1000);
                setTimeout(showText11,1200);
            },false);
        }
        function showing11(){
            modalArea11.classList.toggle('is-show');
        }
        function writeLine11(){
            document.getElementById('topLine11_1').classList.toggle('writingLine');
            document.getElementById('bottomLine11_1').classList.toggle('writingLine');
            document.getElementById('topLine11_2').classList.toggle('writingLine');
            document.getElementById('bottomLine11_2').classList.toggle('writingLine');
        }
        function showText11(){
            document.getElementById('text11_1').classList.toggle('showingText1');
            document.getElementById('text11_2').classList.toggle('showingText2');
            document.getElementById('text11_3').classList.toggle('showingText3');
        }
    }
    if((today>=12&&month==12)||year>2019){
        var modalArea12 = document.getElementById('modalArea12');
        var toggle12 = [document.getElementById('openModal12'),document.getElementById('closeModal12'),document.getElementById('modalBg12')];
        for(let i=0; i<toggle12.length ; i++){
            toggle12[i].addEventListener('click',function(){
                setTimeout(showing12,800);
                setTimeout(writeLine12,1000);
                setTimeout(showText12,1200);
            },false);
        }
        function showing12(){
            modalArea12.classList.toggle('is-show');
        }
        function writeLine12(){
            document.getElementById('topLine12_1').classList.toggle('writingLine');
            document.getElementById('bottomLine12_1').classList.toggle('writingLine');
            document.getElementById('topLine12_2').classList.toggle('writingLine');
            document.getElementById('bottomLine12_2').classList.toggle('writingLine');
        }
        function showText12(){
            document.getElementById('text12_1').classList.toggle('showingText1');
            document.getElementById('text12_2').classList.toggle('showingText2');
            document.getElementById('text12_3').classList.toggle('showingText3');
        }
    }
    if((today>=13&&month==12)||year>2019){
        var modalArea13 = document.getElementById('modalArea13');
        var toggle13 = [document.getElementById('openModal13'),document.getElementById('closeModal13'),document.getElementById('modalBg13')];
        for(let i=0; i<toggle13.length ; i++){
                toggle13[i].addEventListener('click',function(){
            setTimeout(showing13,800);
            setTimeout(writeLine13,1000);
            setTimeout(showText13,1200);
            },false);
        }
        function showing13(){
            modalArea13.classList.toggle('is-show');
        }
        function writeLine13(){
            document.getElementById('topLine13_1').classList.toggle('writingLine');
            document.getElementById('bottomLine13_1').classList.toggle('writingLine');
            document.getElementById('topLine13_2').classList.toggle('writingLine');
            document.getElementById('bottomLine13_2').classList.toggle('writingLine');
        }
        function showText13(){
            document.getElementById('text13_1').classList.toggle('showingText1');
            document.getElementById('text13_2').classList.toggle('showingText2');
            document.getElementById('text13_3').classList.toggle('showingText3');
        }
    }
    if((today>=14&&month==12)||year>2019){
        var modalArea14 = document.getElementById('modalArea14');
        var toggle14 = [document.getElementById('openModal14'),document.getElementById('closeModal14'),document.getElementById('modalBg14')];
        for(let i=0; i<toggle14.length ; i++){
                toggle14[i].addEventListener('click',function(){
            setTimeout(showing14,800);
            setTimeout(writeLine14,1000);
            setTimeout(showText14,1200);
            },false);
        }
        function showing14(){
            modalArea14.classList.toggle('is-show');
        }
        function writeLine14(){
            document.getElementById('topLine14_1').classList.toggle('writingLine');
            document.getElementById('bottomLine14_1').classList.toggle('writingLine');
            document.getElementById('topLine14_2').classList.toggle('writingLine');
            document.getElementById('bottomLine14_2').classList.toggle('writingLine');
        }
        function showText14(){
            document.getElementById('text14_1').classList.toggle('showingText1');
            document.getElementById('text14_2').classList.toggle('showingText2');
            document.getElementById('text14_3').classList.toggle('showingText3');
        }
    }
    if((today>=15&&month==12)||year>2019){
        var modalArea15 = document.getElementById('modalArea15');
        var toggle15 = [document.getElementById('openModal15'),document.getElementById('closeModal15'),document.getElementById('modalBg15')];
        for(let i=0; i<toggle15.length ; i++){
            toggle15[i].addEventListener('click',function(){
                setTimeout(showing15,800);
                setTimeout(writeLine15,1000);
                setTimeout(showText15,1200);
            },false);
        }
        function showing15(){
            modalArea15.classList.toggle('is-show');
        }
        function writeLine15(){
            document.getElementById('topLine15_1').classList.toggle('writingLine');
            document.getElementById('bottomLine15_1').classList.toggle('writingLine');
            document.getElementById('topLine15_2').classList.toggle('writingLine');
            document.getElementById('bottomLine15_2').classList.toggle('writingLine');
        }
        function showText15(){
            document.getElementById('text15_1').classList.toggle('showingText1');
            document.getElementById('text15_2').classList.toggle('showingText2');
            document.getElementById('text15_3').classList.toggle('showingText3');
        }
    }
    if((today>=16&&month==12)||year>2019){
        var modalArea16 = document.getElementById('modalArea16');
        var toggle16 = [document.getElementById('openModal16'),document.getElementById('closeModal16'),document.getElementById('modalBg16')];
        for(let i=0; i<toggle6.length ; i++){
                toggle16[i].addEventListener('click',function(){
            setTimeout(showing16,800);
            setTimeout(writeLine16,1000);
            setTimeout(showText16,1200);
            },false);
        }
        function showing16(){
            modalArea16.classList.toggle('is-show');
        }
        function writeLine16(){
            document.getElementById('topLine16_1').classList.toggle('writingLine');
            document.getElementById('bottomLine16_1').classList.toggle('writingLine');
            document.getElementById('topLine16_2').classList.toggle('writingLine');
            document.getElementById('bottomLine16_2').classList.toggle('writingLine');
        }
        function showText16(){
            document.getElementById('text16_1').classList.toggle('showingText1');
            document.getElementById('text16_2').classList.toggle('showingText2');
            document.getElementById('text16_3').classList.toggle('showingText3');
        }
    }
    if((today>=17&&month==12)||year>2019){
        var modalArea17 = document.getElementById('modalArea17');
        var toggle17 = [document.getElementById('openModal17'),document.getElementById('closeModal17'),document.getElementById('modalBg17')];
        for(let i=0; i<toggle17.length ; i++){
                toggle17[i].addEventListener('click',function(){
            setTimeout(showing17,800);
            setTimeout(writeLine17,1000);
            setTimeout(showText17,1200);
            },false);
        }
        function showing17(){
            modalArea17.classList.toggle('is-show');
        }
        function writeLine17(){
            document.getElementById('topLine17_1').classList.toggle('writingLine');
            document.getElementById('bottomLine17_1').classList.toggle('writingLine');
            document.getElementById('topLine17_2').classList.toggle('writingLine');
            document.getElementById('bottomLine17_2').classList.toggle('writingLine');
        }
        function showText17(){
            document.getElementById('text17_1').classList.toggle('showingText1');
            document.getElementById('text17_2').classList.toggle('showingText2');
            document.getElementById('text17_3').classList.toggle('showingText3');
        }
    }
    if((today>=18&&month==12)||year>2019){
        var modalArea18 = document.getElementById('modalArea18');
        var toggle18 = [document.getElementById('openModal18'),document.getElementById('closeModal18'),document.getElementById('modalBg18')];
        for(let i=0; i<toggle18.length ; i++){
            toggle18[i].addEventListener('click',function(){
            setTimeout(showing18,800);
            setTimeout(writeLine18,1000);
            setTimeout(showText18,1200);
            },false);
        }
        function showing18(){
            modalArea18.classList.toggle('is-show');
        }
        function writeLine18(){
            document.getElementById('topLine18_1').classList.toggle('writingLine');
            document.getElementById('bottomLine18_1').classList.toggle('writingLine');
            document.getElementById('topLine18_2').classList.toggle('writingLine');
            document.getElementById('bottomLine18_2').classList.toggle('writingLine');
        }
        function showText18(){
            document.getElementById('text18_1').classList.toggle('showingText1');
            document.getElementById('text18_2').classList.toggle('showingText2');
            document.getElementById('text18_3').classList.toggle('showingText3');
        }
    }
    if((today>=19&&month==12)||year>2019){
        var modalArea19 = document.getElementById('modalArea19');
        var toggle19 = [document.getElementById('openModal19'),document.getElementById('closeModal19'),document.getElementById('modalBg19')];
        for(let i=0; i<toggle19.length ; i++){
            toggle19[i].addEventListener('click',function(){
                setTimeout(showing19,800);
                setTimeout(writeLine19,1000);
                setTimeout(showText19,1200);
            },false);
        }
        function showing19(){
            modalArea19.classList.toggle('is-show');
        }
        function writeLine19(){
            document.getElementById('topLine19_1').classList.toggle('writingLine');
            document.getElementById('bottomLine19_1').classList.toggle('writingLine');
            document.getElementById('topLine19_2').classList.toggle('writingLine');
            document.getElementById('bottomLine19_2').classList.toggle('writingLine');
        }
        function showText19(){
            document.getElementById('text19_1').classList.toggle('showingText1');
            document.getElementById('text19_2').classList.toggle('showingText2');
            document.getElementById('text19_3').classList.toggle('showingText3');
        }
    }
    if((today>=20&&month==12)||year>2019){
        var modalArea20 = document.getElementById('modalArea20');
        var toggle20 = [document.getElementById('openModal20'),document.getElementById('closeModal20'),document.getElementById('modalBg20')];
        for(let i=0; i<toggle20.length ; i++){
            toggle20[i].addEventListener('click',function(){
                setTimeout(showing20,800);
                setTimeout(writeLine20,1000);
                setTimeout(showText20,1200);
            },false);
        }
        function showing20(){
            modalArea20.classList.toggle('is-show');
        }
        function writeLine20(){
            document.getElementById('topLine20_1').classList.toggle('writingLine');
            document.getElementById('bottomLine20_1').classList.toggle('writingLine');
            document.getElementById('topLine20_2').classList.toggle('writingLine');
            document.getElementById('bottomLine20_2').classList.toggle('writingLine');
        }
        function showText20(){
            document.getElementById('text20_1').classList.toggle('showingText1');
            document.getElementById('text20_2').classList.toggle('showingText2');
            document.getElementById('text20_3').classList.toggle('showingText3');
        }
    }
    if((today>=21&&month==12)||year>2019){
        var modalArea21 = document.getElementById('modalArea21');
        var toggle21 = [document.getElementById('openModal21'),document.getElementById('closeModal21'),document.getElementById('modalBg21')];
        for(let i=0; i<toggle21.length ; i++){
            toggle21[i].addEventListener('click',function(){
                setTimeout(showing21,800);
                setTimeout(writeLine21,1000);
                setTimeout(showText21,1200);
            },false);
        }
        function showing21(){
            modalArea21.classList.toggle('is-show');
        }
        function writeLine21(){
            document.getElementById('topLine21_1').classList.toggle('writingLine');
            document.getElementById('bottomLine21_1').classList.toggle('writingLine');
            document.getElementById('topLine21_2').classList.toggle('writingLine');
            document.getElementById('bottomLine21_2').classList.toggle('writingLine');
        }
        function showText21(){
            document.getElementById('text21_1').classList.toggle('showingText1');
            document.getElementById('text21_2').classList.toggle('showingText2');
            document.getElementById('text21_3').classList.toggle('showingText3');
        }
    }
    if((today>=22&&month==12)||year>2019){
        var modalArea22 = document.getElementById('modalArea22');
        var toggle22 = [document.getElementById('openModal22'),document.getElementById('closeModal22'),document.getElementById('modalBg22')];
        for(let i=0; i<toggle22.length ; i++){
            toggle22[i].addEventListener('click',function(){
                setTimeout(showing22,800);
                setTimeout(writeLine22,1000);
                setTimeout(showText22,1200);
            },false);
        }
        function showing22(){
            modalArea22.classList.toggle('is-show');
        }
        function writeLine22(){
            document.getElementById('topLine22_1').classList.toggle('writingLine');
            document.getElementById('bottomLine22_1').classList.toggle('writingLine');
            document.getElementById('topLine22_2').classList.toggle('writingLine');
            document.getElementById('bottomLine22_2').classList.toggle('writingLine');
        }
        function showText22(){
            document.getElementById('text22_1').classList.toggle('showingText1');
            document.getElementById('text22_2').classList.toggle('showingText2');
            document.getElementById('text22_3').classList.toggle('showingText3');
        }
    }
    if((today>=23&&month==12)||year>2019){
        var modalArea23 = document.getElementById('modalArea23');
        var toggle23 = [document.getElementById('openModal23'),document.getElementById('closeModal23'),document.getElementById('modalBg23')];
        for(let i=0; i<toggle23.length ; i++){
            toggle23[i].addEventListener('click',function(){
                setTimeout(showing23,800);
                setTimeout(writeLine23,1000);
                setTimeout(showText23,1200);
            },false);
        }
        function showing23(){
            modalArea23.classList.toggle('is-show');
        }
        function writeLine23(){
            document.getElementById('topLine23_1').classList.toggle('writingLine');
            document.getElementById('bottomLine23_1').classList.toggle('writingLine');
            document.getElementById('topLine23_2').classList.toggle('writingLine');
            document.getElementById('bottomLine23_2').classList.toggle('writingLine');
        }
        function showText23(){
            document.getElementById('text23_1').classList.toggle('showingText1');
            document.getElementById('text23_2').classList.toggle('showingText2');
            document.getElementById('text23_3').classList.toggle('showingText3');
        }
    }
    if((today>=24&&month==12)||year>2019){
        var modalArea24 = document.getElementById('modalArea24');
        var toggle24 = [document.getElementById('openModal24'),document.getElementById('closeModal24'),document.getElementById('modalBg24')];
        for(let i=0; i<toggle24.length ; i++){
            toggle24[i].addEventListener('click',function(){
                setTimeout(showing24,800);
                setTimeout(writeLine24,1000);
                setTimeout(showText24,1200);
            },false);
        }
        function showing24(){
            modalArea24.classList.toggle('is-show');
        }
        function writeLine24(){
            document.getElementById('topLine24_1').classList.toggle('writingLine');
            document.getElementById('bottomLine24_1').classList.toggle('writingLine');
            document.getElementById('topLine24_2').classList.toggle('writingLine');
            document.getElementById('bottomLine24_2').classList.toggle('writingLine');
        }
        function showText24(){
            document.getElementById('text24_1').classList.toggle('showingText1');
            document.getElementById('text24_2').classList.toggle('showingText2');
            document.getElementById('text24_3').classList.toggle('showingText3');
        }
    }
    if((today>=25&&month==12)||year>2019){
        var modalArea25 = document.getElementById('modalArea25');
        var toggle25 = [document.getElementById('openModal25'),document.getElementById('closeModal25'),document.getElementById('modalBg25')];
        for(let i=0; i<toggle5.length ; i++){
            toggle25[i].addEventListener('click',function(){
                setTimeout(showing25,800);
                setTimeout(writeLine25,1000);
                setTimeout(showText25,1200);
            },false);
        }
        function showing25(){
            modalArea25.classList.toggle('is-show');
        }
        function writeLine25(){
            document.getElementById('topLine25_1').classList.toggle('writingLine');
            document.getElementById('bottomLine25_1').classList.toggle('writingLine');
            document.getElementById('topLine25_2').classList.toggle('writingLine');
            document.getElementById('bottomLine25_2').classList.toggle('writingLine');
        }
        function showText25(){
            document.getElementById('text25_1').classList.toggle('showingText1');
            document.getElementById('text25_2').classList.toggle('showingText2');
            document.getElementById('text25_3').classList.toggle('showingText3');
        }
    }

    

    
    
}


