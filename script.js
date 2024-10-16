let display = "";

let buttons = document.querySelectorAll('button')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        display = display + e.target.innerHTML.trim();
        document.querySelector('input').value = display
    })
})









