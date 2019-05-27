

function sent_dt(){
    var the_host = window.location.origin;
    alert(the_host);
    var newurl = the_host+"drunk.html"
    alert(newurl);
    window.location.href = newurl;//"./drunk.html";
}