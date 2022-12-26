function onSubmit(token) {
    document.getElementByClassName("form-ajax").submit();
}

$(function() {
	var queueForm = false;

	const captchaPictures = ['captcha-1.jpg', 'captcha-2.jpg', 'captcha-3.jpg'];
	const captchaText = ['bhy4', 'k9cq', 'aj2u'];

	const captchaRandom = Math.floor(Math.random() * captchaText.length);

	$('.captcha-view').attr('src', '../img/captcha/' + captchaPictures[captchaRandom]);

	$("form.form-ajax").on('submit', function(event){
		event.preventDefault();
		Swal.showLoading();
		var that = this;

		var formData = new FormData($(this).get(0));

		if (!queueForm) {
			if ($('.form_control--captcha').val() !== captchaText[captchaRandom]) {
				Swal.fire({
					title: 'Oops!',
					text: 'Por favor, valide o captcha corretamente!',
					icon: 'error',
					showCancelButton: false,
					confirmButtonText: 'Ok',
					showCloseButton: true,
				});
			} else {
				$.ajax({
					url: $(that).attr('action'),
					type: 'POST',
					data: formData,
					dataType: 'json',
					cache: false,
					contentType: false,
					processData: false,
					success: function(data) {
						if (data) {
							console.log(data);
							if (typeof swal != 'undefined') {
								Swal.fire({
									title: data.title,
									text: data.msg,
									icon: data.type,
									showCancelButton: false,
									confirmButtonText: 'Ok',
									showCloseButton: true,
								});
							}
							else {
								alert(data.msg);
							}

							if (data.type == 'success') {
								that.reset();
							}
						}

						queueForm = false;
					},
					error: function(data) {
						queueForm = false;
						console.log(data['type']);
					}
				});
			}
		}
	});
});