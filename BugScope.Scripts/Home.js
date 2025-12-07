const upload = document.querySelector('.upload');
const github = document.querySelector('.github');
const report = document.querySelector('.report');
const demo = document.querySelector('.demo');

upload.onclick = function() {
    section[1].scrollIntoView({behavior: 'smooth'});
}

github.onclick = function() {
    window.open('https://github.com/DarttGoblin/BugScope_server', '_blank');
}

report.onclick = function() {
    window.open('https://drive.google.com/file/d/13oyeybDdbgChkfxSMUWKr2jwFOspYcFn/view?usp=sharing', '_blank');
}

demo.onclick = function() {
    window.open('https://drive.google.com/file/d/1btl43ehCS_dbowjkGBdJhtcm0Zzc3d40/view?usp=sharing', '_blank');
}