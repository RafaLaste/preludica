$(function() {
	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	spOptions = {
		onKeyPress: function(val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
		}
	};

	$('.form_control--mask-phone').mask(SPMaskBehavior, spOptions);

	$('.form_control--mask-cnpj').mask('00.000.000/0000-00');

	$('.form_control--mask-date').mask('00/00/0000');

	$('.form_control--mask-money').mask('#.##0,00', {
		reverse: true
	});

	$('.form_control--mask-zip-code').mask('00000-000');
})