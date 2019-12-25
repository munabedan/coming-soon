
//set the date
var datedue = new Date("Jan 5, 2020 24:00:00").getTime();

//update count every 1 second
var x = setInterval(function(){

    //get todays date and time
    var datenow =new Date().getTime();

    //get the difference
    var remainingtime =datedue - datenow;

    var days = Math.floor(remainingtime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingtime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingtime % (1000 * 60)) / 1000);

    //display result
    document.getElementById("demo").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";
    
    if(remainingtime<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML="EXPIRED";
    }
},1000)