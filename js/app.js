const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        searchAction();
    }
})

document.querySelector('.search-icon').addEventListener('click', e => {
    searchAction();
});

const searchAction = () => {
    const searchVal = searchBar.value.trim();
    let url = `https://www.youtube.com/results?search_query=${searchVal.trim()}`;
    window.open(url, '_blank');
}