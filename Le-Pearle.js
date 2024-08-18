 
 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(){
  
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
     
      if (!event.target.matches('.dropbtn')) {
       
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
           
            openDropdown.classList.remove('show');
            
          }
        }
      }
    }
   
  
  
  window.onload=()=>{
    document.getElementById("heading-div").style.left="50%";
  }
  
  
  let sections = document.querySelectorAll("section");
  window.onscroll = ()=>{
    sections.forEach(sec=>{
      let top=window.scrollY;
      let offset=sec.offsetTop - 500;
      let height=sec.offsetHeight;
      if(top >= offset && top < offset + height){
        sec.classList.add("show-animate");
      }
    
  
    })
  }
  
  document.querySelector(".cartBtn").addEventListener("click",()=>{
    document.querySelector(".cart-number").innerText= "1";
  })
  
  