console.log("This is project 3");
// News Api key = 1fc96ae61b924401b08909ad8bfb6a72
// Gnews Api key = 0ce57f21c949eda597f92ffb7863086e

let country = "in";
let category = "sports";
let api = "0ce57f21c949eda597f92ffb7863086e";

let myNews = document.getElementById("myNews");

// Creating an xhr Object
const xhr = new XMLHttpRequest();

// Open the object and creating a get request
xhr.open("GET", `https://gnews.io/api/v4/search?q=example&country=${country}&token=${api}`, true);

// When response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json.articles);
        let article = json.articles;
        // console.log(json.articles[1].title);
        let html = "";
        article.forEach(function(element, index) {
            let str = `<div class="list-group my-2">
                            <a class="list-group-item list-group-item-action active bg-dark"
                                data-bs-toggle="collapse" href="#collapseExample-${index}" role="button" aria-expanded="false"
                                aria-controls="collapseExample">
                                ${element.title} &nbsp&nbsp&nbsp<span class="text-end text-danger ">Published at: ${element.publishedAt}</span>
                            </a>
                            <div class="collapse" id="collapseExample-${index}">
                                <div class="card card-body">
                                    ${element.content}. <a href="${element.url}" target="_blank">Read more...</a>
                                </div>
                            </div>
                        </div>`
            html += str;
        });
        myNews.innerHTML = html;

    }
    else
    {
        myNews.innerHTML = `<h1 class="my-2 text-danger">Your API request limit for today is exceeded</h1>`
    }
}


// Sending the get request -- This is most important
xhr.send();
