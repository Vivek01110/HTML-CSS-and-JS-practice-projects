const endate = new Date('14 Dec , 2024 , 20:20:00').getTime();
const startdate = new Date().getTime();

if (endate - startdate > 0){
const x = setInterval(function updatetimer(){
    const currenttime  = new Date().getTime();

    const distCovered = currenttime - startdate;
    const distpending = endate - currenttime;


    //days , hours , min , secs

    const days = Math.floor(distpending/(1000 * 60 * 60 * 24)); //convert milisecond into days

    const hours = Math.floor((distpending%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); // first divide by 1 days remaning hours in milisecond (convert into hours);

    const mins = Math.floor((distpending%(1000 * 60 * 60))/(1000*60));

    const secs = Math.floor((distpending%(1000 * 60))/(1000));


    //replicate on the ui 

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mints").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    const totalDist = endate - startdate;
    const percentagedist = (distCovered/totalDist)*100;

    document.getElementById("progress_bar").style.width = percentagedist + "%";

    if(distpending <= 0){
        clearInterval(x);
        document.getElementsById("progress_bar").style.width = "100%";
        document.getElementsById("main_container").innerHTML = "EXPIRED";
    }
},1000);
}

