const sp = document.getElementById("sp-flippable");
sp.addEventListener("mouseover", (event)=> {
    sp.src = "real_me.jpeg";
})
sp.addEventListener("mouseout", (event)=> {
    sp.src = "self-portrait.jpg";
})

const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", (event)=> {
    h1.style.animation = "spin 0.8s linear";
    h1.style.fontSize = "200px";
    h1.style.textShadow = '2px 2px 0 #FFB300';
})
h1.addEventListener("mouseout", (event)=> {
    h1.style.fontSize = "170px";
    h1.style.textShadow = 'none';
})

const projects = document.querySelectorAll(".showcase");
projects.forEach((project) => {
    project.addEventListener("mouseover", (event)=> {
        project.style.opacity = "20%";
    })
    project.addEventListener("mouseout", (event)=> {
        project.style.opacity = "100%";
    })
})

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const link = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
            link.style.textShadow = '1px 1px 0 #000';
            link.style.fontSize = '1.3em';
        } else {
            link.style.textShadow = 'none';
            link.style.fontSize = '1em';
        }
    });
}, { threshold: 0.5 });
sections.forEach(section => observer.observe(section));