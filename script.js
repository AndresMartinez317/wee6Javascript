let count = 0;
function Counter() {
    count+=1;
	document.getElementById("Count").innerHTML = count;
}

const insert = document.getElementById("insert");
window.addEventListener('keydown', (e) => {
insert.innerHTML = `
 <div class="key">
       ${e.key === ' ' ? 'Space' : e.key}
        <small>e.key</small>
       </div>
    
      <div class="key">
     ${e.keyCode}
      <small>e.keyCode</small>
        </div>
    
       <div class="key">
          ${e.code}
          <small>e.code</small>
        </div>
      `;
     })

     const name = document.getElementById("name")
const password = document.getElementById("Password")
const form = document.getElementById("form")
const error = document.getElementById("error")

form.addEventListener('submit',(e) =>{
    let message=[]
    if(name.value.length <= 5 ){
        message.push("name should be longer than 5 characters")
    }
    if(password.value.length <= 8){
        message.push("Password should be longer than 8 characters"); 
    }
    if(message.length > 0){
        e.preventDefault();
        error.innerText = message.join(', ');
    }
})


   
   

    
