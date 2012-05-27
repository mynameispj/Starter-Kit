// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; try { args.callee = f.caller } catch(e) {}; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

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