function show(el,disableAll){

    let showId = el.dataset.showId;
    let toShow = el.dataset.show;



    // Get the parent
    allParent = document.querySelector("[data-show-main='" + showId + "']");
   
    let target = allParent.querySelector("[data-show=" + toShow + "]");

    console.log(target);


    for(element of allParent.children){
        if(element !== target){
            // Hide all
            element.classList.add("hidden");
        }
    };

    target.classList.remove("hidden");
    el.onclick
}