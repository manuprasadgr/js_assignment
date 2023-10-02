function load() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

      if (this.readyState == 1 ) {
        document.getElementById("content").innerHTML =
        "connection established";
      }

      else if (this.readyState == 2 ) {
        document.getElementById("content").innerHTML =
        "request received";
      }


      else if (this.readyState == 3 ) {
        document.getElementById("content").innerHTML =
     "<img src='images/loading.gif'>";
      }


      else if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =
        this.responseText;
      }
      else{
        document.getElementById("content").innerHTML = "ERROR!!!"

      }
    };
    xhttp.open("GET", "content/newfile.html");
    xhttp.send();
  }