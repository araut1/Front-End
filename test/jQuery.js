$('#input').on('change', function() {
    var val, h1;
    val = $('#input').val();
    h1 = $('.articles').children('h1');
    h1.text(val);
});

//////////////////////////////////////////////////////////////////




var articleItems, ul;

articleItems = $('.article-item');

ul = articleItems.find('ul'); 
ul.remove();
