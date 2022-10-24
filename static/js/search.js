
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

function wordsWotMatch(wordsies, json) {

}

function printSearchResults(wordsies, json) {

    var searchContainer = document.getElementById("search-container");
    searchContainer.innerHTML = "";
    var searchItemProto = document.getElementsByClassName("search-item")[0];

    var matches = json.Words.filter(function(item) { 
        return wordsies != null && 
        wordsies.length >= 3 && item.Word.toLowerCase().includes(wordsies.toLowerCase());
    });

    var matchesOrdered = matches.sort(function(a, b) {
        return ('' + a.Word).length > ('' + b.Word).length;
    });

    matchesOrdered.forEach((m) => {
        m.UrlsByIndex.forEach((u) => {

            var url = json.Urls[u];

            var searchItem = searchItemProto.cloneNode(true);

            searchItem.style.display = "block";
            searchItem.getElementsByClassName("search-item-name")[0].innerHTML = m.Word + " - " + url;
            // if (m.words) {
                 //searchItem.getElementsByClassName("search-item-words")[0].innerHTML = m.Word;
            // }
            // searchItem.getElementsByClassName("search-item-sub")[0].innerHTML = m.stamp;
            searchItem.getElementsByClassName("search-item-image-link")[0].href = url;

            searchContainer.appendChild(searchItem);
        });
    });
}

function doItRemote(wordsies) {

    fetch('/downloads/search.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        printSearchResults(wordsies, data);
    })
    .catch(function (err) {
        console.log('error: ' + err);

        var searchError = document.getElementById("search-error");
        if (searchError != null) {
            searchError.innerText = err;
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {

    var searchForm = document.getElementById("search-form");

    if (searchForm != null) {

        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
        
            window.location = "/search/?text=" + document.getElementById('search-text').value;
        
            return false;
        });
    }

    var searchTitle = document.getElementById("search-title");
    

    if (searchTitle != null) {
        searchTitle.innerText = params.text;
        doItRemote(params.text);
    }
});