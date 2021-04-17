function cookies(){
    var last = document.cookie.indexOf(";");
    console.log(last);
    let num = document.cokkie.substring(4, last);
    console.log(num);

    num = parseInt(num);
    if(num){
        num = 1;
        document.cookie = 'counter=${num}'; expires=
    }
    alert(document.cookie);
    // return unescape(document.cookie.substring(offset, last));
}