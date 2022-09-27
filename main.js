
test_url = loadURL('http://www.example.com/')


function loadURL(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      console.log(request)
      console.log("step1")
      request.onload = function() {
        if (request.status === 200) {
          resolve(request.response);
        }
        else {
          reject(new Error(request.status));
        }
      };
      console.log("step2")
      request.onerror = function() {
        reject(new Error("Network Error"));
      };
      console.log("step3")
      request.send();
      console.log("step4")
    })
    .then(res => console.log("Success:" + res))
    .catch(err => console.log(err))
    .then(res => console.log(res));
  }



