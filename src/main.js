function onSearch(e) {
    e.preventDefault();
    clearList()
    newsApiService.query = e.currentTarget.elements.query.value;
  
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(renderNews);
  }
  
  function loadMore() {
    newsApiService.fetchArticles().then(renderNews);
  }
  
  function renderNews(articles) {
    const markUp = articles.map(article => {
      return `<li class="article-item">
        <a href="${article.url}" target="_blank" rel="noopener noreferrer">
          <article>
            <img src="${article.urlToImage}" alt="" width="480" />
            <h2>${article.title}</h2>
            <p>Posted by: ${article.author}</p>
            <p>${article.description}</p>
          </article>
        </a>
      </li>`;
    }).join('');
    list.insertAdjacentHTML('beforeend', markUp);
  }

  
  function clearList() {
    list.innerHTML = ''
  }