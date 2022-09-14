// let motor = document.querySelector('.motor')
// console.log(motor.parentNode)
// let par = document.querySelector('.divbox')
// let paren = par.children;
// console.log(paren)
// for(var wee = 0; wee < paren.length; wee++){
//    paren[2].innerHTML='hello world'
// }




// var time = setInterval(ride, 200)
// var num = 0;
// let moto = document.getElementById('motor')
// function ride() {
//     // var num = 0;
//     if(num >= 700){
//         clearInterval(time)
//     }else{
//         num +=10;
//         moto.style.left= num+"px"
//     }
//  }


// var image = [
//    './image/img1.jpg',
//    './image/img2.jpeg',
//    './image/img3.jpeg',
//    './image/img4.jpeg',
//    './image/img5.jpeg',
// ]
// var number = 0
// function slideimg() {
//    let images = document.querySelector('.images')
//    number++
//    if (number >= image.length) {
//       number = 0
//    }
//    images.src = image[number]
//    setTimeout(slideimg, 3000)
// }
// slideimg();
document.querySelector('.showmenu').addEventListener('click', (e) => {
   let parentMenu = document.querySelector('.mobile-nav')
   parentMenu.style.width='290px'
})
document.querySelector('.exitmenu').addEventListener('click', (e) => {
   let parentMenu = document.querySelector('.mobile-nav')
   parentMenu.style.width='0'
})

console.log('hello world')
var num = 1;

// var num = 1;
function service() {
   let showimg = document.getElementsByClassName('serviceimg');
   for (let i = 0; i < showimg.length; i++) {

      showimg[i].style.display = "none"
   }
   num++;
   if (num > showimg.length) { num = 1 }
   showimg[num - 1].style.display = 'block'
   setTimeout(service, 3000);
}
service();


var num2 = 1;
function service2() {
   let showimg2 = document.getElementsByClassName('serviceimg2');
   for (let i = 0; i < showimg2.length; i++) {
      showimg2[i].style.display = "none"
   }
   num2++;
   if (num2 > showimg2.length) { num2 = 1 }
   showimg2[num2 - 1].style.display = 'block'
   setTimeout(service2, 3000);
}
service2();
var num3 = 1;
function service3() {
   let showimg3 = document.getElementsByClassName('serviceimg3');
   for (let i = 0; i < showimg3.length; i++) {
      showimg3[i].style.display = "none"
   }
   num3++;
   if (num3 > showimg3.length) { num3 = 1 }
   showimg3[num3 - 1].style.display = 'block'
   setTimeout(service3, 3000);
}
service3();


var num4 = 1;
function service4() {
   let showimg4 = document.getElementsByClassName('serviceimg4');
   for (let i = 0; i < showimg4.length; i++) {
      showimg4[i].style.display = "none"
   }
   num4++;
   if (num4 > showimg4.length) { num4 = 1 }
   showimg4[num4 - 1].style.display = 'block'
   setTimeout(service4, 3000);
}
service4();

var counting = 1;
function bannerslide(){
   let banner = document.getElementsByClassName('banner')
   for(j = 0; j < banner.length; j++){
       banner[j].style.display='none'
    } 
    counting++;
    if(counting > banner.length){ counting = 1}
    banner[counting - 1].style.display = 'block'
    setTimeout(bannerslide, 6000)
   }
bannerslide();