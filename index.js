// function condition(){
//     var a=prompt("Enter a: ");
//     var b=prompt("Enter b: ");
//     var c=prompt("Enter c: ");

//     if(a>b && a>c){
//         console.log("A is greater:");
//     }

//     else if(b>a && b>c){
//         console.log("B is greater");
//     }
//     else if(c>a && c>b){
//         console.log("C is largest");
//     }
//     else{
//         console.log("This is great");
//     }
// }

// condition()


// function num(){
//     var count=1;
//     while(count<=10){
//         console.log(count);
//         count++;
//     }
// }

// num()


// function array(){
//     var arr=[1,2,3,4,5];
// var count=0;
// var check=3;
//     while(count<arr.length){
//         if(arr[count]==check){
//             console.log("3 is present");
//         }
//         count++;
//     }


// }

// array();   

//for


// function forloops(){
//     var a=new arr(1,2,3,4,5,6);
//     var result=0;
//     var i
//     for(i=0; i<=a.length; i++){
//         if(c[i]==3){
//             result++;
//         }
//         else{
//             result
//         }
//     }

//     if(result>=1){
//         console.log('found');
//     }
//     else{
//         console.log('not found')
    
//     }

        
    
// }

// forloops()

// Switch

// switch(expression)
//   casex: codeblock
//   break;
  
//   casey: codeblock

//   default

// function day(){
//     var day;
//     var x=1;
//     switch(x){
//         case 0:
//             day='Monday'
//             break
//         case 1:
//             day='Sunday'
//             break
//         default:
//             day='wednesday'
//             break    

//     }
//     console.log(day)
// }
// day()


// function vote(){
//     var age=prompt("Enter age: ");
//     switch(true){
//         case (age<18): {
//             console.log("Not eligible to vote");
//             break
//         }
//         case (age>=18): {
//             console.log('You can vote');
//             break
//         }

//         default:
//             console.log('You better  go.')

//     }
// }

// vote();


// function prac(){
//     var num=prompt('Enter nuber: ');
//     switch(true){
//         case (num==1):
//             console.log('ONE');
//             break;
//         case (num==2):
//             console.log('TWO');
//             break;
//         case (num==3):
//             console.log('THREE');
//             break;
//         case (num==4):
//             console.log('FOURE');
//             break;
//         case (num==5):
//             console.log('FIVE');
//             break;
//         case (num==6):
//             console.log('SIX');
//             break;
//         case (num==7):
//             console.log('SEVEN');
//             break;
//         default:
//             console.log("TRY AGAIN");    
//         }     
// }
// prac();  


// function ven(){
//     //input month and year
//     //o/p no of days in a month
//     var month=prompt('Enter month: ');
//     // var year=2016;
//     var dayCount;

//     switch(month){
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             console.log('Number of days: ', dayCount=31);
//             break;
//         case 4: case 6: case 9: case 11:
//             dayCount=30;
//             break
//         case 2:
//             if((year%4==0) && !(year%100 == 0) || (year%400 == 0))
//             dayCount=29;
//             else{
//                 dayCount=28;
//             }
//             break;
//         default:
//             console.log('INVALID MONTH');    

//     }
// }

// ven();




// DOM

// const masterEl = document.getElementById('master')
// console.log(masterEl)

//button banao on click pay hellow world print karwana hy





// const btn = document.getElementById('btn')

// btn.addEventListener('Click', function display(){
//     var p = p.innerHTML='Hello world';
// })





// function ageInDays(){
//     var age= prompt();
//     var days=365;
//     var ageIndays=age*365;
//     console.log(ageInDays);
// }
// ageInDays()





function display(){
    document.getElementById('btn').innerHTML='hello world'

    
}
    var btn = document.getElementById('btn')
    btn.addEventListener('click', display)
        









    // document.getElementById('btn').innerHTML='Hello World'
     


// var btn = document.getElementById('btn')

// btn.addEventListener('Click', function display(){
//     var p = p.innerHTML='Hello world';
// })