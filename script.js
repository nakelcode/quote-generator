let generateNewQuote = document.querySelector('#generate');
const quote = document.querySelector('.content-paragraph');
const author = document.querySelector('.author');

let quotes = [
    {quote : "\"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it\"",
    author : "- Octavia E. Butler" 
}, {
    quote : "\"Start before you’re ready.\"",
    author :"- Steven Pressfield"
}, {
    quote : "\"You can always edit a bad page. You can't edit a blank page\"",
    author: "- Jodi Picoult"
}, {
    quote : "\"Start writing, no matter what. The water does not flow until the faucet is turned on.\"",
    author: "- Louis L'Amour"
}, {
    quote: "\"The first draft is just you telling yourself the story.\"",
    author: "- Terry Pratchett"
}, {
    quote: "\"You can't wait for inspiration. You have to after it with a club.\"",
    author: "- Jack London"
}, {
    quote: "\"I have never started a poem yet whose end i knew. Writing a poem is discovering.\"",
    author: "- Robert Frost"
}, {
    quote: "\"If there's a book that you want to read, but it hasn't been written yet, then you must write it.\"",
    author: "- Toni Morrison"
}, {
    quote: "\"I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later i can build castles.\"",
    author: "- Shannon Hale"
}, {
    quote: "\"I get a lot of letters from people. They say, 'I want to be a writer. What should i do?' I tell them to stop writing to me and get on with it.\"",
    author: "- Ruth Rendell"
}, {
    quote: "\"First, find out what your hero wants, then just follow him!\"",
    author: "- Ray Bradbury"
},
]

function generateButton(){
    const newQuote = Math.floor(Math.random() *quotes.length);
    quote.innerText = quotes[newQuote].quote;
    author.innerText = quotes[newQuote].author; 


} 
generateNewQuote.addEventListener("click", generateButton)


