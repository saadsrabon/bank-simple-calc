// caching the Items For Use
const email =document.getElementById('email-field')
const password =document.getElementById('password')
const submitBtn = document.getElementById('submit-btn');





// add Event listener to the submit button
submitBtn.addEventListener('click',()=>{
    const emailValue =email.value;
    const passValue =password.value;

    if(emailValue === 'saadsrabon2@gmail.com' && passValue == 12345){
        window.location = 'bank.html'
    }
    else{
        alert('Please Give Correct Credentials')
    }
    console.log('ok')
})