/* global $, Stripe */
// Document ready.
$(document).on('turbolinks:load', function (){
  
  // Target 'pro form' and 'submit btn' 
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  // Set Stripe public key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  // When user clicks form submit btn,
  // prevent default submission behavior.
  submitBtn.click(function(event){
    // prevent default submission behavior.
    event.preventDefault();
    // Collect credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    
    // Send card info to Stripe.
    Stripe.createToken({ 
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler );
    
  });
  

  
  // Stripe will return a card token.
  
  // Inject card token as hidden field into form.
  
  // Submit form to our Rails app.    
      
});

