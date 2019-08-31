//var jq = require('jquery');
//var test  = $('#myVideo');
//Why is Jquery not working?!?...
//file.js 
//UI

var topNav = document.getElementsByClassName('topNav');
var elements = document.getElementsByClassName('child');
var active = document.getElementsByClassName("active");

//Toggle Class Attempts
/*
for(var i = 0; i < elements.length; i++){
        elements[i].addEventListener('click', ()=>{
                elements[i].classList.toggle(' active');
        })
}*/

var dude =  document.getElementById('btton');
dude.onclick = ()=>{
        if(dude.innerText === 'click me'){
                dude.innerText = 'I have been clicked';
        } else {
                dude.innerText =  'click me';
        }
        console.log('Button Clicked');
}

//basic class  
class UserPerson{
    constructor(name, age, lname){
        this.name = name;
        this.age = age;
        this.lname = lname;
    }
    getFullName(){
        return  `${this.name} ${this.lname} is my full name`;
    } 
    addPoints(amount){
        this.points = amount;
    }
}
let john = new UserPerson();
john.addPoints(42);
console.log(john);
let bill = new UserPerson('Bill', 25, 'Barr');
console.log(bill);
console.log(bill.getFullName());
// Factory function
function product(number1, number2){
        return number1 * number2;
}
console.log(`The product is ${product(4, 4)}`);
//Example of constructor. Constructors are not always defined in classes
function Test(radius){
        this.radius = radius;
        this.radius2 = radius * 2;
}
const testObj = new Test(6);
console.log(testObj);
//this
var o = {
        prop: 34,
        f: function(){
                return this.prop
        }
}
console.log(o.f());
//Array Methods
const items = [
        {name: 'tv', price: 100},
        {name: 'phone', price: 1000},
        {name: 'hat', price: 10},
        {name: 'jacket', price: 50},
        {name: 'bike', price: 300}
]
let arr = ["a","b","c"];
let arr2 = [1, 2, 3];
arr.push("d");
methodArray = [
        arr, 
        arr.pop(), 
        arr.concat(arr2), 
        arr.join(arr2), 
        arr.join("!"), 
        arr.reverse(), 
        arr.shift(), 
        arr.unshift("p"),
        arr, 
        arr.slice(1,3), 
        arr.push("i", "f"),  
        arr.sort(),
        //arr.splice(2,2, "JS Nuggets"),
        arr
]
function list() {
        for(var i=0; i<methodArray.length; i++){
                console.log(methodArray[i]);
        }
}
const sortedByPrice =  items.sort(function(a, b){
        return b.price - a.price;
});
console.log(sortedByPrice);
list();
console.log("End of First Array test")
const filteredItems = items.filter((item) => {
        return item.price >= 100;
})
const itemMap = items.map((item) => {
        return item.price;
})
const findItems = items.find((item) => {
        return item.name === 'hat';
})
const eachItem = items.forEach((item) => {
        console.log(item.price);
        //Undefined for unknown reason
})
const hasInexpensiveItems = items.some((item) => {
        //or .every
        return item.price <= 100;
        //returns bool
})
const reduceItems = items.reduce((currentTotal, item) => {
        return item.price + currentTotal;
}, 0)
console.log(items);
console.log(filteredItems, itemMap, findItems);
console.log(hasInexpensiveItems);
console.log(eachItem, '\n', reduceItems, "\n End of All Array Tests");

//loops
var a = 0;
function loop(){
        console.log("for");
        for(var i =0; i< 3; i++){
                console.log(i);
        }
        console.log("while");
        while(a < 3){
                console.log(this.a);
                a++
        }
        do{
                console.log("done")
        } while(a === 75)
}
loop();

//Basic Error Handling
try {
        console.log('Start of try runs');
        unicycle;
        console.log('End of try runs -- never reached');
} catch(err) {
        console.log(`Error has occurred ${err.stack}`);
        document.write('cheers mate');
} finally {
        console.log('finally Statement');
}

//other
let newElement = document.createElement('input');
console.log(newElement);
console.dir(newElement);
document.write('<br>');
document.body.appendChild(newElement);

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}




//example.$(selector).append(content);??
/*
<body>
        <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
        <div id="player"></div>

            
        <script>
          // 2. This code loads the IFrame Player API code asynchronously.
          var tag = document.createElement('script');
            
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          // 3. This function creates an <iframe> (and YouTube player)
          //    after the API code downloads.
          var player;
          function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
              height: '390',
              width: '640',
              videoId: 'M7lc1UVf-VE',
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
              playerVars{
                'controls': 0,
                'disablekb': 1,
                'modestbranding': 1,
                'rel': 0,
                'showinfo': 0
              }
            });
          }
            
          // 4. The API will call this function when the video player is ready.
          function onPlayerReady(event) {
            event.target.playVideo();
          }
            
          // 5. The API calls this function when the player's state changes.
          //    The function indicates that when playing a video (state=1),
          //    the player should play for six seconds and then stop.
          var done = false;
          function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
              setTimeout(stopVideo, 6000);
              done = true;
            }
          }
          function stopVideo() {
            player.stopVideo();
          }
        </script>
</body>
*/