var arr1=['img/Mieso.jpg','img/Mieso1.jpg','img/Mieso2.jpg']; 
var pos=0; 
$(document).ready(function () {
    var interval=5000; 
    var loaderHtml='';
    arr1.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });

    $('.load-images').html(loaderHtml);

    var htm='';
    for(var i=0;i<arr1.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';

    }

    $('#circles').html(htm);
    $('#slider1').html('<img src="'+arr1[0]+'" class="img-slide image-animated"">');
    $('#0').css({'background':'#fff', 'color':'#fff'});


   
    function autoSlide(arr1,interval){

        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr1.length-1){
                pos=0;
            }

            $('#slider1').html('<img src="'+arr1[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr1.length-1)).css({'background':'transparent', 'color':'transparent'});
            }

        },interval);
    }
    autoSlide(arr1,interval);
    function next(){
        if(pos>arr1.length-2){
            pos=-1;
        }
        $('#slider1').html('<img src="'+arr1[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr1.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    function previous() {
        if(pos<1){
            pos=arr1.length;
        }
        $('#slider1').html('<img src="'+arr1[pos-1]+'" class="img-slide image-animated">');
        pos--;
        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr1.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    } 
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
});
function circleClick(position) {
    if(position!=pos){
        $('#slider1').html('<img src="'+arr1[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }
}
var arr2=['img/Selais.jpg','img/Selais1.jpg','img/Selais2.jpg']; //an arr2ay of image sources
var pos=0; //initializes image position in the arr2ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr2.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });
    $('.load-images').html(loaderHtml);
    var htm='';
    /* initializes the small circles html*/
    for(var i=0;i<arr2.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';
    }
    $('#circles').html(htm);//show small circles
    $('#slider2').html('<img src="'+arr2[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black   
    function autoSlide(arr2,interval){

        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr2.length-1){
                pos=0;
            }
            $('#slider2').html('<img src="'+arr2[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr2.length-1)).css({'background':'transparent', 'color':'transparent'});
            }
        },interval);
    }
    autoSlide(arr2,interval);//calls function autoSlide    
    function next(){
        if(pos>arr2.length-2){
            pos=-1;
        }
        $('#slider2').html('<img src="'+arr2[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;
        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr2.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }   
    function previous() {
        if(pos<1){
            pos=arr2.length;
        }
        $('#slider2').html('<img src="'+arr2[pos-1]+'" class="img-slide image-animated">');
        pos--;
        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr2.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }    
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });   
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
});
function circleClick(position) {
    if(position!=pos){
        $('#slider2').html('<img src="'+arr2[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }
}

var arr3=['img/Gulaipatin.jpg','img/Gulaipatin1.jpg','img/Gulaipatin2.jpg']; //an arr3ay of image sources
var pos=0; //initializes image position in the arr3ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr3.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });
    $('.load-images').html(loaderHtml);
    var htm='';
    for(var i=0;i<arr3.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';
    }
    $('#circles').html(htm);//show small circles
    $('#slider3').html('<img src="'+arr3[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black
    function autoSlide(arr3,interval){
        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr3.length-1){
                pos=0;
            }
            $('#slider3').html('<img src="'+arr3[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr3.length-1)).css({'background':'transparent', 'color':'transparent'});
            }
        },interval);
    }    
    autoSlide(arr3,interval);//calls function autoSlide   
    function next(){
        if(pos>arr3.length-2){
            pos=-1;
        }
        $('#slider3').html('<img src="'+arr3[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr3.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    function previous() {
        if(pos<1){
            pos=arr3.length;
        }
        $('#slider3').html('<img src="'+arr3[pos-1]+'" class="img-slide image-animated">');
        pos--;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr3.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }   
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });   
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });   
});
function circleClick(position) {
    if(position!=pos){
        $('#slider3').html('<img src="'+arr3[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }
}
var arr4=['img/NasiLemak.jpg','img/NasiLemak1.jpg','img/NasiLemak2.jpg']; //an arr4ay of image sources
var pos=0; //initializes image position in the arr4ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr4.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });
    $('.load-images').html(loaderHtml);
    var htm='';   
    for(var i=0;i<arr4.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';
    }
    $('#circles').html(htm);//show small circles
    $('#slider4').html('<img src="'+arr4[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black
    function autoSlide(arr4,interval){
        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr4.length-1){
                pos=0;
            }
            $('#slider4').html('<img src="'+arr4[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr4.length-1)).css({'background':'transparent', 'color':'transparent'});
            }
        },interval);
    }
    autoSlide(arr4,interval);//calls function autoSlide
    function next(){
        if(pos>arr4.length-2){
            pos=-1;
        }
        $('#slider4').html('<img src="'+arr4[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr4.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    function previous() {
        if(pos<1){
            pos=arr4.length;
        }
        $('#slider4').html('<img src="'+arr4[pos-1]+'" class="img-slide image-animated">');
        pos--;
        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr4.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }   
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });     
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });   
});
function circleClick(position) {
    if(position!=pos){
        $('#slider4').html('<img src="'+arr4[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }
}
var arr5=['img/Mie-Lendir.jpg','img/Mie-Lendir1.jpg','img/Mie-Lendir2.jpg']; //an arr1ay of image sources
var pos=0; //initializes image position in the arr1ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr5.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });
    $('.load-images').html(loaderHtml);
    var htm='';
    for(var i=0;i<arr5.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';
    }
    $('#circles').html(htm);//show small circles
    $('#slider5').html('<img src="'+arr5[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black
    function autoSlide(arr5,interval){
        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr5.length-1){
                pos=0;
            }
            $('#slider5').html('<img src="'+arr5[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr5.length-1)).css({'background':'transparent', 'color':'transparent'});
            }
        },interval);
    }    
    autoSlide(arr5,interval);//calls function autoSlide
    function next(){
        if(pos>arr5.length-2){
            pos=-1;
        }
        $('#slider5').html('<img src="'+arr5[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr5.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    } 
    function previous() {
        if(pos<1){
            pos=arr5.length;
        }
        $('#slider5').html('<img src="'+arr5[pos-1]+'" class="img-slide image-animated">');
        pos--;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr5.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }   
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });    
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
});
function circleClick(position) {
    if(position!=pos){
        $('#slider5').html('<img src="'+arr5[position]+'" class="img-slide image-animated">');//show image
        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        pos=position;
    }
}
var arr6=['img/Laksamana-Mengamuk.jpg','img/Laksamana-Mengamuk1.jpg','img/Laksamana-Mengamuk2.jpg']; //an arr1ay of image sources
var pos=0; //initializes image position in the arr1ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr6.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });
    $('.load-images').html(loaderHtml);
    var htm='';
    for(var i=0;i<arr6.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';
    }
    $('#circles').html(htm);//show small circles
    $('#slider6').html('<img src="'+arr6[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black
    function autoSlide(arr6,interval){
        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr6.length-1){
                pos=0;
            }
            $('#slider6').html('<img src="'+arr6[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr6.length-1)).css({'background':'transparent', 'color':'transparent'});
            }
        },interval);
    }
    autoSlide(arr6,interval);//calls function autoSlide
    function next(){
        if(pos>arr6.length-2){
            pos=-1;
        }
        $('#slider6').html('<img src="'+arr6[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr6.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    function previous() {
        if(pos<1){
            pos=arr6.length;
        }
        $('#slider6').html('<img src="'+arr6[pos-1]+'" class="img-slide image-animated">');
        pos--;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr6.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
});
function circleClick(position) {
    if(position!=pos){
        $('#slider6').html('<img src="'+arr6[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }
}
var arr7=['img/airmata.jpg','img/airmata1.jpg','img/airmata2.jpg']; //an arr1ay of image sources
var pos=0; //initializes image position in the arr1ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr7.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });
    $('.load-images').html(loaderHtml);
    var htm='';
    /* initializes the small circles html*/
    for(var i=0;i<arr7.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';
    }
    $('#circles').html(htm);//show small circles
    $('#slider7').html('<img src="'+arr7[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black
    function autoSlide(arr7,interval){
        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr7.length-1){
                pos=0;
            }
            $('#slider7').html('<img src="'+arr7[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr7.length-1)).css({'background':'transparent', 'color':'transparent'});
            }
        },interval);
    }
    autoSlide(arr7,interval);//calls function autoSlide
    function next(){
        if(pos>arr7.length-2){
            pos=-1;
        }
        $('#slider7').html('<img src="'+arr7[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr7.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    function previous() {
        if(pos<1){
            pos=arr7.length;
        }
        $('#slider7').html('<img src="'+arr7[pos-1]+'" class="img-slide image-animated">');
        pos--;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr7.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
});
function circleClick(position) {
    if(position!=pos){
        $('#slider7').html('<img src="'+arr7[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }
}
var arr8=['img/makinang.jpg','img/makinang1.jpg']; //an arr1ay of image sources
var pos=0; //initializes image position in the arr1ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr8.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });
    $('.load-images').html(loaderHtml);
    var htm='';
    /* initializes the small circles html*/
    for(var i=0;i<arr8.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';
    }
    $('#circles').html(htm);//show small circles
    $('#slider8').html('<img src="'+arr8[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black
    function autoSlide(arr8,interval){
        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr8.length-1){
                pos=0;
            }
            $('#slider8').html('<img src="'+arr8[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr8.length-1)).css({'background':'transparent', 'color':'transparent'});
            }
        },interval);
    }
    autoSlide(arr8,interval);//calls function autoSlide
    function next(){
        if(pos>arr8.length-2){
            pos=-1;
        }
        $('#slider8').html('<img src="'+arr8[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr8.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    function previous() {
        if(pos<1){
            pos=arr8.length;
        }
        $('#slider8').html('<img src="'+arr8[pos-1]+'" class="img-slide image-animated">');
        pos--;
        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr8.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }   
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
});
function circleClick(position) {
    if(position!=pos){
        $('#slider8').html('<img src="'+arr8[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }
}
var arr9=['img/lancangkuning.jpg','img/lancangkuning1.png','img/lancangkuning2.jpg']; //an arr1ay of image sources
var pos=0; //initializes image position in the arr1ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr9.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });
    $('.load-images').html(loaderHtml);
    var htm='';
    for(var i=0;i<arr9.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';
    }
    $('#circles').html(htm);//show small circles
    $('#slider9').html('<img src="'+arr9[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black
    function autoSlide(arr9,interval){
        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr9.length-1){
                pos=0;
            }
            $('#slider9').html('<img src="'+arr9[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr9.length-1)).css({'background':'transparent', 'color':'transparent'});
            }
        },interval);
    }
    autoSlide(arr9,interval);//calls function autoSlide
    function next(){
        if(pos>arr9.length-2){
            pos=-1;
        }
        $('#slider9').html('<img src="'+arr9[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;
        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr9.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    function previous() {
        if(pos<1){
            pos=arr9.length;
        }
        $('#slider9').html('<img src="'+arr9[pos-1]+'" class="img-slide image-animated">');
        pos--;
        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr9.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }   
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });   
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
});
function circleClick(position) {
    if(position!=pos){
        $('#slider9').html('<img src="'+arr9[position]+'" class="img-slide image-animated">');//show image
        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        pos=position;
    }
}
/* Authored by Boaz James Otieno */
/* full screen image slider10 */

var arr10=['img/Tebu.jpg','img/Tebu1.jpg','img/Tebu2.jpg']; //an arr1ay of image sources
var pos=0; //initializes image position in the arr1ay
$(document).ready(function () {
    var interval=5000; //interval for slide
    var loaderHtml='';
    arr10.forEach(function (src) {
        loaderHtml+='<img src="'+src+'">';
    });

    $('.load-images').html(loaderHtml);

    var htm='';
    /* initializes the small circles html*/
    for(var i=0;i<arr10.length;i++){
        htm+='<div id="'+i+'" class="circle" onclick="circleClick('+i+')"> </div> ';

    }

    $('#circles').html(htm);//show small circles
    $('#slider10').html('<img src="'+arr10[0]+'" class="img-slide image-animated"">');//show first image
    $('#0').css({'background':'#fff', 'color':'#fff'});//sets the background of the first small circle to black


    /* Auto slides the images with the image sources arr1ay given as first argument and interval as second argument */
    function autoSlide(arr10,interval){

        setInterval(function () {
            $('.img-slide').css({'opacity':'.1 !important'});
            pos++;
            if(pos>arr10.length-1){
                pos=0;
            }

            $('#slider10').html('<img src="'+arr10[pos]+'" class="img-slide img'+pos+' image-animated">');//shows image
            $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
            $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
            if(pos==0){
                $('#'+(arr10.length-1)).css({'background':'transparent', 'color':'transparent'});
            }

        },interval);
    }
    /* end of function autoSlide */

    autoSlide(arr10,interval);//calls function autoSlide

    /* displays next image */
    function next(){
        if(pos>arr10.length-2){
            pos=-1;
        }
        $('#slider10').html('<img src="'+arr10[pos+1]+'" class="img-slide image-animated">');//show image
        pos++;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos-1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==0){
            $('#'+(arr10.length-1)).css({'background':'transparent', 'color':'transparent'});
        }
    }
    /* end of function next  */

    /* displays previous image */
    function previous() {
        if(pos<1){
            pos=arr10.length;
        }
        $('#slider10').html('<img src="'+arr10[pos-1]+'" class="img-slide image-animated">');
        pos--;

        $('#'+pos).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos+1)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white
        if(pos==arr10.length-1){
            $('#0').css({'background':'transparent', 'color':'transparent'});
        }
    }
    /* end of function previous */

    /* onclick next */
    $('button#next').on('click',function (e) {
        e.preventDefault();
        next();//call function next
    });
    /* end of onclick next */

    /* onclick previous */
    $('button#prev').on('click',function (e) {
        e.preventDefault();
        previous();//call function previous
    });
    /* end of onclick previous */

});

/* displays image represented by the small circle */
function circleClick(position) {
    if(position!=pos){
        $('#slider10').html('<img src="'+arr10[position]+'" class="img-slide image-animated">');//show image

        $('#'+position).css({'background':'#fff', 'color':'#fff'});//sets background-color of circle representing the current active image to black
        $('#'+(pos)).css({'background':'transparent', 'color':'transparent'});//sets background-color of circle before active to white

        pos=position;
    }



}
