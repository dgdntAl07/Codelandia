const elements = document.querySelectorAll('.material-symbols-outlined');

        elements.forEach(element => {
            element.addEventListener('click', function () {
                element.classList.toggle('active');
            });
        });
