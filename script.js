const tablist = document.querySelector('#tablist');
const tabcontent = document.querySelectorAll('.tabcontent');
const tablink = document.querySelectorAll('.tablink');

const defaultOpen = document.querySelector('#defaultOpen');
const tabActive = document.querySelector('.tabcontent.active');

console.log(getComputedStyle(tabActive).backgroundColor);

defaultOpen.style.backgroundColor = getComputedStyle(tabActive).backgroundColor;

tablist.addEventListener('click', (e) => {
    const targetElement = e.target;
    console.log('targetElement');
    const dataPipka = targetElement.dataset.Pipka;
    console.log(dataPipka);
    for (let tab of tabcontent) {
        tab.classList.remove('active');
        if(tab.id == dataPipka) {
            tab.classList.add(active);
        }
    }
})