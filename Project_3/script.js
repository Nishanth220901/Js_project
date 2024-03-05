let signin=()=>{
        let username=document.getElementById('uname').value;
        let password=document.getElementById('psw').value;
        let cpassword=document.getElementById('cpsw').value;
        let phone=document.getElementById('mob').value;
        
    
    if(password!=cpassword)
    {
        alert('Re-enter the password');
        
        document.getElementById('psw').value='';
        document.getElementById('cpsw').value='';
        
        return;
    }
var user={
    username:username,
    password:password,
    cpassword:cpassword,
    phone:phone
};
localStorage.setItem('user',JSON.stringify(user));
alert('User Signedup succssfully');
document.getElementById('uname').value='';
document.getElementById('psw').value='';
document.getElementById('cpsw').value='';
document.getElementById('mob').value='';
console.log(user);
}
document.getElementById('signup').addEventListener('click',signin)
document.getElementById('print').addEventListener('click',()=>{
    const signup=JSON.parse(localStorage.getItem('user'));
    if(signup)
    {
        const print=window.open('','_blank');
        print.document.write(`Name: ${signup.username}`);
        print.document.write(`Password: ${signup.password}`);
        print.document.write(`Confirmed password: ${signup.cpassword}`);
        print.document.write(`Phone: ${signup.phone}`);
    }
});