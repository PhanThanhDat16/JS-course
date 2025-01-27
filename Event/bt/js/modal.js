/**
    <div class="modal">
        <div class="modal-content">
            <i class='bx bx-x modal-close'></i>
        </div>
    </div>
 */

const button = document.querySelector(".button");
const template =`
<div class="modal">
    <div class="modal-content">
        <i class='bx bx-x modal-close'></i>
    </div>
</div>`
button.addEventListener("click", function(e){
    document.body.insertAdjacentHTML("beforeend", template);
});

document.body.addEventListener("click",function(e){
    if(e.target.matches(".modal-close")){
        const modal = e.target.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    }else if(e.target.matches(".modal")){
        e.target.parentNode.removeChild(e.target);
    }
})
