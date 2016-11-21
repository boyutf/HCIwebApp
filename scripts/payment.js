

$(document).ready(function () {
  $('.group').hide();
  $('#option1').show();
  $('#selectMe').change(function () {
    $('.group').hide();
    $('#'+$(this).val()).show();
  })
});

function updateNext() {
/*   var myOption = $("#selectMe").val();
    $("#" + myOption + " > input").keyup(function() {

        var empty = false;
        $("#" + myOption + "> input").each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if ((!empty) || (document.getElementById('useFunds').checked)) {
           $('#next').removeAttr('disabled');
        } 
        else {
            $('#next').attr('disabled', 'disabled');
        }
    });*/
}

$(document).ready(function(){
  $("#giftCard").click(function(){
    $("#giftText").show();
  });
});