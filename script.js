const Quaris=document.getElementsByClassName("item");
const Title=document.getElementById("Title");
var Turn="X";

function Final(n1,n2,n3){
    if(Quaris[n1].innerHTML==Quaris[n2].innerHTML && Quaris[n2].innerHTML==Quaris[n3].innerHTML && Quaris[n1].innerHTML != ""){
        if(Quaris[n1].innerHTML=="X"){
        Title.innerText="Game Over";
        Title.style.color="#090c31";
        Title.style.fontSize="48px";
        Title.style.fontWeight="500";
        Quaris[n1].style.background="#088178";
        Quaris[n2].style.background="#088178";
        Quaris[n3].style.background="#088178";
        setInterval(function(){Title.innerText+="."},500);
        setTimeout(function(){location.reload()},2000);
        }
        else if(Quaris[n1].innerHTML=="O"){
            Title.innerText="Game Over";
            Title.style.color="#090c31";
            Title.style.fontSize="48px";
            Title.style.fontWeight="500";
            Quaris[n1].style.background="#088178";
            Quaris[n2].style.background="#088178";
            Quaris[n3].style.background="#088178";
            setInterval(function(){Title.innerText+="."},500);
            setTimeout(function(){location.reload()},2000);
        }
    }
}
function Comparer(){
    if(Quaris[0].innerHTML==Quaris[1].innerHTML && Quaris[1].innerHTML==Quaris[2].innerHTML && Quaris[0].innerHTML != ""){
    Final(0,1,2);
    }
    else if(Quaris[0].innerHTML==Quaris[3].innerHTML && Quaris[3].innerHTML==Quaris[6].innerHTML && Quaris[0].innerHTML != ""){
    Final(0,3,6);
    }
    else if(Quaris[1].innerHTML==Quaris[4].innerHTML && Quaris[4].innerHTML==Quaris[7].innerHTML && Quaris[1].innerHTML != ""){
    Final(1,4,7);
    }
    else if(Quaris[2].innerHTML==Quaris[5].innerHTML && Quaris[5].innerHTML==Quaris[8].innerHTML && Quaris[2].innerHTML != ""){
    Final(2,5,8);
    }
    else if(Quaris[3].innerHTML==Quaris[4].innerHTML && Quaris[4].innerHTML==Quaris[5].innerHTML && Quaris[3].innerHTML != ""){
    Final(3,4,5);
    }
    else if(Quaris[6].innerHTML==Quaris[7].innerHTML && Quaris[7].innerHTML==Quaris[8].innerHTML && Quaris[6].innerHTML != ""){
    Final(6,7,8);
    }
    else if(Quaris[0].innerHTML==Quaris[4].innerHTML && Quaris[4].innerHTML==Quaris[8].innerHTML && Quaris[0].innerHTML != ""){
    Final(0,4,8);
    }
    else if(Quaris[2].innerHTML==Quaris[4].innerHTML && Quaris[4].innerHTML==Quaris[6].innerHTML && Quaris[2].innerHTML != ""){
    Final(2,4,6);
    }
}

function Game(id){
    var item=document.getElementById(id);
    if(Turn=="X"){
        item.innerText="X";
        item.style.color="#090c31";
        Turn="O";

    }
    else if(Turn=="O"){
        item.innerText="O";
        item.style.color="#090c31 ";
        Turn="X";
    }
    Comparer()
}