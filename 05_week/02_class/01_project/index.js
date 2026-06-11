// console.log(document);
// document.write("Hello DOM");

function changeBackgroundColor(color){
    document.body.style.backgroundColor = color
}

const themButton = document.getElementById('theme-button');
const h1 = document.querySelector('h1');

// console.log(themButton);
// darkButton.innerText = 'hahaha';

themButton.addEventListener('click', () => {
    // console.log(document.body.style.backgroundColor);
    let currentColor = document.body.style.backgroundColor;
    if(!currentColor || currentColor == 'white'){
        changeBackgroundColor('black');
        themButton.innerText = 'Light mode'
        h1.style.color = 'white'
    } else{
        changeBackgroundColor('white');
        themButton.innerText = 'Dark mode'
        h1.style.color = 'black'
    }
})
