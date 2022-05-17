
const add = function(){
    const receta = document.getElementById("col_rec")   
    const medicina = document.getElementById("vaca1")
    const clon_medicina =medicina.cloneNode(true) 
    receta.appendChild(clon_medicina)
}

const main =function(){
    
    

    const but =document.getElementById("agregar")
    but.addEventListener("click", add)
    
    console.log(receta.children)

}



window.addEventListener("load", main)