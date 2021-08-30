async function selection() {
  const ele = document.querySelectorAll(".bar");
  console.log(ele);
  for (x = 0; x < ele.length; x++) {
    min = x;
    ele[min].style.background = "blue";
    for (y = x + 1; y < ele.length; y++) {
        // ele.style.background='cyan';
        
        ele[y].style.background = "yellow";
        if (parseInt(ele[min].style.height) > parseInt(ele[y].style.height)) {
            
             
            min = y;
            
        } 
        await delay(1);
        ele[y].style.background = "cyan";
       
    }
    
    if (min !== x) {

        swap(ele[min], ele[x]);
        ele[min].style.background='green';  
         
    }
    ele[x].style.background = "white";
    
  }
  enable();
}
