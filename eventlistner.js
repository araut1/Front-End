$( 'article' ).on( 'click', function() {
    $( 'body' ).addClass( 'selected' );   
});

$( 'body' ).append( '<article> <h1>Appended Article</h1> <p>Content for the new article </p> </article>' );



$("#my-button").click(function () {

            $("#my-button").remove();
            $('body').addClass('success');

        }
    );
