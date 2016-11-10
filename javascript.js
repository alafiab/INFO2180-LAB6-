window.onload = function()
{
    var a = document.getElementById("button");
    a.addEventListener("click",function(e)
    {
        e.preventDefault();
        var b = new XMLHttpRequest();
        b.onreadystatechange = c;
        var url = "request.php?q="+document.getElementById("col").value;
        b.open("Get", url);
        b.send();
        
        function c()
        {
            if(b.readyState === XMLHttpRequest.DONE)
            {
                if(b.status === 200)
                {
                    var show = b.responseText;
                    document.getElementById("result").innerHTML = show;
                }
            }
        }
    });
};
