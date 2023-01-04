let activeSection = document.querySelector('.see_section')
let activedisplay  = document.querySelector('.see_also')

// Options
let options = {
    threshold: 0.5,
}

const activeSectionObserver = new IntersectionObserver((entries, activeSectionObserver) => {
    entries.forEach(enrtry => {
        console.log(enrtry.target)
        if (enrtry.isIntersecting) {
            activedisplay.classList.toggle('active')
        } else {
            activedisplay.classList.remove('active')
        }
    })
}, options)

activeSectionObserver.observe(activeSection)