setTimeout(() => {
  alert("After submiting contact,  please follow the channels below to claim file")
}, 3000)

const submitBtn = document.getElementById("return")

submitBtn.addEventListener('click', (event) => {
 event.preventDefault(); //stop button from reloading page
 
 const name = document.getElementById("name").value;
 const number = document.getElementById("phoneNumber").value;
 
 const options = {
   method: "POST",
   headers: {
     "Content-Type":"application/json"},
   body: JSON.stringify({name, number})
 }
 
 const url= 'https://onevcf-backend.onrender.com/save';

fetch(url, options)
.then(res => res.json())
.then(data => {
  console.log(data)
})
.catch(err => {
  console.error("Error: ", err)
})
  
  
  
  
});
