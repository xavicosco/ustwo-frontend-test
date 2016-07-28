describe('DOM tests - Signup form', function() {
  var formElem = document.forms[0];
  var signupButton = document.getElementById('signup-button');
 
  it('Form exists in the DOM', function() {
    expect(formElem).to.not.equal(null);
  });
 
  it('Input field should be set to type email', function() {
    expect(formElem.email.getAttribute('type')).to.equal('email');
  });
 
  it('Signup button has the right text', function() {
    expect(signupButton.innerHTML).to.equal('Signup');
  });
});