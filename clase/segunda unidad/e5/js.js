for(let tiempo = [9,0];`${tiempo[0]}.${tiempo[1]}` <= 21.3;tiempo[1]+=3){
    if(tiempo[1] > 3){
        tiempo[0]++;
        tiempo[1] = 0;
    }
    document.write(`${tiempo[0]}:${tiempo[1]}0 <br/>`)
}
