function tsFunction(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "say" && password === "yashika"){
        window.open("index.html")
    } else {
        alert("The system could not log you in!") /*displays error message*/
    }
}

const myWindow = window.open();


