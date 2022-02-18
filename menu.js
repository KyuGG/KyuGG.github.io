let teamleaders = document.getElementById('teamleaders')
let about = document.getElementById('about')
let contact = document.getElementById('contact')

inputs = document.querySelectorAll('#menu form input')
teamleadersInput = inputs[1]
aboutInput = inputs[2]
contactInput = inputs[3]


teamleadersInput.onclick = () => teamleaders.scrollIntoView({ block: "center", behavior: "smooth"})
aboutInput.onclick = () => about.scrollIntoView({ block: "center", behavior: "smooth" })
contactInput.onclick = () => contact.scrollIntoView({ block: "center", behavior: "smooth" })