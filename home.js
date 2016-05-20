function run() {
	if ($('#_myoQL_unshippedOrders a').text().indexOf('0 ') == 0) {
		setTimeout(function(){
			window.location.href=window.location.href;
		}, 1000);
	} else {
		$('option[value="bulk_confirm"]').attr('selected','selected');
		$('.checkall').click();
		MYO.JS.check_all($('.checkall').attr('checked'));
		$('.action-go').click();
	}
}
run();
