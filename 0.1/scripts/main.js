let myImages = document.querySelector('img');

myImages.onclick = function(){
    let mySrc = myImages.getAttribute('src');
    if(mySrc === 'images/huohu.jpg') {
        myImages.setAttribute('src', 'images/huohu2.jpg');
    }else{
        myImages.setAttribute('src', 'images/huohu.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

myButton.onclick = function(){
    setUserName();
}