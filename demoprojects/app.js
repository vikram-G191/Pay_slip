// document.write("Hi")

// var a=100;
// var a=200
// {

//     console.log(a)
// }

// let b=200;
// b=300
// {

//     console.log(b)
// }

// const c=300;
// {
//     console.log(c)

// }

// const a=100;
// function demo(){
//     console.log("demofunctions"+a);
// }
// console.log(a);
// demo()
// console.log(a);

// function other(){
// console.log(a);
// }
// other()
// // console.log(a + b + c)

// document.getElementById("head").innerHTML="<li>Html</li>"
// // document.getElementById("head").innerText="<li>Html</li>"
// // document.getElementById("head").style="color : red"
// document.getElementById("head").className="bg-primary text-white"

// console printing 

// let a=100;
// console.log(a);
// console.log("The value of a is :"+a);
// console.log("the value" , a)
// console.log(`value of a is : ${a}`) //backticks template literals

// let a = 1000;
// let b = "1000"
// console.log(a,b)

//declare variable but not assigned the value is called as undefined

// let firstValue;
// console.log(firstValue)

//null

// let value = null;
// console.log(typeof(value))

//arrays

// let arr =[10,"vikram","23"]
// console.log(arr);
// console.log(arr.length);
// console.log(typeof(arr));


// let itemlist=[];
// function addItem(){
//     let stockItem = document.getElementById("item").value;
//     itemlist.push(stockItem);
//     console.log(itemlist);

//     document.getElementById("divid").innerHTML=itemlist;
//     document.getElementById("item").value="";
// }
// document.getElementById("btnid").addEventListener("click",addItem);


// objects and dom 

// 

const calc = () => {
    let bpay = parseInt(document.getElementById("bpay").value);
    let hpay = parseInt(document.getElementById("hpay").value = bpay * (10 / 100));
    let dpay = parseInt(document.getElementById("dpay").value = bpay * (5 / 100));
    let tpay = parseInt(document.getElementById("tpay").value = bpay * (15 / 100));
    let ppay = parseInt(document.getElementById("ppay").value = bpay * (15 / 100));

   let gpay =  parseInt(document.getElementById("gpay").value = bpay+hpay+dpay+tpay+ppay);
   let npay = parseInt(document.getElementById("npay").value = gpay-ppay);  
}
document.getElementById("bpay").addEventListener("keyup",calc)

const display = () =>{
    let bpay  = document.getElementById("bpay").value;
    document.getElementById("bd").innerHTML=bpay;
    let hpay  = document.getElementById("hpay").value;
    document.getElementById("hd").innerHTML=hpay;
    let dpay  = document.getElementById("dpay").value;
    document.getElementById("dd").innerHTML=dpay;
    let tpay  = document.getElementById("tpay").value;
    document.getElementById("td").innerHTML=tpay;
    let ppay  = document.getElementById("ppay").value;
    document.getElementById("pd").innerHTML=ppay;
    let gpay  = document.getElementById("gpay").value;
    document.getElementById("gd").innerHTML=gpay;
    let npay  = document.getElementById("npay").value;
    document.getElementById("nd").innerHTML=npay;
}
document.getElementById("cbtn").addEventListener("click",display)



