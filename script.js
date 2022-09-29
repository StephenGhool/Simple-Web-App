const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

function get_form_data(){
    let data_input = Array.from(document.querySelectorAll('#details-form input')).reduce((acc, input) => ({ ...acc,[input.id]:input.value}), {});
    let data_select = Array.from(document.querySelectorAll('#details-form select')).reduce((acc, input) => ({ ...acc,[input.id]:input.value}), {});
    console.log(data_input)
    console.log(data_select)

    let data_array = [];

    // School
    data_array.push("GP")

    // Gender
    if (data_select['gender'] == 'Male'){
        data_array.push("M")
    } else {
        data_array.push("F")
    }

    // Age
    data_array.push(data_input['age'])
    // fam size
    data_array.push('GT3')
    // Parental Status
    data_array.push(data_select['parental-status'])
    // Mother edu
    data_array.push(data_input['mom-edu'])
    // Father edu
    data_array.push(data_input['dad-edu'])
    // guardian
    data_array.push(data_select['guardian'])
    // study time
    data_array.push(data_input['studying'])
    // failures
    data_array.push(data_input['failed'])
    // internet
    data_array.push(data_select['internet'])
    //  freetime
    data_array.push(data_input['freetime'])
    // entertainment
    data_array.push(data_input['entertainment'])
    // health
    data_array.push(data_input['health'])
    // abscence
    data_array.push(data_input['abscent'])
    
    // create json file to send to make prediction
       // test data to send for prediction
       data = {   
        "student_details": data_array
      }

      const metaData = {
        method :"POST",
        mode: 'cors',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }
      
      console.log(metaData)

      const url = "http://ec2-18-212-184-135.compute-1.amazonaws.com/prediction";
      // const url = "http://127.0.0.1:8000/items/1"
      // const url = "http://127.0.0.1:8000/prediction"
  
      fetch(url,metaData)
      .then(response => response.json())
      .then(res => console.log(res))
}

const tabs = document.querySelectorAll('[data-tab-target]')
console.log(tabs)
const tabContents = document.querySelectorAll ('[data-tab-content]')
console.log(tabContents)
tabs.forEach(tab=>{
 tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    console.log(tab)
    console.log(target)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    target.classList.add('active')
    } )
    // console.log(tab)
} )

// console.log(tabContents)