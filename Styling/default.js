// Variable instantiation

let theme = localStorage.getItem('theme');
let slider = localStorage.getItem('slider')
var toggle = document.getElementById('darkmodetoggle')

var nav = document.getElementById('navbar');
var about = document.getElementById('about');
var who = document.getElementById('who');
var footer = document.getElementById('footer');

// Inital localStorage variable prints

console.log(theme)
console.log(slider)

// First time visitor localStorage variable creation

if(slider == null) {
    slider == 'checked'
    localStorage.setItem('slider', 'checked')
}

if(theme == null) {
    theme == 'light'
    localStorage.setItem('theme', 'light')
}

//Checks for loading proper toggle and theme states

if(slider == 'checked') {
    toggle.checked = true;
}
else if(slider == 'unchecked') {
    toggle.checked = false;
}

if(theme == 'light') {
    nav.style.backgroundColor = '#05dff7';
    about.style.backgroundColor = '#aaa';
    document.body.style.backgroundColor = '#ddd';
    document.body.style.color = '#333';
}
else if(theme == 'dark') {
    nav.style.backgroundColor = '#333';
    about.style.backgroundColor = '#111';
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
}

//Event listener for updating localStorage variables when toggle switch is used

toggle.addEventListener('change', function() {
    if(toggle.checked) {
        localStorage.setItem('theme', 'dark')
        localStorage.setItem('slider', 'checked')
        console.log('checked')
        location.reload();
    }
    else if(!toggle.checked) {
        localStorage.setItem('theme', 'light')
        localStorage.setItem('slider', 'unchecked')
        console.log('unchecked')
        location.reload();
    }
})











function darkmode() {
    var nav = document.getElementById('navbar');
    var about = document.getElementById('about');
    var who = document.getElementById('who');
    var footer = document.getElementById('footer');

    if(toggle.checked) {
        nav.style.backgroundColor = '#333';
        about.style.backgroundColor = '#111';
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    }
    else if(!toggle.checked) {
        nav.style.backgroundColor = '#05dff7';
        about.style.backgroundColor = '#aaa';
        document.body.style.backgroundColor = '#ddd';
        document.body.style.color = '#333';
    }
    
}

