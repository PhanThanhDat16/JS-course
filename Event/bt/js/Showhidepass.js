window.addEventListener("load", function(){
    const togglePassword = document.querySelector(".toggle");
    togglePassword.addEventListener("click", handleToggle);
    function handleToggle(e){
        const input = this.previousElementSibling;
        const inputType = input.getAttribute("type")
        if(inputType === "password"){
            input.setAttribute("type","text");
        }else{
            input.setAttribute("type","password");
        }
    }
});