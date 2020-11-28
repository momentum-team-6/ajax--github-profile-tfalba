const leftCol = document.querySelector('#left-col')
const rightCol = document.querySelector('#right-col')
const header = document.querySelector('#name-header')
const container = document.querySelector('#container')

const myName = document.createElement('div')
const gitHub = document.createElement('div')
const company = document.createElement('div')
const website = document.createElement('div')
const bio = document.createElement('div')
const headshot = document.createElement('div')

leftCol.appendChild(myName)
leftCol.appendChild(gitHub)
leftCol.appendChild(company)
leftCol.appendChild(website)
rightCol.appendChild(bio)
container.appendChild(headshot)

myName.classList.add('col')
myName.classList.add('top')
gitHub.classList.add('col')
company.classList.add('col')
website.classList.add('col')

bio.classList.add('col')
bio.classList.add('top')
bio.classList.add('story')
headshot.classList.add('row')
headshot.classList.add('image')

myName.innerText = "Tracy Falba"
header.innerText = "Tracy Falba"
gitHub.innerText = "github link"
company.innerHTML = "Company Name"
website.innerHTML = "Personal Website"
bio.innerHTML = "The story of my life in 300 words or less. Some more words to keep filling up the row and see what happens to the wrapping. I love my boys!! I'm going to be a software developer!"
headshot.innerHTML = '<img src="shutterstock_1326452492.jpg"></img>'


