function showTab(contentID, clickedTab){
    let tabs = document.querySelectorAll(".tab");
    let contents = document.querySelectorAll(".content");
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));
    clickedTab.classList.add("active");
    document.getElementById(contentID).classList.add("active");
};