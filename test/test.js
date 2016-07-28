describe('DOM tests - Validate Form', function() {
  var formElem = document.forms[0];
  var submitForm = document.getElementById("submit");
 
  it('Form exists in the DOM', function() {
    expect(formElem).to.not.equal(null);
  });
  
  it('Input field Name should be set to type text', function() {
    expect(formElem.name.getAttribute('type')).to.equal('text');
  });
 
  it('Input field e-mail should be set to type email', function() {
    expect(formElem.email.getAttribute('type')).to.equal('email');
  });
 
  it('Button Submit form validated', function() {
    expect(submitForm.value).to.equal('Send away');
  });
  
  it("Restart button clear all form", function() {
	restartForm();
	
	var inputTag;
	var isEmpty = true;
	for (i=0; i < document.getElementsByTagName("input").length; i++)
	{
		inputTag = document.getElementsByTagName("input")[i];
		if (inputTag.type == "text" || inputTag.type == "email")
		{
			expect(inputTag.value).to.equal("");
		}
	}	
	
	var form_elements = document.getElementById('form-cake').elements;
	var selectedCelebration = form_elements['celebration'].value;
	expect(selectedCelebration == "");
	expect(document.querySelector(".required") == null);
  });
  
});