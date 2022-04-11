const item = document.getElementById('item-pu')
const item2 = document.getElementById('item-gr')

// lists
const list1 = document.querySelector('.box-list')
const list2 = document.querySelector('.box-list2')

item.addEventListener('click', () => {
    list1.classList.remove('none')
    list2.classList.add('none')
})


item2.addEventListener('click', () => {
    list2.classList.remove('none')
    list1.classList.add('none')
})
