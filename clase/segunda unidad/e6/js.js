for(let tiempo = [9,0];`${tiempo[0]}.${tiempo[1]}` <= 21;tiempo[1]+=5){
    if(tiempo[1] >=60){
        tiempo[0]++;
        tiempo[1] = 0;
    }
    document.write(`${tiempo[0]}:${tiempo[1] >= 10 ? tiempo[1] : "0"+tiempo[1]} <br/>`)
}
