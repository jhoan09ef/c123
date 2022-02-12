var tabButtons1 = document.querySelectorAll(".tabContainer1 .buttonContainer1 button");
var tabPanels1 = document.querySelectorAll(".tabContainer1  .tabPanels1");

function showPanel1(panelIndex, colorCode) {
    tabButtons1.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons1[panelIndex].style.backgroundColor = colorCode;
    tabButtons1[panelIndex].style.color = "red";
    tabPanels1.forEach(function (node) {
        node.style.display = "none";
    });
    tabPanels1[panelIndex].style.display = "block";
    tabPanels1[panelIndex].style.backgroundColor = colorCode;
}
showPanel1(0, '#f44336');