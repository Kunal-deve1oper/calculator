let input = document.querySelector(".input");
let btn = document.querySelectorAll("button");
let screen = '';


for(let x of btn){
    x.addEventListener("click",(e)=>{
        let buttonValue = e.target.textContent;
        if(buttonValue == 'x')
        {
            buttonValue='*';
            screen = input.value;
            screen += buttonValue;
            input.value = screen
        }
        else if(buttonValue == 'C')
        {
            screen = '';
            input.value = screen;
        }
        else if(buttonValue == 'del')
        {
            screen = input.value;
            screen = screen.slice(0,screen.length-1);
            input.value = screen;
        }
        else if(buttonValue == '=')
        {
            screen = input.value;
            input.value = eval(screen);
        }
        else{
            screen = input.value;
            screen += buttonValue;
            input.value = screen;
        }
    })
}