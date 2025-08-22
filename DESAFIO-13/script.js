const elements = document.querySelectorAll('.local');

        elements.forEach(element => {
            element.addEventListener('click', function () {
                element.classList.toggle('active');
            });
        });
