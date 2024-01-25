//alert('hello');
// var firstLabel =document.getElementById('num1').value;
// var secondLabel =document.getElementById('num2').value;
// var resultLabel =document.getElementById('note');
// console.log(firstLabel+secondLabel);
// const calcBtn =document.getElementById('calc');

// calcBtn.addEventListener('click',calculate);



// function calculate() {
//     let num1 =firstLabel.ariaValueMax;
//     let num2 =secondLabel.textContent;
//     const res = num1+num2;
//     resultLabel.textContent=res;
// }

// var num1 =document.getElementById('num1').value;
// var num2 =document.getElementById('num2').value;
// console.log(num1+num2);
// var input =document.getElementById('note').value;
const Btn =document.getElementById('calc');
Btn.addEventListener('click',calculate);
let input;
let result;
function getValue()
{
    let txt =document.getElementById('note');
    input =txt.value;
    
}
function calculate()
{
    const space =document.getElementById('op');
    //const listItem =document.createElement('h2');
    const str =input.toLowerCase();
    let count =0;
    for(let i=0;i<str.length;i++)
    {
        let char = str.charAt(i);
        console.log(char);
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u')
        {
            count++;
        }
    }
    space.innerHTML=`No of vowels is:${count}`;

}
console.log(input);
