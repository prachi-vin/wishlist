const wishListInput = document.getElementById("wishListInput")
const wishListButton = document.getElementById("wishListButton")
const wishlistMainContainer = document.getElementById("wishlist-main-container")
                    

//console.log("hi",wishListInput,wishListButton)

wishListButton.addEventListener('click',(event)=>{
    //console.log("add the wish!",wishListInput.value)
    const wishInputValue = wishListInput.value;
    if(!wishInputValue.trim()) return
    addwishList(wishInputValue);
    wishListInput.value='';
    
})

function addwishList(wishInputValue){
    //console.log("function called!",wishInputValue)
    const wishlistContainer = document.createElement('div')
    const wishlistMarkedCheckbox = document.createElement('input');
    wishlistMarkedCheckbox.type='checkbox';
    const wishlistTitleSpan = document.createElement('span');
    wishlistTitleSpan.innerText=wishInputValue;
    const  wishlistDeleteButton = document.createElement('button');
    wishlistDeleteButton.innerText=`Delete`;
    wishlistContainer.appendChild(wishlistMarkedCheckbox);
    wishlistContainer.appendChild(wishlistTitleSpan)
    wishlistContainer.appendChild(wishlistDeleteButton)
    //console.log(wishlistContainer)
   
    wishlistMainContainer.prepend(wishlistContainer);

    wishlistDeleteButton.addEventListener('click',()=>{
        wishlistMainContainer.removeChild(wishlistContainer)
    }); 

    wishlistMarkedCheckbox.addEventListener('click',()=>{
        //console.log(event.target.checked)
        const checkboxValue = event.target.checked;
        if(checkboxValue) 
            wishlistContainer.classList.add('checkbox-marked');
        else
            wishlistContainer.classList.add('checkbox-unmarked');    
    
    })
}