const file_input = document.querySelector('.file-input');
const analyse = document.querySelector('.analyse');
const result_container = document.querySelector('.result-container');
const prediction_value = document.querySelector('.prediction-value');
const confidence_value = document.querySelector('.confidence-value');
const bugscope_textarea = document.querySelector('.bugscope-textarea');

const fileInput = document.querySelector('.file-input');
const uploadSpan = document.querySelector('.upload-span');

fileInput.addEventListener('change', () => {
    const files = Array.from(fileInput.files);
    if (files.length === 0) {
        uploadSpan.textContent = "UPLOAD CODE FILES";
    } else if (files.length === 1) {
        uploadSpan.textContent = files[0].name;
    } else {
        uploadSpan.textContent = `${files.length} files selected`;
    }
});

analyse.onclick = function() {
    const files = file_input.files;
    const codeText = bugscope_textarea.value.trim();

    if (!files.length && !codeText) {
        alert("Please upload a file or paste code in the textarea.");
        return;
    }

    analyse.disabled = true;
    analyse.textContent = "Analyzing...";

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {formData.append('files', files[i]);}
    if (codeText) {formData.append('code_text', codeText);}

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            prediction_value.textContent = data.prediction;
            confidence_value.textContent = data.confidence.toFixed(2) + "%";
            result_container.style.display = "block";
        }
        else {
            console.error("Error:", error);
            alert("Prediction failed. Please try again.");    
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error with the server. Please try again.");
    })
    .finally(() => {
        analyse.disabled = false;
        analyse.textContent = "Analyze";
    });
};
