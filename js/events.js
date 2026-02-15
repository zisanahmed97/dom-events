console.log("file connected")


//option 2 for onclick
       function makeYellow(){
            document.body.style.backgroundColor='yellow';
        }

        function makeRed(){
            document.body.style.backgroundColor='red';
        }


//option 3 for onclick
const btnMakeGreen= document.getElementById('btn-make-green');
btnMakeGreen.onclick=function makeGreen(){
    document.body.style.backgroundColor='green';
}

//option 3.1 for onclick (not recommended)
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick= makePurple;
function makePurple(){
    document.body.style.backgroundColor='purple';
}