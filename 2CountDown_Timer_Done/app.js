function bodyLoad(){
    let Day = document.getElementById('Day')
    let Hour = document.getElementById('Hour')
    let Min = document.getElementById('Min')
    let Sec = document.getElementById('Sec')

    let newYear = '1 Jan 2023';
    let newYearDay = new Date(newYear);
    let currentDay = new Date();

    let Diff = Math.abs(newYearDay - currentDay);
    // console.log(Diff)
    let totalSec = Math.floor(Diff / 1000);

    let sec = Math.floor(totalSec) % 60
    let min = Math.floor(totalSec / 60) % 60;
    let hr = Math.floor(totalSec / 60) % 24;
    let day = Math.floor(totalSec / 3600 / 24) ;
    console.log(day, hr, min, sec)

    Day.innerHTML = day;
    Hour.innerHTML = hr;
    Min.innerHTML = min;
    Sec.innerHTML = sec;
    setTimeout(bodyLoad, 1000)
}

function formatTime(time){
    return time < 10 ? '0 ${time}' : time;
}