$( document ).ready( function() {
  
  $( '.channel-item' ).click( function( event ) {
    $( '.channel-item.active' ).toggleClass( 'active' );
    $( this ).addClass( 'active' );
    $( '.quote-btn-container' ).removeClass( 'hidden' );
  });

  $( '.caption-chunk' ).click( function( event ) {
    $( this ).toggleClass( 'active' );

    $( '.share-btn-container' ).addClass('active');
  });

  $('.caption-list').scrollTop($('.caption-list').scrollHeight);

  $( '.quote-btn' ).click( function( event ) {
    $( '.page-1' ).removeClass( 'active' );
    $( '.page-2' ).addClass( 'active' );
  });

});