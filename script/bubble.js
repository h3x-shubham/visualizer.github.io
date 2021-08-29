async function bubble(){
    const ele=document.querySelectorAll('.bar');
    console.log(ele);
    for(y=0;y<ele.length;y++){
        for(z=0;z<ele.length-y-1;z++){
            ele[z].style.background='black';
            // ele[z+1].style.background='green';
            if(parseInt(ele[z].style.height)>parseInt(ele[z+1].style.height)){
                 
                 await delay(1);   
                swape(ele[z],ele[z+1]);
                // console.log('   '+values[z]+'  '+values[z+1]);
                // values[z],values[z+1]=swap(values[z],values[z+1]);
                // console.log('   '+values[z]+'  '+values[z+1]);
                
            }
            ele[z].style.background='cyan';
        }
        
        ele[ele.length-y-1].style.background='#03c3c3';
       
    }
    enable();
}