$(document).ready(function() {
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


});
