function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;

    if (p == "")
    {
        alert("Amount must contain a positive number");
    }
    else if (p <= 0)
    {
        alert("Amount must be a positive number");       
    }
    else
    {
        var date = new Date();
        var year = date.getFullYear() + new Date(y).getFullYear();
        var result = ((p*r)/100)*y;
        var text = "<p>If you deposit <span class='highlight'>" + p + "</span>,<br/>at an interest rate of <span class='highlight'>" + r + "%</span>.<br/>You will recieve an amount of <span class='highlight'>" + result + "</span>,<br/>in the year <span class='highlight'>" + year + "</span></p>";
        document.getElementById("result").innerHTML = text;
    }
}

function slide()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("slidervalue");
    output.innerHTML = slider.value + "%";
    
    slider.oninput = function() {
      output.innerHTML = this.value + "%";
    }
}

        