let pass1= document.getElementById("div2");
let pass2= document.getElementById("div3");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate_password(length){
   let answer = '';
   for(let i=0; i<length; i++){
     //lei j=
     //typeof(character[i]) == number
   answer += characters[Math.floor(Math.random() * characters.length)]
   }
   return answer
}

function both_password(){
    pass1.textContent = generate_password(5)
    pass2.textContent = generate_password(10)
}
 console.log(typeof(answer))

 function copy(){
    let copy_text = document.getElementById("div2");

    copy_text.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copy_text.value);

    alert('Text Copied');
 }