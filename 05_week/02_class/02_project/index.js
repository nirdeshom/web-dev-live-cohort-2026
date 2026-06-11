const input = document.querySelector('#todo-input');
const add = document.querySelector('#add-btn');
const ul = document.querySelector('#todo-items-container');
const message = document.querySelector('.message');

add.addEventListener('click', ()=>{
    const value = input.value;

    if(value === ""){
        message.innerText = "Plz Enter Todo";
        message.style.color = "red"
        return
    }

    input.addEventListener('input', () => {
        message.innerText = ""
    })

    const li = document.createElement("li");
    li.innerText = value;
    ul.prepend(li);  // append() -> buttom / prepend() -> top

    const delButton = document.createElement("button");
    delButton.innerText = 'Delete';
    li.appendChild(delButton);

    delButton.addEventListener('click', ()=>{
        li.remove()
    })

    input.value = ''
})