function mJava(pJob){
    if(pJob=="contents")
    document.getElementById("idH1").innerHTML="메롱!" 
    else if(pJob=="attr")
    document.getElementById("idH5").style="color:green";
    else if(pJob=="image change")
    document.getElementById("idImg").src="http://arabbit.link/images/tiger.png";
    
    else if(pJob=="image disappeared")
    document.getElementById("idImg").style="display:none";
    else if(pJob=="image appeared")
    document.getElementById("idImg").style="display:block";
}