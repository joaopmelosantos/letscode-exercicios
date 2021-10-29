function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function createNewArray() {
  let array = new Array(getRandomNumber(1, 20))
  for (let i = 0; i < array.length; i++) {
    array[i] = getRandomNumber(0, 500)
  }
  return array
}

const createList1 = () =>
  new Promise(resolve => {
    setTimeout(resolve, getRandomNumber(1000, 5000), {
      List1: createNewArray()
    })
  })
const createList2 = () =>
  new Promise(resolve => {
    setTimeout(resolve, getRandomNumber(1000, 5000), {
      List2: createNewArray()
    })
  })
const createList3 = () =>
  new Promise(resolve => {
    setTimeout(resolve, getRandomNumber(1000, 5000), {
      List3: createNewArray()
    })
  })

const button = document.querySelector('#gerar-lista')
const divContainer = document.querySelector('div.list-container')
let listsContainerNumber = 1

const createLists = async () => {
  const ulContainer = document.createElement('div')
  ulContainer.classList.add('list' + listsContainerNumber)
  divContainer.appendChild(ulContainer)
  const list1 = await createList1()
  fillListsContainer(list1)
  const list2 = await createList2()
  fillListsContainer(list2)
  const list3 = await createList3()
  fillListsContainer(list3)
  listsContainerNumber++
}

const fillListsContainer = list => {
  const ul = document.createElement('ul')
  const ulContainer = document.querySelector(`.list${listsContainerNumber}`)
  ulContainer.appendChild(ul)
  for (prop in list) {
    const p = document.createElement('p')
    p.textContent = prop
    ul.appendChild(p)
    for (number of list[prop]) {
      const li = document.createElement('li')
      li.textContent = number
      ul.appendChild(li)
    }
  }
}

button.onclick = () => {
  const container = document.querySelector('.container')
  const loading = document.createElement('span')
  loading.textContent = 'Gerando Lista...'
  container.insertBefore(loading, divContainer)
  createLists().then(() => {
    loading.textContent = 'Lista Gerada!'
    setTimeout(() => loading.remove(), 1000)
  })
}
