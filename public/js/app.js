$(document).ready(function() {
    const $contFirstName = $('#firstNameField');
    const $contLastName = $('#lastNameField');
    const $contEmail = $('#emailField');
    const $contMessage = $('#messageField');
    const $submitForm = $('#contactForm');
    const $liveToast = $('#liveToast');
    let elements;
    let windowHeight;

    const init = () => {
        elements = $('.hidden');
        windowHeight = window.innerHeight;
    };

    const checkPosition = () => {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -400) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            };
        };
    };

    $(document).on('scroll', checkPosition);
    $(document).on('resize', init);

    init();
    checkPosition();

    $submitForm.on('submit', (event) => {
        event.preventDefault();

        Array.prototype.slice.call($submitForm)
            .forEach( async (form) => {
                if (form.checkValidity()) {
                    await $.ajax({
                        method: 'POST',
                        url: '/message/email',
                        headers: { 'Content-Type': 'application/json' },
                        data: JSON.stringify({
                            firstName: $contFirstName.val().trim(),
                            lastName: $contLastName.val().trim(),
                            email: $contEmail.val().trim(),
                            message: $contMessage.val().trim()
                        })
                    });

                    await $.ajax({
                        method: 'POST',
                        url: '/message/sms',
                        headers: { 'Content-Type': 'application/json' },
                        data: JSON.stringify({
                            firstName: $contFirstName.val().trim(),
                            lastName: $contLastName.val().trim(),
                            email: $contEmail.val().trim(),
                            message: $contMessage.val().trim()
                        })
                    });

                    const toast = new bootstrap.Toast($liveToast);

                    toast.show();
                };

                $submitForm.addClass('was-validated');
            }, false)
    });
});
