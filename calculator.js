window.onload = function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var result = document.getElementById('result');
            if (button.textContent === 'C') {
                result.textContent = 0;
            } else if (button.textContent === '=') {
                result.textContent = eval(result.textContent);
            } else {
                if (result.textContent === '0') {
                    result.textContent = button.textContent;
                } else {
                    result.textContent += button.textContent;
                }
            }
        });
    });
};
