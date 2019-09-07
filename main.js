// search navbar
var search=document.getElementById('search');
search.onfocus=function(){
    search.placeholder=''
}
search.onblur=function(){
    search.placeholder='search'
}
// contact us 
var fname=document.getElementById('in'),
lname=document.getElementById('in1'),
email=document.getElementById('in2'),
msg=document.getElementById('in3');
fname.onfocus=function(){
    fname.placeholder=''
}
fname.onblur=function(){
    fname.placeholder='first name'
}
lname.onfocus=function(){
    lname.placeholder=''
}
lname.onblur=function(){
    lname.placeholder='last name'
}
email.onfocus=function(){
    email.placeholder=''
}
email.onblur=function(){
    email.placeholder='enter your email'
}
msg.onfocus=function(){
    msg.placeholder=''
}
msg.onblur=function(){
    msg.placeholder='message'
}
//lecture
$(document).ready(function(){
    $(".lec .card .card-footer ").each(function(){
        $(".lec .card .card-footer ").mouseenter(function(){
            $(".lec .card .card-footer i").show();
        })
        $(this).mouseleave(function(){
            $(".lec .card .card-footer i").hide();
        })
    })
    
})