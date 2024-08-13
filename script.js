function showPage(pageId){
    document.querySelectorAll('.container').forEach(container=>{
        // container.style.display = 'none';
        container.classList.remove('active')
    })
    // document.getElementById('loginPage'+pageId).style.display = 'block';
    document.getElementById(pageId).classList.add('active');
}
function submitRegistration(){
    showPage('registrationSuccessPage');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password=document.getElementById('password').value;
    document.getElementById('registrationData').innerHTML=`<p>Name: ${name}</p><p>Email: ${email}</p><p>Password: ${password}</p>`;
    registrationData.style.padding='20px';
    registrationData.style.display='flex'
    registrationData.style.flexDirection='column';
    registrationData.style.gap='1rem'
    registrationData.style.alignItems="flex-start";

}
function submitLogin(){
    showPage('loginSuccessPage');
    const email = document.getElementById('loginEmail').value;
    const password=document.getElementById('loginPassword').value;
    document.getElementById('loginData').innerHTML=`<p>Email: ${email}</p><p>Password: ${password}</p>`;
    loginData.style.padding='20px';
    loginData.style.display='flex'
    loginData.style.flexDirection='column';
    loginData.style.gap='1rem'
    loginData.style.alignItems="flex-start";

}