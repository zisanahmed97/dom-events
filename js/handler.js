     // title button 
     
     document.getElementById('btn-title-text').addEventListener('click', function () {
          
           const titleText = document.getElementById('title-h1');
           
           titleText.innerText='updated your title text';


        })


 // log in button
        document.getElementById('btn-login') .addEventListener('click', function (){
        const loginUser = document.getElementById('user');
        loginUser.innerText='user logged in successfully';
     })