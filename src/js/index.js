const buttons = document.querySelectorAll('.seance-content__item-button');

buttons.forEach(button => {
    let oldPrice = button.textContent;
    button.addEventListener('mouseover', (event) => {
        button.textContent = "Buy";
    })
    button.addEventListener('mouseleave', (event) => {
        button.textContent = oldPrice;
    })
})