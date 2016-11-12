window.onload = function()
{
    var a = document.getElementbyId("button");
    a.addEventListener("click",function(e)
    {
        e.preventdefault();
        var b = new XMLHttpRequest();
        b.onreadystatechange = c;
        var url = "request.php?q="+document.getElementbyId("col").value;
        b.open("Get", url);
        b.send();
        
        function c()
        {
            if(b.readyState === XMLHttpRequest.DONE)
            {
                if(b.status === 200)
                {
                    var show = b.responseText;
                    document.getElementbyId("result").innerHTML = show;
                }
            }
        }
    });
    var ab = document.getElementById("g");
    ab.addEventListener("click",function(bc)
    {
        bc.preventDefault();
        var d = new XMLHttpRequest();
        d.onreadystatechange = xml;
        var l = "request.php?q=&all=true";
        d.open("Get", l);
        d.send();
        
        function xml()
        {
            if(d.readyState === XMLHttpRequest.DONE)
            {
                if(d.status === 200)
                {
                    var rslt = d.responseXML;
                    var e = d.querySelector("#result");
                    var f = rslt.getElementByTagName("definition");
                    var order = document.createElement("ol");
                    for(var x = 0; x < f.length; x++){
                    var def = document.createElement("li");
                    var word= document.createTextNode(f[x].getAttribute("title"));
                    var define = document.createTextNode(f[x].innerHTML);
                    var author = document.createTextNode(f[x].getAttribute("author"));
                    var header = document.createElement("h3");
                    header.appendChild(word);
                    def.appendChild(header);
                    def.appendChild(define);
                    def.appendChild(author);
                    }
                }   
            }
        }
    });
};