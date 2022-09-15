let arr=[];
let textEl=document.getElementById("rectangle-el");
let itemEl=document.getElementById("item1");
let item2El=document.getElementById("item2");
let item3El=document.getElementById("item3");
let btnEl=document.getElementById("btn");

btnEl.addEventListener('click',function(){
    arr.push(textEl.value);
    textEl.value="";
    render1(arr);
    render2(arr);
    render3(arr);
    arr=[];
})

function render1(arr){
    let temporaryString="";
    if(arr){
        let convert=(arr[0]*3.281).toFixed(3);
        let convert1=(arr[0]*0.304).toFixed(3);
        temporaryString+= `<p id="line2"> ${arr[0]} meters = ${convert} feet | ${arr[0]} feet = ${convert1} </p>`
        localStorage.clear();
    }
    else{
        temporaryString+=`
        1 meters = 3.281 feet | 1 feet = 0.304 meters
        `
    }
    itemEl.innerHTML=temporaryString;
}

function render2(arr){
    let temporaryString1="";
    if(arr){
        let convert2=(arr[0]*0.264).toFixed(3);
        let convert3=(arr[0]*3.787).toFixed(3);
        temporaryString1+=`<p id="line3"> ${arr[0]} litres = ${convert2} gallons | ${arr[0]} gallons = ${convert3} litres </p>`
    }
    item2El.innerHTML=temporaryString1;
}

function render3(arr){
    let temporaryString3="";
    if(arr){
        let convert4=(arr[0]*2.204).toFixed(3);
        let convert5=(arr[0]*0.453).toFixed(3);
        temporaryString3+=`<p id="line4"> ${arr[0]} kilos =${convert4} pounds | ${arr[0]} pounds = ${convert5} kilos </p>`
    }
    item3El.innerHTML=temporaryString3;
}
console.log(arr);