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
  new Promise((resolve, reject) => {
    resolve({ List1: createNewArray() })
  })
const createList2 = () =>
  new Promise((resolve, reject) => {
    resolve({ List2: createNewArray() })
  })
const createList3 = () =>
  new Promise((resolve, reject) => {
    resolve({ List3: createNewArray() })
  })

const button = document.querySelector('#gerar-lista')
const divContainer = document.querySelector('div.list-container')

const createLists = async () => {
  const list1 = await createList1()
  const list2 = await createList2()
  const list3 = await createList3()
  const lists = [list1, list2, list3]
  return lists
}

button.onclick = () => {
  createLists().then(lists => {
    const ulContainer = document.createElement('div')
    ulContainer.classList.add('list')
    divContainer.appendChild(ulContainer)
    for (object of lists) {
      for (index in object) {
        const ul = document.createElement('ul')
        ulContainer.appendChild(ul)
        const p = document.createElement('p')
        p.textContent = index
        ul.appendChild(p)
        for (const value of object[index]) {
          const li = document.createElement('li')
          li.textContent = value
          ul.appendChild(li)
        }
      }
    }
  })
}
