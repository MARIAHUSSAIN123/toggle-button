let btn=document.getElementById("btn");
let mode="light";
btn.onclick=()=>{
    if(mode==="light"){
        document.body.style.backgroundColor="BLACK";
        btn.textContent="Dark-mode";
        mode="dark";
    }else{
        document.body.style.backgroundColor="white";
        btn.textContent="light-mode";
        mode="light";
      


    }
    console.log(mode);
}
