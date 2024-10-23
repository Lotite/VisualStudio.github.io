document.getElementById("num").addEventListener("keydown",(input)=>{
    if(!/^[0-9]{0}/.test(input.target.value) && "Backspace" != input.key ){
        input.preventDefault();
      
    }else{}
    alert(input.target.value +  " " + !/[0-9] {0,1}/.test(input.target.value))
    })
