# Momentum_CloneCoding
## Things I learned

https://nomadcoders.co/javascript-for-beginners/lectures/2874

Day 1
```cs
#2 Welcome to JavaScript
## 2.0 Your First JS Project
js 또는 css 파일 브라우저에서 열 수 없어 
-> html 파일을 실행 할거고 html 이 js와 css를 가져옴
```

Day 2
```cs
## 2.6 Objects
const playerName = "Lance";
const playerPoints = 5;
const playerPresent = true;

//Player 의 Object 을 만드는거지 to organize
const player = {
  name = "Lance",
  points = 5,
  present = true,
};
console.log(player);
console.log(player.name);

//update
player.lastname = "Choe"; // -> lastname 추가됨
```
```cs
## 2.7 Function
// 데이터 없이 그냥
function sayHello(){
  console.log("Hello!");
}

// 이번엔 데이터 넣어서
function sayHello(nameOfPerson, age){
  console.log("Hello, my name is " + nameOfPerson + " and I am " + age);
}

// Object 안에 function
const player = {
  name = 'Lance',
  sayHello: function(otherPersonName){
    console.log("Hello " + otherPersonName + ", Nice to meet you")
  },
};
```
```cs
## 2.13 Conditionals
const age = prompt("How old are you?");
console.log(age, parseInt(age)); // 앞은 string 뒤는 number만 가능
```
```cs
# JavaScript on the Browser
## 3.2 Searching For Elements
" Document " 는 우리가 JavaScript 에서 HTML에 접근할 수 있는 방법
const title = document.getElementById("title"); //= document.querySelector("#hello")
title.innerText = "Got you!"; // JavaScript 에서 바꿀 수 있음
const title = document.getElementByClassName("title");
//제일 많이 쓸
const title = document.querySelector(".hello h1"); // Hello 클래스의 h1
```

Day 3
```cs
## 3.3 Events
const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
  console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick); // 이벤트발생하면 fucntion 실행
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);
```

```cs
## 3.8 CSS in JavaScript
function handleTitleClick(){
  title.classList.toggle("clicked"); // clicked 가 classname에 있는지, 있다면 제거
}
title.addEventListener("click", handleTitleClick);
```
