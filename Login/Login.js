/**
 * Created by John on 4/12/14.
 */

database = {
    "School_Name": "UMass"
};

function initializeSideBar(database) {
    var sidebar = document.getElementById("sidebar");
    console.log(sidebar);
    var compass = document.createElement("p");
    compass.setAttribute("id", "compass");
    compass.innerHTML = "The " + database.School_Name + " Compass";
    console.log(compass);
    var horizon = document.createElement("p");
    horizon.setAttribute("id", "horizon");
    horizon.innerHTML = "by Horizon";
    sidebar.appendChild(compass);
    sidebar.appendChild(horizon);
}

$(document).ready(function(){
    initializeSideBar(database);

    $("#register").click(function(){
        var mainWindow = document.getElementById("mainWindow");
        mainWindow.empty();
        mainWindow = document.createElement("form");
        var nameLabel = document.createElement("label");
        var name = document.createElement("input");
        nameLabel.setAttribute("for", "name");
        nameLabel.innerHTML = "Name";
        name.setAttribute("id", "name");
        name.setAttribute("type", "text");
        name.setAttribute("name", "name");
        var usernameLabel = document.createElement("label");
        var username = document.createElement("input");
        usernameLabel.setAttribute("for", "username");
        usernameLabel.innerHTML = "Username";
        username.setAttribute("id", "username");
        username.setAttribute("type", "text");
        username.setAttribute("name", "username");
        var passwordLabel = document.createElement("label");
        var password = document.createElement("input");
        passwordLabel.setAttribute("for", "password");
        passwordLabel.innerHTML = "password";
        password.setAttribute("id", "password");
        password.setAttribute("type", "password");
        password.setAttribute("name", "password");
        mainWindow.appendChild(nameLabel);
        mainWindow.appendChild(name);
        mainWindow.appendChild(usernameLabel);
        mainWindow.appendChild(username);
        mainWindow.appendChild(passwordLabel);
        mainWindow.appendChild(password);
    })

});