let $ = document

const searchInput = $.querySelector('input')
const searchBtn = $.querySelector('button')
const paragraph = $.querySelector('#paragraph')

const highlightText = () => {
    console.log('seracg')
    let inputValue = searchInput.value
    let searchRegex = new RegExp(`${inputValue}`, 'gi')

    paragraph.innerHTML = paragraph.textContent.replace(searchRegex,(filteredItem) => `<mark>${filteredItem}</mark>`)
}
searchBtn.addEventListener('click', highlightText)
