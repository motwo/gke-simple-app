var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:8080', true);

request.onload = function() {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log(data.value)
    document.getElementById("api").textContent = data.value;
  }
}

request.send();