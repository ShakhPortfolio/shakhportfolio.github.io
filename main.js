

let accountInfo = document.getElementById("account-info");
let accountClick = document.getElementById("account-click");
let accountIsOpen = false;

accountClick.addEventListener("click", ()=> {
    if(accountIsOpen){
        accountInfo.style.display = "none";
        accountIsOpen = false;
    }else{
        accountInfo.style.display = "block";
        accountIsOpen =  true;
    }
})




let statusClick = document.getElementById("status-click");
let statusCategory = document.getElementById("statusCategory");
let statusIsOpen = false;

statusClick.addEventListener("click", ()=> {
    if(statusIsOpen){
        statusCategory.style.display = "none";
        statusIsOpen = false;
    }else{
        statusCategory.style.display = "flex";
        statusIsOpen =  true;
    }
})



let sidebarLeft = document.getElementById("sidebar-left");
let faBars = document.getElementById("fa-bars");
let sidebarIsOpen = false;


faBars.addEventListener("click", ()=> {
    if(sidebarIsOpen){
        sidebarLeft.style.left = "-100%";
        sidebarIsOpen = false;       
    }else{
        sidebarLeft.style.left = "0"
        sidebarIsOpen =  true;
    }
})
