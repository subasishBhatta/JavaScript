console.log("This is the ajax tutorial video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", fetchBtnFunc);

function fetchBtnFunc() {
    console.log("Fetch button is clicked");

    // All the AJAX OPERATIONS for GET request.................
    // Also same for POST request with littele bit changes

    // 1. Instaniate a XHR Object
    let xhr = new XMLHttpRequest();

    // 2. Open the Object
    // This is the syntax = XMLHttpRequest.open(method, url[, async[, user[, password]]])
    // xhr.open("GET", "ajax.txt", true);
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1', true);

    // 3. What to do on progress (This part is optional)
    // This is the syntax = XMLHttpRequest.onprogress = callback;
    xhr.onprogress = function (e) {
        console.log("The ajax call is in progress");
        // e.loaded;
        // e.total;
    }

    // 4. Ready state (Optional)
    // This is the syntax = XMLHttpRequest.onreadystatechange = callback;
    //     Value	State	Description
    // 0	UNSENT	Client has been created. open() not called yet.
    // 1	OPENED	open() has been called.
    // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    // 3	LOADING	Downloading; responseText holds partial data.
    // 4	DONE	The operation is complete.
    xhr.onreadystatechange = function () {
        console.log("The ready state is ", xhr.readyState);
    }

    // 5. What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.response);
        }
        else
        {
            console.log("Error has occured");
        }
    }

    // 6. Send the request
    xhr.send();

    // All the AJAX OPERATIONS for POST request.................
    
    // let xhr = new XMLHttpRequest();

    // xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);

    // xhr.onprogress = function () {
    //     console.log("Post Api is in progress");
    // }

    // xhr.onload = function () {
    //     if (this.status === 200) {
    //         console.log(this.responseText)
    //     }
    // }

    // params = `{"name":"test","salary":"123","age":"23"}`;
    // xhr.send(params);

    console.log("Done!!!!");
}


let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popBtnFunc);

function popBtnFunc() {
    
    let xhr_new = new XMLHttpRequest();
    
    xhr_new.open("GET", "https://jsonplaceholder.typicode.com/posts/1/comments", true);

    xhr_new.onload = function () {
        if (this.status === 200) {
            let new_obj = JSON.parse(this.responseText);
            console.log(new_obj);
            let data = document.getElementById("data");
            str = ""
            for (key in new_obj) {
                str += `<li>
                            <ul>
                                <li>Id: ${new_obj[key].id}</li>
                                <li>Name: ${new_obj[key].name}</li>
                                <li>Email: ${new_obj[key].email}</li>
                                <li>Body: ${new_obj[key].body}</li>
                            </ul>
                        </li>`
            }
            data.innerHTML = str;
        }
    }

    xhr_new.send();
}
