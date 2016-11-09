window.onload = function()
{
    var a = document.getElementById("button");
    a.addEventListener("click",function(e)
    {
        e.preventDefault();
        var b = new XMLHttpRequest();
        b.onreadystatechange = c;
        b.open("Get","request.php?q=definition");
        b.send();
        
        function c()
        {
            if(b.readyState === XMLHttpRequest.DONE)
            {
                if(b.status === 200)
                {
                    alert(b.responseText);
                }
            }
        }
    }
)};
