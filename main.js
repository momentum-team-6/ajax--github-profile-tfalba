const body = document.querySelector('body')

function renderCard(user, repo) {
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

  leftCol.classList.add('row','left-col')
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

  myName.innerHTML = `<span class = 'heading'>Name</span><span class='pl5'>${user.name}</span>`

  header.innerHTML = user.name
  gitHub.innerHTML = `<span class = 'heading'>GitHub Handle</span><span class='pl5 link'>${user.login}</span>`
  company.innerHTML = `<span class= 'heading'>Company Name</span><span class='pl5'>${user.company}</span>`
  website.innerHTML = `<span class= 'heading'>Website</span><span class='pl5 link'>${repo[0].name}</span>`
  website.innerHTML = website.innerHTML + `"Another repo: <a href='${repo[0].html_url}'>Repo2</a>"`
  bio.innerHTML = `<span class='story-text'>${user.bio}</span>`
  headshot.innerHTML = `<img src=${user.avatar_url}></img>`
}

const urlApi = "https://api.github.com/users/"
const repoUrl = "https://api.github.com/users/tfalba/repos"
// const url = "https://api.github.com/users/tfalba"
function getUser(login) {
  fetch(urlApi+login)
    .then(res => res.json())
    .then(user => {
      fetch(urlApi+login+'/repos')
        .then(res => res.json())
        .then(repo => {
          renderCard(user,repo)
        })

      //      renderCard(user)
      // if pull from main urlApi for a whole set can do a for let loop for (let user or users)
    })
}

getUser('tfalba')
getUser('cndreisbach')
getUser('amygori')

/* -------------------------- userArray is an array of objects that comes from the repo -- -------------------------- */
/* ------- take each object and pass through renderCard using obj.key where key are the various datatypes used ------ */