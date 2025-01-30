var friend=document.querySelector("h5")
var addFriend=document.querySelector("#add")
var flag=0

addFriend.addEventListener("click",function(){
    if(flag==0){
    friend.innerHTML="Friends"
    friend.style.color="green"
    addFriend.style.backgroundColor="red"
    addFriend.innerHTML="Remove Friend"
    flag=1
    }
    else{
        friend.innerHTML="Stranger"
        friend.style.color="red"
        addFriend.style.backgroundColor="green"
        addFriend.innerHTML="Add Friend"
        flag=0
    }
})

var heart=document.querySelector(".ri-heart-3-fill")
var temp=0
heart.addEventListener("click",function(){
if(temp==0){
    heart.style.color="red"
    temp=1
}
else{
    heart.style.color="black"
    temp=0
}
})


