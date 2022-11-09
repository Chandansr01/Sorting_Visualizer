/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/

/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_cus=document.getElementById("custom");
var hamburger = document.getElementById("ham-activate");
var inp_aspeed=document.getElementById("a_speed");
var parameters = document.querySelector(".array-inputs");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.
hamburger.addEventListener("click",activate_nav);
inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

var newstyles='display:block; position:absolute; background-color:00; top:23%; left:0; height:50vh';

function activate_nav(){
    console.log("clicked");
    // if(parameters.style.display=="block"){
    //     parameters.style.display="none"
    // }
    // else{
    //     parameters.style=newstyles;
    // }
    parameters.classList.toggle('active');
    console.log(parameters.classList)
}
// to print elementss of the array
function printele(arr){
    var arr = arr.split(',')
    array_size=arr.length;
    console.log("you have entered",arr)
    for(var i=0;i<arr.length;i++)
        {
            div_sizes[i]=arr[i];
            divs[i]=document.createElement("div");
            cont.appendChild(divs[i]);
            margin_size=0.1;
            divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/arr.length-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        }
        console.log("sizes",div_sizes)
        console.log("sizes",divs)

}
function generate_array()
{
    cont.innerHTML="";
    // printele(inp_cus.length==0)
    if(inp_cus.value.length!=0){
        printele(inp_cus.value)
    }
    else{
        console.log("reached here")
        for(var i=0;i<array_size;i++)
        {
            div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) +10);
            divs[i]=document.createElement("div");
            cont.appendChild(divs[i]);
            margin_size=0.1;
            divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        }
        console.log("sizes",div_sizes)
        console.log("sizes",divs)
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    
    *****************
*/