/**
 * 
 */
function setContentHeight(){
	$('#mainpage_section').height($(window).height());
	if ($('#intro_section').height() < $(window).height()){
		$('#intro_section').height($(window).height());
	}
}


/* ====== Functions ====== */
function scrollTo( el ) {
	if ( !elExist( el ) ) return;
	alert('aaa');
	$('body').animate({
		scrollTop: el.offset().top - $('#fixed_header_section').height()
	}, {
		duration: 1000
	});
	return false;
}

function elExist( el ) {
	if 	( el.length )
		return true;
	else
		return false;
}

$(document).ready(function(){
	
	
	

	var scrollButtons = $('.scrollto');
	
	$('body').on('click', 'a.scrollto', function() {
	    // do something
		alert('a');
	});
	// Handle scroll
	scrollButtons.on('click', function( e ) {
		//e.preventDefault();
		alert('a');
		/*var target = $( this ).attr( 'href' );

		if ( history.pushState ) {
			history.pushState( null, null, target );
			scrollTo( $( target ) );
		} else {
			location.hash = target;
		}
		*/
	});

	
	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            //var bottom_of_object = $(this).position().top + $(this).outerHeight();
        	var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            } 
            
        });
        
        if ($('#fixed_header_section').height() < $(window).scrollTop()){
        	$('#fixed_header_section').animate({'opacity':'1'}, 200);
        } else {
        	$('#fixed_header_section').animate({'opacity':'0'}, 200);
        }
        
        
        
    
    });
    
    
    
 
	

});


