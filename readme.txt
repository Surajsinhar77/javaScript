JavaScript DOM Notes for the revision 


document.querySelector("h1")                   // to get the whole element 

document.querySelector('h2').attributes        // to get all the attributes in array 

document.querySelector('h1').setAttribute("nameOfTheAttribute", "Change to") 

document.querySelector('h1').getAttribute("nameOfTheAttribute")              // to get attributes 

document.querySelector("h3").innerHTML;         "// this is use to get inner HTML and text content with it you can add html code also using this line of code "

document.querySelector("h2").innerHTML = "<p> Hello people </p>";  we can add html also using innerHTML

document.querySelector(".helo").textContent;     // you can get only text content inside the html only 
document.querySelector(".helo").textContent = "here you can use to insert text also for the element";

document.querySelector(".ho").classList.add('head');  //head is classname which is written in the 
document.querySelector(".ho").classList.remove('head');  //head is classname which is written in the 

document.querySelector(".ho").classList.toggel('head');  //head is classname which is written in the this is work like normal home switch button