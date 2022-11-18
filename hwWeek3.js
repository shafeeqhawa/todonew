let input = document.getElementById("input-text")
let btn= document.getElementById("input-btn")
const list= document.querySelector("ul")
let todoesArr =[]


btn.addEventListener("click", ()=>{
const inputText = input.value.trim();

input.value= "";

})

const display = (arr) =>{
list.innerHTML= ""
list.innerHTML += `
<li id= "${item.id}">
<p> </p>
<span class="material-icons-outlined">
done
</span>
<span class="material-icons-outlined">
delete
</span>
</li>;
`
}

