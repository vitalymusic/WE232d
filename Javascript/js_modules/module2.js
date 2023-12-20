 // tabs
 export function makeTabs(){
 let tabButtons = document.querySelectorAll('.tabButtons button');

 let tabs = document.querySelectorAll('.tabContent div');

 function showTab(id){
     for(tab of tabs){
         tab.style.display = "none";
     }
     document.querySelector("div#"+id).style.display = "block";
 }

 for(button of tabButtons){
     button.onclick = (e)=>{
         let tab = e.target.dataset.tab;
         showTab(tab);
     }
 }
 tabButtons[0].click();
 // showTab("tab1");
}