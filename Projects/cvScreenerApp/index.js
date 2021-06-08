console.log("This is the cv screener project");

let image = document.getElementById("image");
let summary = document.getElementById("summary");
let next = document.getElementById("next");

// Fetch API
url = "https://randomuser.me/api/";
function getData() {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.results[0]);
        let html = `<div class="card mx-auto" style="width: 22rem;">
                        <img src="${data.results[0].picture.large}" alt="Profile picture" style="height: 210px;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Name: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} </li>
                            <li class="list-group-item">Email: ${data.results[0].email}</li>
                            <li class="list-group-item">Age: ${data.results[0].dob.age}</li>
                            <li class="list-group-item">Gender: ${data.results[0].gender}</li>
                            <li class="list-group-item">Nationality: ${data.results[0].nat}</li>
                            <li class="list-group-item">Mobile no: ${data.results[0].cell}</li>
                        </ul>
                    </div>`;
        image.innerHTML = html;
    })

}


getData();


next.addEventListener("click", (e)=> {
    e.preventDefault();
    getData();
});
