let count=0

let increase=document.getElementById("increase");
let reset=document.getElementById("reset");
let decrease=document.getElementById("decrease")

function add(){
    count+=1
    var_name.innerHTML=count;
}
function sub(){
    count-=1
    var_name.innerHTML=count;
}
function set(){
    count=0
    var_name.innerHTML=count;
}

increase.addEventListener('click',add)
decrease.addEventListener('click',sub)
reset.addEventListener('click',set)

