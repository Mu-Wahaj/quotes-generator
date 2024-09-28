const quote = document.getElementById("quote");
const author = document.getElementById("auther");
const newBtn = document.getElementById("newquote");
const threadBtn = document.getElementById("post-thread");
const api_Url = "https://programming-quotesapi.vercel.app/api/random";
async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}
getQuote(api_Url);
newBtn.addEventListener("click", function () {
  getQuote(api_Url);
});
function thread() {
  window.open(
    "https://threads.net/intent/post?text=" +
      `"${quote.innerHTML}"` +
      "   ---by  " +
      ` ${author.innerHTML}`,
    "thread window",
    "height=300px,widht=300px",
  );
}
threadBtn.addEventListener("click", function () {
  thread();
});
