var NorthernTerritoryArea = document.querySelector("#Northern-Territory");
var QueenslandArea = document.querySelector("#Queensland");
var WesternAustraliaArea = document.querySelector("#Western-Australia");
var southAustraliaArea = document.querySelector("#south-Australia");
let NewSouthWalesArea = document.querySelector("#New-south-Wales");
let VictoriaArea = document.querySelector("#Victoria");
let TasmaniaArea = document.querySelector("#Tasmania");

NorthernTerritoryArea.addEventListener("mouseenter", function() {
    document.querySelector("#Northern-Territory-img").classList.add("block");
});
NorthernTerritoryArea.addEventListener("mouseleave", function() {
    document.querySelector("#Northern-Territory-img").classList.remove("block");
});

QueenslandArea.addEventListener("mouseenter", function() {
    document.querySelector("#Queensland-img").classList.add("block");
});
QueenslandArea.addEventListener("mouseleave", function() {
    document.querySelector("#Queensland-img").classList.remove("block");
});

WesternAustraliaArea.addEventListener("mouseenter", function() {
    document.querySelector("#Western-Australia-img").classList.add("block");
});
WesternAustraliaArea.addEventListener("mouseleave", function() {
    document.querySelector("#Western-Australia-img").classList.remove("block");
});

southAustraliaArea.addEventListener("mouseenter", function() {
    document.querySelector("#south-Australia-img").classList.add("block");
});
southAustraliaArea.addEventListener("mouseleave", function() {
    document.querySelector("#south-Australia-img").classList.remove("block");
});

NewSouthWalesArea.addEventListener("mouseenter", function() {
    document.querySelector("#New-south-Wales-img").classList.add("block");
});
NewSouthWalesArea.addEventListener("mouseleave", function() {
    document.querySelector("#New-south-Wales-img").classList.remove("block");
});

VictoriaArea.addEventListener("mouseenter", function() {
    document.querySelector("#Victoria-img").classList.add("block");
});
VictoriaArea.addEventListener("mouseleave", function() {
    document.querySelector("#Victoria-img").classList.remove("block");
});

TasmaniaArea.addEventListener("mouseenter", function() {
    document.querySelector("#Tasmania-img").classList.add("block");
});
TasmaniaArea.addEventListener("mouseleave", function() {
    document.querySelector("#Tasmania-img").classList.remove("block");
});
// Image interaction. Mouse over a board to float the image, mouse over that board and the image disappears. This works well in order to give the user a better view of the characteristic landscape of each state and not to confuse it with neighbouring states.


var NorthernTerritoryStatus = localStorage.getItem("NorthernTerritoryStatus") ?
    localStorage.getItem("NorthernTerritoryStatus") :
    false;
var QueenslandStatus = localStorage.getItem("QueenslandStatus") ?
    localStorage.getItem("QueenslandStatus") :
    false;
var WesternAustraliaStatus = localStorage.getItem("WesternAustraliaStatus") ?
    localStorage.getItem("WesternAustraliaStatus") :
    false;
var southAustraliaStatus = localStorage.getItem("southAustraliaStatus") ?
    localStorage.getItem("southAustraliaStatus") :
    false;
var NewSouthWalesStatus = localStorage.getItem("NewSouthWalesStatus") ?
    localStorage.getItem("NewSouthWalesStatus") :
    false;
var VictoriaStatus = localStorage.getItem("VictoriaStatus") ?
    localStorage.getItem("VictoriaStatus") :
    false;
var TasmaniaStatus = localStorage.getItem("TasmaniaStatus") ?
    localStorage.getItem("TasmaniaStatus") :
    false;
// Make the computer remember which states it has clicked on and read, setting the stage for the flag map to appear after all the browsing.


if (NorthernTerritoryStatus) {
    document.querySelector("#text1").innerText = "📌";
}

if (QueenslandStatus) {
    document.querySelector("#text2").innerText = "📌";
}

if (WesternAustraliaStatus) {
    document.querySelector("#text3").innerText = "📌";
}
if (southAustraliaStatus) {
    document.querySelector("#text4").innerText = "📌";
}
if (NewSouthWalesStatus) {
    document.querySelector("#text5").innerText = "📌";
}
if (VictoriaStatus) {
    document.querySelector("#text6").innerText = "📌";
}
if (TasmaniaStatus) {
    document.querySelector("#text7").innerText = "📌";
}
// For the convenience of the viewer, I have marked the states where I have clicked on the details. To make the marks more interesting I made emoji of pins, which I think is much more interesting than text, but I don't make sure that every computer can open them.

if (
    NorthernTerritoryStatus &&
    QueenslandStatus &&
    WesternAustraliaStatus &&
    southAustraliaStatus &&
    NewSouthWalesStatus &&
    VictoriaStatus &&
    TasmaniaStatus
) {
    document.querySelector("#main").classList.add("complete-bg");
}
// Background conversion

console.log(NorthernTerritoryStatus);

function jump(url, name) {
    window.location.href = url;
    localStorage.setItem(name, true);
}
