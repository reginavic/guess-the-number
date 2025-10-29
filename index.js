let text = "Guess the number";
let i = 0;
let speed = 100;
function type() {
    if (i < text.length) {
        document.querySelector('#par').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

function music() {
const myAudio = document.querySelector("#myAudio");
const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
if(myAudio.paused === true){
    document.querySelector("#myAudio").play();
}
else if (myAudio.paused === false) {
    document.querySelector("#myAudio").pause().toggle("url (https://img.icons8.com/nolan/64/circled-pause.png)") ;
    
}
})
}
music();

const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor (Math.random()*20)+1;
input. addEventListener('keypress',function(e) {
    if (e.keyCode === 13) {
        play();
    }
})
button.addEventListener ('click', play);

function play() {
const userNumber = document.querySelector('#guess').value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire ({
            icon: 'error',
            title: 'Oops!',
            text: 'Enter a number from 1 to 20!',
        })
    }
    else if (isNaN (userNumber)) {
        Swal.fire ({
            icon: 'error',
            title: 'Oops!',
            text: 'You need to enter a number!',
        })
    }
    else {
        if (userNumber < answer) {
            Swal.fire ('Try the number above!', 'Computer is still winning!')
        }
    else if (userNumber > answer) {
            Swal.fire ('Try the number below!', 'Computer is still winning!')
    }
    else {
        Swal.fire({
            title: 'You Win!',
            imageUrl: 'win.jpg',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'Win!',
        })
        }
    }
}
function myFunction() {
    document.querySelector("#myForm").reset();
    input.value="";
}
myFunction();
