document.querySelector('.search-icon').addEventListener('click', e => {
    let searchVal = document.querySelector('.search-bar').value;
    let url = `https://www.youtube.com/results?search_query=${searchVal.trim()}`;
    window.open(url, '_blank');
});