// Navbar Menu
let linedMenu = document.querySelector(".nav-menu-ul");
let linedMenuBtn = document.querySelector(".res-menu-bar-lines");
let xForLinedMenu = document.querySelector(".innerRes-menu-bar-lines");
let spansForLined = document.querySelectorAll(".res-menu-bar-lines span")

// SideBar Menu
let sidebar = document.querySelector(".sidebar");
let sidebarMenuBtn = document.querySelector(".res-menu-sidebar-lines");
let sidebarRight = document.querySelector(".sidebar-right");
let sidebarLeft = document.querySelector(".sidebar-left");

//Hamburger
linedMenuBtn.addEventListener("click", function(e) {
    linedMenu.classList.toggle("active-nav-menu-ul");
    if (linedMenu.matches(".active-nav-menu-ul")) {
        for (let i = 0; i < spansForLined.length; i++) {
            spansForLined[i].style.height = "0";
        }
        xForLinedMenu.style.fontSize = "20px";
    } else {
        xForLinedMenu.style.fontSize = "0";
        for (let i = 0; i < spansForLined.length; i++) {
            spansForLined[i].style.height = "4px";
        }
    }
})

//SideBar-Arrow
sidebarMenuBtn.addEventListener("click",function(e) {
    sidebar.classList.toggle("active-sidebar");
    if (sidebar.matches(".active-sidebar")) {
        sidebarRight.style.fontSize = "0";
        sidebarLeft.style.fontSize = "16px";
    }else {
        sidebarLeft.style.fontSize = "0";
        sidebarRight.style.fontSize = "16px";
    }
})

window.addEventListener("resize",(e)=>{
    if (window.innerWidth > 920) {
        {
            sidebar.classList.remove("active-sidebar");
        }
    }
})