window.onload = function() {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var result = document.getElementById('result');
            if (button.textContent === 'C') {
                result.textContent = '0';
            } else if (button.textContent === '«') {
                result.textContent = result.textContent.slice(0, -1);
                if (result.textContent === '') {
                    result.textContent = '0';
                }
            } else if (button.textContent === '=') {
                let calculation = result.textContent;
                calculation = calculation.replace(/\^/g, '**');
                calculation = calculation.replace(/[^-()\d/*+.]/g, '');
                try {
                    result.textContent = eval(calculation);
                } catch {
                    result.textContent = 'Error 69';
                }
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
