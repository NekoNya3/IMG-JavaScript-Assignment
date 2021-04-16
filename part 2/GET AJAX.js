function createTable() {
    var httpxRequest = new XMLHttpRequest();
    httpxRequest.onreadystatechange = function () {
        // for (var x in httpxRequest) {
        //     // text += arr[x] + " ";
        //     console.log(x);
        // }
        var obj = JSON.parse(httpxRequest.responseText);
        console.log(obj.data);

        for(n in obj.data){
            console.log(n.email);
        }

        var sed = "";

        for(var i = 0; i < obj.data.length ; i++){
            // console.log(obj.data[i].email+" ");
            // let node = document.getElementsByTagName('th');
            // node.appendchild();

            sed += "<tr>" ;
            sed += "<td>"+obj.data[i].id+"</td>" ;
            sed += "<td>"+obj.data[i].email+"</td>" ;
            sed += "<td>"+obj.data[i].first_name+"</td>" ;
            sed += "<td>"+obj.data[i].last_name+"</td>" ;
            sed += "<td>"+obj.data[i].avatar+"</td>" ;
            sed += "</tr>";

        }

        document.getElementById('getThisDone').innerHTML = sed;
        
    };

    httpxRequest.open("GET", "https://reqres.in/api/users", true);
    httpxRequest.send();

}

// function createTable() {
//     fetch("https://reqres.in/api/users")
//     .then(res => res.json())
//     .then(data => console.log(data.data));
// }