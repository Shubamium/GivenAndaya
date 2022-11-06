let allSelection = document.querySelectorAll(".selection"); 

for(let i = 0; i < allSelection.length; i++){
    // Initialize all selection module
    selectInit(allSelection[i]);
}

function selectInit(selection){
    
    // Get all control
    let allControls = selection.querySelectorAll(".select-menu .select-open");

    // Get back button
    let backButton = selection.querySelector(".select-menu-btn");
    
    // Assign the function to the controls buttons
    for(let i = 0; i < allControls.length; i++){
        allControls[i].addEventListener("click", ()=>
            switchPage(selection, allControls[i].dataset.selectOpen,allControls)
        );
    //    console.log("inite");
    }

    // Assign the function to the back button
    if(backButton != null)backButton.addEventListener("click",( )=> switchPage(selection) );

}

function switchPage(container, page, controls){

    // If the container doesn't have nohide class then both view and items stays visible
    if(!container.classList.contains("nohide")) switchView(container);

    // Get all select item
    let allItems = container.querySelectorAll(".select-item[data-select]");
    
    // Disable all page
    for(let i = 0; i < allItems.length;i++){
        
        allItems[i].classList.add("hidden");
        // Enable page with dataset of {page}
        if(allItems[i].dataset.select == page){
            console.log(page);

           allItems[i].classList.remove("hidden");
        }

        controls[i].classList.remove("selected");
        if(controls[i].dataset.selectOpen == page) controls[i].classList.add("selected");
    }




}

function switchView(container){
        // Get Menu
        let menu = container.getElementsByClassName("select-menu")[0];
        // Get allItem container
        let itemsContainer = container.getElementsByClassName("select-items")[0];

        // If the menu is disabled then switch
        if(menu.classList.contains("hidden")){

            // Items -> Menu
            menu.classList.remove("hidden");
            itemsContainer.classList.add("hidden");

        }else{
            // Menu -> Items
            menu.classList.add("hidden")
            itemsContainer.classList.remove("hidden");
        }
    
        
}