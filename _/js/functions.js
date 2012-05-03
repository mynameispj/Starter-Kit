// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	// your functions go here

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/

//Commonly used JS tricks

/*

//Remove input placeholder text on input & return it on blank input blur 

$('form#ss-form input').focus(function() {
    $(this).addClass('active'); 
    if (this.value == this.defaultValue){ 
        this.value = '';
    }
    if(this.value != this.defaultValue){
        this.select();
    }
});

$('form#ss-form input').blur(function() {
    $(this).removeClass('active'); 
    if ($.trim(this.value) == ''){
        this.value = (this.defaultValue ? this.defaultValue : '');
    }
});
	    


*/