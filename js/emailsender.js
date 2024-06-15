// console.log("we are in");



const servicerID= "service_xmvc0bg"
const tempID="template_dwhhk2g"
let params = {
    ChosenCarType:"",
    PickupLocation:"",
    PickupDate:"",
    DropoffLocation:"",
    ReturnDate:"",
  }




const form =document.querySelector(".form1")
console.log(form);
if (form) {
  form.addEventListener("submit",(e)=>{
      e.preventDefault();
      var select = form.getElementsByTagName("select")
      var input = form.getElementsByTagName("input")

      console.log(select);
      console.log(input);


      form.classList.add("submitted")
        params={
            ChosenCarType:select[0].value,
            PickupLocation:select[1].value,
            PickupDate:input[0].value,
            DropoffLocation:select[2].value,
            ReturnDate:input[1].value,  
      }

      console.log(params);
      emailjs.send(servicerID,tempID,params).then(
           function (res){
            console.log(res);
              params={
                ChosenCarType:"",
                PickupLocation:"",
                PickupDate:"",
                DropoffLocation:"",
                ReturnDate:"", 
              }
              form.classList.remove("submitted")
             
           },
           function (error) {
               console.error("Failed to send email:", error);
               form.classList.remove("submitted");
           }
          )
  })
}