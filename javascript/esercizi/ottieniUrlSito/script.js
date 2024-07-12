function getUrl(event) {
    event.preventDefault();

    let url = document.baseURI;

    let p_url = document.querySelector("#p_url");
    p_url.textContent = url;
}