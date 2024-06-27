/*       фильтр заказов       */

function filter (){

let filterItem = document.querySelectorAll('.item');
let listItem = document.querySelectorAll('.orders__list-item')

listItem.forEach( item =>{
    item.addEventListener('click' , function(){
        listItem.forEach( item =>{
            item.classList.remove('orders__list-active')
        })
        this.classList.add('orders__list-active')
})
    })

document.querySelector('.orders__list').addEventListener('click' , event => {
    if(event.target.tagName !== 'LI') return false ;

    let filterClass = event.target.dataset['f'];

    filterItem.forEach(elem =>{
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass !== 'all'){
            elem.classList.add('hide');
        }
        
    })

    
})

}

filter()

/* dropdown   */


let listItem = document.querySelectorAll('.orders__list-item')
let dropdown = document.querySelector('.orders__dropdown')
let dropList = document.querySelector('.orders__list')
let dropTitle = document.querySelector('.orders__dropdown-title')
let navTitle = document.querySelector('.orders__nav-title')

dropdown.addEventListener('click' , function(){
    dropList.classList.toggle('dropdown__active');
    dropTitle.classList.toggle('dropdown__title-active')
})


listItem.forEach(item =>{
    item.addEventListener('click', function(){
        let text =  item.textContent 
        dropTitle.textContent = text
        navTitle.textContent = text
    })
})
