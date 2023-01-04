const timer = new Date();

export const formatTimeElapsed = (seconds: number)=>{
    timer.setHours(0,0,seconds,0);
    const min = timer.getMinutes();
    const sec = timer.getSeconds();
    return `${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}` 
}