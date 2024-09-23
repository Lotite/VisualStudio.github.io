let punto = true
for(let h = 9 , m = 0;`${h}.${m}` <= 21.3;m+=3){
    if(m > 3){ h++; m = 0;}
    punto = m==0
    document.write(`${h >= 10? "" : "0"}${h}:${m}0 <br/>`)
}
