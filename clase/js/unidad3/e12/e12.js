document.getElementById("button").addEventListener("click",()=>{
    let a = window.open("", "", "width=800,height=600");
    a.document.write("<h1>Cierrame</h1>")
    setTimeout(()=>{a.close()},3000)
})
