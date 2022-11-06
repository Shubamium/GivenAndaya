function switchClass(el,classname){

    // if the class exist 
    if(el.classList.contains(classname)){
        el.classList.remove(classname);
    }
    else{  //If the class does not exist
        el.classList.add(classname); //Add the class
    }
    
}


function hideOnBlur(element){
   document.addEventListener("click", (e) =>{
        let within = e.composedPath().includes(element);

        if(!within){
            element.classList.add("hidden");
        }

        console.log("try hide");

   })
}
