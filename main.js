// const leftCol = document.querySelector('#left-col')
// const rightCol = document.querySelector('#right-col')
// const header = document.querySelector('#name-header')
// const container = document.querySelector('#container')

// make the above here in js and remove from index.html -- that way can add more cards
const body = document.querySelector('body')

function renderCard() {
  const newCard = document.createElement('section')
  newCard.classList.add('card')
  // newCard has two elements - header and container
  const header = document.createElement('h1')
  const container = document.createElement('div')
  // container has three elements -- leftCol, rightCol, and headshot
  const leftCol = document.createElement('div')
  const rightCol = document.createElement('div')
  const headshot = document.createElement('div')

  // leftCol has four elements -- myName, gitHub, company, and website
  const myName = document.createElement('div')
  const gitHub = document.createElement('div')
  const company = document.createElement('div')
  const website = document.createElement('div')
  
  // rightCol has one element -- bio
  const bio = document.createElement('div')
  

  leftCol.innerHTML = "The Basics"
  rightCol.innerHTML = "The Story"

  newCard.appendChild(header)
  newCard.appendChild(container)
  container.appendChild(leftCol)
  container.appendChild(rightCol)
  container.appendChild(headshot)
  leftCol.appendChild(myName)
  leftCol.appendChild(gitHub)
  leftCol.appendChild(company)
  leftCol.appendChild(website)
  rightCol.appendChild(bio)
  body.appendChild(newCard)

  newCard.classList.add('card')
  container.classList.add('container')
  header.classList.add('banner')
  leftCol.classList.add('row')
  leftCol.classList.add('left-col')
  rightCol.classList.add('row')
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

  
  myName.innerHTML = "<span class = 'heading'>Name</span><span class='pl5'>Tracy Falba</span>"
  header.innerHTML = "Tracy Falba"
  gitHub.innerHTML = "<span class = 'heading'>GitHub URL</span><span class='pl5 link'>tfalba</span>"
  company.innerHTML = "<span class= 'heading'>Company Name</span><span class='pl5'>This is my company</span>"
  website.innerHTML = "<span class= 'heading'>Website</span><span class='pl5 link'>http://thisisme.com</span>"
  bio.innerHTML = "<span class='story-text'>The story of my life in 300 words or less. Some more words to keep filling up the row and see what happens to the wrapping. I love my boys!! I'm going to be a software developer! I am currently a student with Momentum Learn</span>"
  headshot.innerHTML = '<img src="shutterstock_1326452492.jpg"></img>'
}
renderCard()
renderCard()
