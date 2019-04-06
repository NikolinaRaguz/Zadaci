function printInfo(){
    var ime=document.getElementById('Ime').value;
    var godina=document.getElementById('Godina').value;
    document.getElementById("IG").innerHTML = ime + " je roden/a " + godina + " godine.";
    return false;
}