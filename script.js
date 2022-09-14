var container=document.createElement("div");
container.setAttribute("class","container"); 
var col=document.createElement("div");
col.setAttribute("class","col-sm-12");
var row=document.createElement("div");
container.append(col);
col.append(row);
async function emoji(){
    let res=await fetch("https://emojihub.herokuapp.com/api/random"); 
    let res1=await res.json();
console.log(res1);
row.innerHTML=`
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header text-center"><b>Emoji-Hub</b></div>
  <div class="card-body">
  <div class="card-text1"><b>CATEGORY:</b> ${res1.group}</div>
  <div class="card-text2"> ${res1.htmlCode[0]},${res1.htmlCode[1]}</div>
  </div>
</div>
`;
document.body.append(container); 
    }
    emoji();


  