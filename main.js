const text = document.querySelectorAll('.text');
const li = document.querySelectorAll('.li-content');
const title = document.querySelectorAll('.title');

function reset() {
    for(let i = 0; i <= li.length - 1; i++) {
        text[i].style.display = 'none';
        title[i].style.fontWeight = 'lighter';
    }
}

for (let i = 0; i <= li.length - 1; i++) {
    let none = true
    li[i].addEventListener('click', () => {
        if(none){
            reset();
            text[i].style.display = 'block';
            title[i].style.fontWeight = 'bold';
            none = false
        } else {
            text[i].style.display = 'none';
            title[i].style.fontWeight = 'lighter';
            none = true
        }

    })
}





