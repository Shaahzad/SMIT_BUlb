document.body.style.backgroundColor="black"
const offimg = document.getElementById("offimg")
const imgon = document.getElementById("imgon")


function onHandler(){
offimg.style.display="none"
imgon.style.display="block"
document.body.style.backgroundColor="yellow"

}
function offHandler(){
    offimg.style.display="block"
    imgon.style.display="none"
    document.body.style.backgroundColor="black"
    
    }