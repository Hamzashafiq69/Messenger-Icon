var notify = document.querySelector(".notify");
var btn = document.querySelector(".btn");



const active = ()=>{
    var add = Number(notify.getAttribute("data-count") || 0)
    notify.setAttribute("data-count", add + 1)
    if(add === 0){
        notify.classList.add("add-num")
    }
    false;
}
btn.addEventListener("click", active)