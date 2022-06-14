function displayDate(){
	document.getElementById("p1").innerHTML=Date();
}

function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("2"))
    {
        element.src="../biaoqing/1.png";
    }
    else
    {
        element.src="../biaoqing/2.png";
    }
}