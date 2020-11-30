/* --------------------------------- Sets up structure of the DOM and renders cards --------------------------------- */

const cardHolder = document.querySelector('#card-holder')

function renderCard (user, repo) {
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
  const sampleRepo = document.createElement('div')
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
  leftCol.appendChild(sampleRepo)
  rightCol.appendChild(bio)
  cardHolder.appendChild(newCard)

  newCard.classList.add('card')
  container.classList.add('container')
  header.classList.add('banner')

  leftCol.classList.add('row','left-col')
  leftCol.classList.add('left-col')
  rightCol.classList.add('row')
  myName.classList.add('col')
  myName.classList.add('top')
  gitHub.classList.add('col')
  company.classList.add('col')
  website.classList.add('col')
  sampleRepo.classList.add('col')
  sampleRepo.classList.add('col-block')

  bio.classList.add('col')
  bio.classList.add('top')
  bio.classList.add('story')
  headshot.classList.add('row')
  headshot.classList.add('image')

  if (user.name === null) {
    myName.innerHTML = ''
  } else {
    myName.innerHTML = `<span class = 'heading'>Name</span><span class='pl5'>${user.name}</span>`
    header.innerHTML = user.name
  }
  gitHub.innerHTML = `<span class = 'heading'>GitHub Handle</span><a class='pl5 link' href=${user.html_url}>${user.login}</a>`
  if (user.company === null) {
    company.innerHTML = ''
  } else {
    company.innerHTML = `<span class= 'heading'>Company Name</span><span class='pl5'>${user.company}</span>`
  }
  if (user.blog === null || user.blog === undefined || user.blog === '') {
    website.innerHTML = ''
  } else {
    website.innerHTML = `<span class= 'heading'>Website</span><a class='pl5 link' href=${user.blog}>${user.blog}</a>`
  }
  for (let i = 2; i < 5; i++) {
    sampleRepo.innerHTML += `<div><span class = 'heading'>Repo Sample ${+(i+1)}</span><a class='pl5 link' href='${repo[i].html_url}'>${repo[i].name}</a></div>`
  }
  if (user.bio === null) {
    rightCol.innerHTML = ''
  } else {
    bio.innerHTML = `<span class='story-text'>${user.bio}</span>`
  }
  headshot.innerHTML = `<img src=${user.avatar_url}></img>`
}

/* ------------------------------------------------- pull JSON data ------------------------------------------------- */

const urlApi = "https://api.github.com/users/"
function getUser (login) {
  fetch (urlApi + login)
    .then(res => res.json())
    .then(user => {
      fetch (urlApi + login + '/repos')
        .then(res => res.json())
        .then(repo => {
          renderCard(user, repo)
        })
    })
}

/* -------------------------------------- Event listeners for submit and clear -------------------------------------- */

const form = document.querySelector('#login-name')
const login = document.querySelector('input')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log(login.value)
  getUser(login.value)
})

const clear = document.querySelector('#clear')
clear.addEventListener('click', function (event) {
  cardHolder.innerHTML = ''
  login.value = ''
})
