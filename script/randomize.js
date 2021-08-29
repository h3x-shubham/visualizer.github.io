// put create value and bars here on button click 

//enteriung values to the array
function createValues() {
    values=[];
    for (x = 0; x < w; x++) {
      // values.push(Math.floor(Math.random(height)));
      values[x] = Math.floor(Math.random() * (height-200) + 1);
    }
  }
  
function createBars() {
    bars.innerHTML="";
    for (x = 0; x < values.length; x++) {
      const bar = document.createElement("div");
      bar.style.height = `${values[x]}px`;
      bar.classList.add("bar");
      bar.classList.add(`barNo${x}`);
      bars.appendChild(bar);
    }
  }