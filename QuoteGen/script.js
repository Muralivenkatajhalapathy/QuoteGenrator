document.addEventListener('DOMContentLoaded', function() {
    const quoteTextElement = document.getElementById('text');
    const quoteAuthorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');

    function fetchQuote() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.quotes.length);
                const randomQuote = data.quotes[randomIndex];
                quoteTextElement.textContent = randomQuote.quote;
                quoteAuthorElement.textContent = randomQuote.author;
            })
            .catch(error => {
                console.error('There was a problem fetching the quotes:', error);
            });
    }

    // Fetch a quote when the page loads
    fetchQuote();

    // Fetch a new quote when the button is clicked
    newQuoteButton.addEventListener('click', fetchQuote);
});
