let allPageContainer = document.querySelectorAll(".pages"); 

// console.log(allPageContainer);

for(let i = 0; i < allPageContainer.length; i++){
    pageInit(allPageContainer[i]);
}

function pageInit(pageContainer){
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    // If there is no button
    if(prevButton == null || nextButton == null){
        console.log("Button is Missing in Page Container: " + pageContainer);
    }

    // Subtract the index by 1
    prevButton.addEventListener("click",() =>{
        pageContainer.dataset.index = parseInt(pageContainer.dataset.index) - 1;
        changePage(pageContainer);
    });

    // Add the index by 1
    nextButton.addEventListener("click",()=>{
        pageContainer.dataset.index = parseInt(pageContainer.dataset.index) + 1;
        changePage(pageContainer);
    });   
}

function changePage(pageContainer){
    let pages = pageContainer.querySelectorAll('.page');

    // console.log(pageContainer);
    // Clamp the index
    if(pageContainer.dataset.index >= pages.length) pageContainer.dataset.index = 0;
    if(pageContainer.dataset.index < 0) pageContainer.dataset.index = pages.length - 1;

    // Loop through each page and disable everypage
    for(let i = 0; i < pages.length;i++){
        pages[i].classList.add("page-hidden");
    }

    // Show the one selected by the index
    pages[pageContainer.dataset.index].classList.remove("page-hidden");

}