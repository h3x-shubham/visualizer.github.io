function change_range(){
    bars.innerHTML="";
    w=range.value;
    createValues();
    createBars();
    console.log(values.length);
}