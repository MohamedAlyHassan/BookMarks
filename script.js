

var inputName= document.getElementById("bookMarkName");
var inputUrl= document.getElementById("websiteUrl");
var addBtn = document.getElementById("addBtn");
var inputs=document.getElementsByClassName("form-control");
var userNameAlert =document.getElementById("bookMarkAlert");

function regularExpression()
{
    var nameRegex=/^[A-Za-z]{2,15}$/;
    if (nameRegex.test(bookMarkName.value)==true) 
    {
        bookMarkAlert.classList.replace("d-block","d-none") 
        bookMarkName.classList.remove("is-invalid")
        bookMarkName.classList.add("is-valid") 
          
    }
    else
    {    
        bookMarkAlert.classList.replace("d-none","d-block")
        bookMarkName.classList.add("is-invalid")
        bookMarkName.classList.remove("is-valid")
                
    }

}
      addBtn.addEventListener("keyup",regularExpression)

      function urlExpression()
      {
          var urlRegex=/^www.[a-z]{2,25}.com$/;
          if (urlRegex.test(websiteUrl.value)==true) 
          {
            websiteUrl.classList.remove("is-invalid")
            websiteUrl.classList.add("is-valid")
            
            urlAlert.classList.replace("d-block","d-none")   
          }
          else
          {
            websiteUrl.classList.add("is-invalid")
            websiteUrl.classList.remove("is-valid")
            urlAlert.classList.replace("d-none","d-block")        
          }
      
      }
            addBtn.addEventListener("keyup",urlExpression)
      



var bookMarkArray;

if (localStorage.getItem("Bookmarks")==null) 
{
   bookMarkArray=[];     
}
else
{
    bookMarkArray=JSON.parse(localStorage.getItem("Bookmarks"));
    displayBookmark();
}

addBtn.onclick=function() 
{
    addBookmark()
    displayBookmark()
    
    clearBookmark()
    console.log(bookMarkArray) 
    
}

function addBookmark() 
{
    var bookMarkObject=
    {
        name:  inputName.value,
        url: inputUrl.value
    }
    bookMarkArray.push(bookMarkObject);
    localStorage.setItem("Bookmarks",JSON.stringify(bookMarkArray));
    
}
function displayBookmark() 
{
       var inputsData = ""; 
  for(var i=0 ;i<bookMarkArray.length; i++)
{
    inputsData+=`<tr>
     <td><h2 class=" d-inline mr-5">`+bookMarkArray[i].name+`</h2></td>
    <td><button onclick='loctionUrl(${i})' class=" d-inline btn btn-info btn-outline-info text-white shadow-lg">Visit</button></td>
    <td><button onclick='deleteBookmark(${i})'  class=" d-inline btn btn-danger btn-outline-danger text-white shadow-lg">Delete</button></td>
    </tr><br>`
}
      
   document.getElementById("returnInformation").innerHTML=inputsData;
   
}
  function clearBookmark() 
  {
   for(var i=0;i<inputs.length;i++)
   {
       inputs[i].value="";
   }
  }

function deleteBookmark(index) 
{
  bookMarkArray.splice(index,1); 
  displayBookmark();
  localStorage.setItem("Bookmarks",JSON.stringify(bookMarkArray));
   
}
 
function loctionUrl(index) 
{
 var urlAddress = "http://" + bookMarkArray[index].url;
 window.open(urlAddress);
}










