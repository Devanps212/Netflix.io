$("#submit-form").submit((e)=>{
	e.preventDefault()
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbz5z3g4qLVaTSbbW1f9bW_8mqvGwtjZs_wA9DNU9iSWLpzmpfKUoSt58uElQshbIXKM/exec",
		data:$("#submit-form").serialize(),
		method:"post",
		success:function (response){
			alert("Form submitted successfully")
			window.location.reload()
			
		},
		error:function (err){
			alert("Something Error")

		}
	})
})

$("#submit-form-1").submit((e)=>{
	e.preventDefault()
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbz5z3g4qLVaTSbbW1f9bW_8mqvGwtjZs_wA9DNU9iSWLpzmpfKUoSt58uElQshbIXKM/exec",
		data:$("#submit-form-1").serialize(),
		method:"post",
		success:function (response){
			alert("Form submitted successfully")
			window.location.reload()
			//window.location.href="https://google.com"
		},
		error:function (err){
			alert("Something Error")

		}
	})
})




var acc = document.getElementsByClassName("questions");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
