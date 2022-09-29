
// test_url = loadURL('http://www.example.com/')


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


  function get_prediction(){

    // test data to send for prediction
    data = {   
      "student_details": [
        "GP","F",18, "GT3","A",4,4,"mother",2,2,"yes",4,3,4,5
      ]
    }

    const metaData = {
      method :"POST",
      mode: 'cors',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }

    const url = "http://ec2-18-212-184-135.compute-1.amazonaws.com/prediction";
    // const url = "http://127.0.0.1:8000/items/1"
    // const url = "http://127.0.0.1:8000/prediction"

    fetch(url,metaData)
    .then(response => response.json())
    .then(res => console.log(res))
  }

  // bootstrap for buttons and layput


  //  do the cors thing for aws side
