const basicPrice = document.querySelector('.basic-price')
const professionalPrice = document.querySelector('.professional-price')
const masterPrice = document.querySelector('.master-price')


function isChecked(){
    if(document.querySelector('input').checked){
        basicPrice.textContent = "19.99"
        professionalPrice.textContent = "24.99"
        masterPrice.textContent = "39.99"
    }else{
        basicPrice.textContent = "199.99"
        professionalPrice.textContent = "249.99"
        masterPrice.textContent = "399.99"
    }
}