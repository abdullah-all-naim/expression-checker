const emailBox = document.getElementById('email-box')
const checkMail = document.getElementById('check-email')
const phoneBox = document.getElementById('phone-box')
const checkPhone = document.getElementById('check-phone')
const postBox = document.getElementById('post-box')
const checkPost = document.getElementById('check-post')
const inputEmail = document.getElementById('input-email')
const emailCheckBtn = document.getElementById('email-check-btn')
const inputPhone = document.getElementById('input-phone')
const phoneCheckBtn = document.getElementById('phone-check-btn')
const inputPost = document.getElementById('input-post')
const postCheckBtn = document.getElementById('post-check-btn')

emailBox.addEventListener('click', () => {
    checkMail.removeAttribute('style');
    checkPhone.style.display = 'none'
    checkPost.style.display = 'none'
})
phoneBox.addEventListener('click', () => {
    checkPhone.removeAttribute('style');
    checkMail.style.display = 'none'
    checkPost.style.display = 'none'
})
postBox.addEventListener('click', () => {
    checkPost.removeAttribute('style');
    checkMail.style.display = 'none'
    checkPhone.style.display = 'none'
})

emailCheckBtn.addEventListener('click', () => {
    if (inputEmail.value == '') {
        alert('Please enter an email address')
    }
    else {

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(String(inputEmail.value).toLowerCase())) {
            alert('This is a valid email address')
            inputEmail.value = ''

        }
        else {
            alert('This is not a valid email address')
            inputEmail.value = ''
        }
    }

})
phoneCheckBtn.addEventListener('click', () => {
    if (inputPhone.value == '') {
        alert('Please enter a phone number')
    }
    else {
        const phoneregex = /^(01[356789])(\d{8})$/
        if (phoneregex.test(String(inputPhone.value))) {
            alert('This is a valid Bangladeshi phone number')
            inputPhone.value = ''
        }
        else {
            alert('This is not a valid Bangladeshi phone number')
            inputPhone.value = ''
        }
    }
})

postCheckBtn.addEventListener('click', () => {
    if (inputPost.value == '') {
        alert('Please enter a phone number')
    }
    else {
        const postregex = /^([0-9]{4}|[a-zA-Z][a-zA-Z ]{0,49})$/
        if (postregex.test(String(inputPost.value))) {
            alert('This is a valid post code')
            inputPost.value = ''
        }
        else {
            alert('This is not a valid post code')
            inputPost.value = ''
        }
    }
})