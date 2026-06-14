function copyText(text) {
    navigator.clipboard.writeText(text);
}
function showToast() {
    const toast = document.getElementById('clipboard-toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}
window.copyText = copyText;
window.showToast = showToast;