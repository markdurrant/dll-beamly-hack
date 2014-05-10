$( document ).ready( function() {
  
  $( '.channel-item' ).click( function( event ) {
    $( '.channel-item' ).removeClass( 'active' );
    $( this ).toggleClass( 'active' );
  });

});