var startbtn=document.getElementById("start");
var pause=document.getElementById("pause");
var restart=document.getElementById("restart");


var h=0;
var m=0;
var s=0;
let timer;

startbtn.addEventListener("click",function()
{
    timer=true;
    stopwatch();
})

pause.addEventListener("click",function()  
    {
        timer=false;
    /* document.getElementById("hh").value=h;
    document.getElementById("mm").value=m;
    document.getElementById("ss").value=s; */

    });

restart.addEventListener("click",function()
{
    timer=false;
    h=0;
    m=0;
    s=0;
    document.getElementById("hh").value=0;
    document.getElementById("mm").value=0;
    document.getElementById("ss").value=0;

});

function stopwatch()
{
    if(timer)
    {
        s++;
        if(s==60)
        {
            m++;
            s=0;

        }
        if(m==60)
        {
            h++;
            m=0;
            s=0;
        }

        document.getElementById("hh").value=h;
        document.getElementById("mm").value=m;
        document.getElementById("ss").value=s;
        

    }
    

    setTimeout(stopwatch,1000);

}