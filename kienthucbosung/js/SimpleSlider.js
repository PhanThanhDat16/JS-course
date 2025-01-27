window.addEventListener("load",function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let positionX = 0;
    let index = 0;

    prevBtn.addEventListener("click", function(e){
        handleChangeSlide(-1);
    });

    nextBtn.addEventListener("click",function(e){
        handleChangeSlide(1);
    });
    
    [...dotItems].forEach((item) => item.addEventListener("click", function(e){
        [...dotItems].forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
        const sliderData = parseInt(e.target.dataset.index);
        index = sliderData;
        positionX = -1 * sliderData * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
    }));


    function handleChangeSlide(direction){
        if(direction === 1){
            index++;
            if(index >= slidesLength ){
                index = slidesLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }else if(direction === -1){
            index--;
            if(index < 0){
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }
        [...dotItems].forEach(item => item.classList.remove("active"));
        [...dotItems][index].classList.add("active");
    }
    

});





































// window.addEventListener("load", function () {
//     const sliderMain = document.querySelector(".slider-main");
//     const sliderItems = document.querySelectorAll(".slider-item");
//     const nextBtn = document.querySelector(".slider-next");
//     const prevBtn = document.querySelector(".slider-prev");
//     const dotItems = document.querySelectorAll(".slider-dot-item");
//     const sliderItemWidth = sliderItems[0].offsetWidth;
//     const slidesLength = sliderItems.length;
//     let postionX = 0;
//     let index = 0;
//     nextBtn.addEventListener("click", function () {
//       handleChangeSlide(1);
//     });
//     prevBtn.addEventListener("click", function () {
//       handleChangeSlide(-1);
//     });
//     [...dotItems].forEach((item) =>
//       item.addEventListener("click", function (e) {
//         [...dotItems].forEach((el) => el.classList.remove("active"));
//         e.target.classList.add("active");
//         const slideIndex = parseInt(e.target.dataset.index);
//         index = slideIndex;
//         postionX = -1 * index * sliderItemWidth;
//         sliderMain.style = `transform: translateX(${postionX}px)`;
//       })
//     );
//     function handleChangeSlide(direction) {
//       if (direction === 1) {
//         if (index >= slidesLength - 1) {
//           index = slidesLength - 1;
//           return;
//         }
//         postionX = postionX - sliderItemWidth;
//         sliderMain.style = `transform: translateX(${postionX}px)`;
//         index++;
//       } else if (direction === -1) {
//         if (index <= 0) {
//           index = 0;
//           return;
//         }
//         postionX = postionX + sliderItemWidth;
//         sliderMain.style = `transform: translateX(${postionX}px)`;
//         index--;
//       }
//       [...dotItems].forEach((el) => el.classList.remove("active"));
//       dotItems[index].classList.add("active");
//     }
//   });