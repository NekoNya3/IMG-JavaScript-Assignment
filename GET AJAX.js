function createTable() {
    var httpxRequest = new XMLHttpRequest();
    httpxRequest.onreadystatechange = function () {
        for (var x in httpxRequest) {
            text += [x] + " ";
        }
    };
    httpxRequest.open("GET", "https://reqres.in/api/users", true);
    httpxRequest.send();

}