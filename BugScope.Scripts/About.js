const benefit_container = document.querySelectorAll('.benefit-container'); 

benefit_container.forEach(container => {
    container.onclick = function() {
        window.open('http://kaggle.com/datasets/radowanulhaque/software-defect?select=cm1.csv', '_blank');
    }
});