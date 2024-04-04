const darkMode = document.querySelector('.dark-mode');
const hiddenElements = document.querySelectorAll('.hidden')
const skillBars = document.querySelectorAll('.skill-per');

//dark mode
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


// scroll
const hiddenElementsObserver = new IntersectionObserver((entires) => {
    entires.forEach((entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            // entry.target.classList.add("animate");
        } 
        // else {entry.target.classList.remove('show')}
    }))
})

hiddenElements.forEach((el) => hiddenElementsObserver.observe(el))


//skill-bar + scroll
const skillBarsObserver = new IntersectionObserver((entires) => {
    entires.forEach((entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-end");
        } else {
            entry.target.classList.remove("animate-end");
        }

    }))
})


skillBars.forEach((skillBar) => skillBarsObserver.observe(skillBar));