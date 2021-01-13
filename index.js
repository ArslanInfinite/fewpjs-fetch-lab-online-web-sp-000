async function fetchBooks() {
  const resp = await fetch("https://anapioficeandfire.com/api/books")
  const json = await resp.json()
  return renderBooks(json)
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
