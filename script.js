function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;

    var date = new Date();
    var year = date.getFullYear() + new Date(y).getFullYear();
    var result = ((p*r)/100)*y;
    
    var text = "<p>If you deposit " + p + ",<br/>at an interest rate of " + r + "%.<br/>You will recieve an amount of " + result + ",<br/>in the year " + year + "</p>";
    document.getElementById("result").innerHTML = text;
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

        