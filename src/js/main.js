$( document ).ready( function() {
  
  $( '.channel-item' ).click( function( event ) {
    $( '.active' ).toggleClass( 'active' );
    $( this ).addClass( 'active' );
    $( '.quote-btn-container' ).removeClass( 'hidden' );
  });

});