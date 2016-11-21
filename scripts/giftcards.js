function showValue(newValue){ document.getElementById("range").innerHTML=newValue; }

var value = 0;

function add() {
  value++;
  document.getElementById("field").innerHTML = value;
}

function minus(){
  if(value != 0)
		value--;
	document.getElementById("field").innerHTML = value;
}

	//Tabs
$(document).ready(function(){
  $('ul.tabs').each(function(){
    var $active, $content, $links = $(this).find('a');
    
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    //hide content that is not active
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    $(this).on('click', 'a', function(e){
      //previous tab is inactive
      $active.removeClass('active');
      $content.hide();

      //get next tab + content
      $active = $(this);
      $content = $(this.hash);

      //new tab is active, show it
      $active.addClass('active');
      $content.show();

            
      e.preventDefault();
    });
  });
});