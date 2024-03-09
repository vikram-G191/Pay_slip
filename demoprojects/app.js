
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



