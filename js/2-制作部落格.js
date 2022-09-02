//部落格
var list=document.getElementById("list");
var title=document.getElementById("title");
var content=document.getElementById("content");
var btn=document.getElementById("btn");


btn.addEventListener("click",function(){
    list.innerHTML = list.innerHTML+`
    <div class="article">
                <h2>${title.value}</h2>
                <p>${content.value}</p>
            </div>
            `;
    title.value = '';
    content.value= '';
})