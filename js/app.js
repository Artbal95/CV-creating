let loading =false;
window.addEventListener('load', () => {
    loading = true;
    if(loading){
        const time =setTimeout(() => {
            document.getElementById('load').style.display = 'none';
            document.getElementById('wrapper').style.display = 'block';
            clearTimeout(time)
        }, 3000)
    }
});