const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel")

function tabClick(event){
    const buttonPress = event.currentTarget;
    const target = buttonPress.dataset.tab;

    tabButtons.forEach(button => button.classList.remove("active"));
    tabPanels.forEach(panel => panel.classList.remove("active"));

    buttonPress.classList.add("active");
    document.getElementById(target).classList.add("active");
}

tabButtons.forEach(button => {
    button.addEventListener("click", tabClick);
});