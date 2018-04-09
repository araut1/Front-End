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


//////////////////////////////////////////////////////////////////

$("<div id=family2><h1>Family2</h1></div>").insertAfter("#family1");
$("#family2").append("<div id=bruce><h2>Bruce</h2></div>");
$("#bruce").append("<div id=madison><h3>Madison</h3></div>");
$("#bruce").append("<div id=hunter><h3>Hunter<h3></div>");


///////////////////////////////////////////////////////////////////////////

function charCount()
{
   var t,n;

 t = $(this).text();

 n = t.length;

 $(this).text(t + " " + n);
}

$("p").each(charCount);
