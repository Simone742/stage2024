function getURL(event) {
    event.preventDefault();
    console.log('ciao');
    let paragrafoUrl = document.querySelector('#p_url');
    let url = document.baseURI;
    console.log(url);
    paragrafoUrl.textContent = url;
}