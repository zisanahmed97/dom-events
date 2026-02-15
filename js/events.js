console.log("file connected")


//option 2 
       function makeYellow(){
            document.body.style.backgroundColor='yellow';
        }

        function makeRed(){
            document.body.style.backgroundColor='red';
        }


//option 3
const btnMakeGreen= document.getElementById('btn-make-green');
btnMakeGreen.onclick=function makeGreen(){
    document.body.style.backgroundColor='green';
}