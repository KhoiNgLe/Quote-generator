let apiQuote = [];

// Show New Quote
function newQuote(){
    // Pick a random quote
    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        newQuote();
    } catch (error){
        
        // Catch Error Here
    }
}


// On Load
getQuotes();
