const benefit_container = document.querySelectorAll('.benefit-container'); 

benefit_container.forEach(container => {
    container.onclick = function() {
        window.open('https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset?resource=download', '_blank');
    }
});