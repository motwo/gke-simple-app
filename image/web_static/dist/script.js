var request = new XMLHttpRequest();

request.open('GET', 'http://api', true);

request.onload = function() {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data.value)
    document.getElementById("api").textContent = data.value;
  }
}

request.send();