var friend=document.querySelector("h5")
var addFriend=document.querySelector("#add")
var flag=0

addFriend.addEventListener("click",function(){
    if(flag==0){
    friend.innerHTML="Friends"
    friend.style.color="green"
    addFriend.innerHTML="Remove Friend"
    flag=1
    }
    else{
        friend.innerHTML="Stranger"
        friend.style.color="red"
        addFriend.innerHTML="Add Friend"
        flag=0
    }
})
