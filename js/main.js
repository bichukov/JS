"use strict";

function Task1 (x,y,z){
  console.log('Task1=',x+y+z);
}

Task1(20, 58, 42);

function Task2 (age){
  let seconds = 60
  let minutes = 60
  let hours = 24
  let days = 365
  console.log('myAgeInSeconds=',seconds*minutes*hours*days*age);
}

Task2(30);

function Task3 (){
  let count = 42
  let userName = '42'

  console.log(count=String(count), typeof(count));
  console.log(count=count + '', typeof(count));
  console.log(userName=parseInt(userName), typeof(userName));
  console.log(userName=Number(userName), typeof(userName));
}

Task3();


function Task4 (){
  let a = 1
  let b = 2
  let c = "белых медведей"

  console.log(`${a}${b}`, c);

}
Task4();

function Task5 (){
  let a = 'доступ'
  let b = 'морпех'
  let c = "наледь"
  let d = "попрек"
  let e = "рубило"
  let lengthWords ;

  console.log(lengthWords=a.length+b.length+c.length+d.length+e.length);
}
Task5();

function Task6 (){
  let a = 'доступ'
  let b = 42
  let c = true
  console.log('Variable: a have type:',typeof(a) );
  console.log('Variable: b have type:',typeof(b) );
  console.log('Variable: c have type:',typeof(c) );

}
Task6();

function Task7 (){
  let name = prompt('Как вас зовут?');
  let years = parseInt(prompt('Сколько Вам лет?'));
  console.log('Имя: '+ name + ', Возвраст: ' +years );
}
Task7();

function Task1pl (){
  var a =4
  var b = 3
  a = a + b;
  b = a - b;
  a = a - b
  console.log(a, b );
}
Task1pl();function Task2pl (){
  let codeWord1 = "обернись";
  let codeWord2 = "неужели";
  let codeWord3 = "огурцы";
  let codeWord4 = "липкие";
  let codeWord5 = "?!";
  let codeWord12 = codeWord1.split('');
  let codeWord22 = codeWord2.split('');
  let codeWord32 = codeWord3.split('');
  let codeWord42 = codeWord4.split('');
  let codeWord52 = codeWord5.split('');




  console.log(codeWord12[1]+codeWord22[1]+codeWord32[1]+codeWord42[1]+codeWord52[1] );
}
Task2pl();
