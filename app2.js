console.log('hello world')
document.querySelector('.showmenu').addEventListener('click', (e) => {
    let parentMenu = document.querySelector('.mobile-nav')
    parentMenu.style.width='290px';
 })
 document.querySelector('.exitmenu').addEventListener('click', (e) => {
    let parentMenu = document.querySelector('.mobile-nav')
    parentMenu.style.width='0'
 })
