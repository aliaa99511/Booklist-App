

var btn=document.getElementById("btn");
var title=document.getElementById("title")
var another=document.getElementById("another")
var ISBN=document.getElementById("ISBN")
var green=document.getElementById("green");


var table=document.querySelector("table")
var template=document.querySelector("template")
var clone=template.content.cloneNode(true)
var tbody=document.querySelector("tbody")



btn.addEventListener("click",function(){

    var clone=template.content.cloneNode(true)
    var td=clone.querySelectorAll("td")
    td[0].innerText=title.value;
    td[1].innerText=another.value;
    td[2].innerText=ISBN.value;
    tbody.appendChild(clone)


    green.classList.remove("none")
    green.innerHTML='Book Added!'

    setTimeout (function(){
        green.classList.add("none")

    },3000)



    /********************** */

    var table=document.querySelector("table")

    table.addEventListener("click", function(e){

        if(e.target.classList.contains("deleteRow")){

            //حذف كل ال tr
            e.target.closest("tr").remove();

            green.classList.remove("none")
            green.innerHTML='Book Removed!'
    
            setTimeout (function(){
                green.classList.add("none")
    
            },3000)
            
        }
    })

    /********************** */
    
    

})

