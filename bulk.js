var __use_local__ = true;
$('#carrierNameDropDown_UNSHIPPEDITEMS option:eq(1)').attr('selected','selected');
if (__use_local__) {
  $('input[name="trackingID_UNSHIPPEDITEMS"]').each(function(){
    var code = (Math.random() > 0.5 ? 'KA' : 'LA');
    $(this).val(code + parseInt(Math.random() * 100000000000));
    $('#myo-cms-confirm').click();
  });
}
