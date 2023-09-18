var objPeople =  [
{
    username : "SmokeBooK",
    password : "987987"
},
{
    username : "Blade",
    password : "AAA014"
},
{
    username : "Moon",
    password : "654654"
},
{
    username : "Knight",
    password : "95i014"
},
{
    username : "NaNo",
    password : "858585"
}
];

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (i = 0;i < objPeople.length;i++){
        if(username == objPeople[i].username&&password == objPeople[i].password){
            console.log(username + "your username and password are correct! you are logged in.");
            alert("your username and password are correct! you are logged in.");
            return false;
        }
        console.log("incorrect username and password.");
        alert("incorrect username and password.");
        return false;
    }
}