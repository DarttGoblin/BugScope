const file_input = document.querySelector('.file-input');
const preview_image = document.querySelector('.preview-image');
const analyse = document.querySelector('.analyse');
const result_container = document.querySelector('.result-container');
const prediction_value = document.querySelector('.prediction-value');
const confidence_value = document.querySelector('.confidence-value');
const header_text = document.querySelector('.header-text');

file_input.onchange = function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview_image.src = e.target.result;
            preview_image.style.display = 'flex'; 
        };
        reader.readAsDataURL(file);
    }
};

analyse.onclick = function() {
    alert('The model is not hosted yet, you may wanna see the demo as well?');
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;

    const file = file_input.files[0];
    if (!file) return;

    analyse.disabled = true;
    analyse.textContent = "Analysing...";

    const formData = new FormData();
    formData.append('image', file);

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.binary_prediction === "normal") {
            prediction_value.textContent = "Normal";
            confidence_value.textContent = (data.binary_confidence * 100).toFixed(2) + "%";
        } else {
            prediction_value.textContent = data.multi_prediction;
            confidence_value.textContent = (data.multi_confidence * 100).toFixed(2) + "%";
        }
        result_container.style.display = 'flex';
        analyse.textContent = "Analyse";
        analyse.disabled = false;
    })
    .catch(error => {
        console.error("Error:", error);
        analyse.textContent = "Analyse";
        analyse.disabled = false;
    })
    .finally(() => {
        analyse.disabled = false;
        analyse.textContent = "Analyze";
        analyse.disabled = false;
    });
};
