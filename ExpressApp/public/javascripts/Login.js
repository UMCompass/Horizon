<<<<<<< HEAD
/**
 * Created by John on 4/12/14.
 */

/*function initializeSideBar(database) {
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
}*/

$(document).ready(function(){
    /*initializeSideBar(database);*/

    $("#register").click(function(){
        var center = document.getElementById("center");
        center.innerHTML = '' +
            '<div id="title">New User Registration</div>' +
            '<form method="post" action="register">' +
                '<label for="newUsername">Username:</label><br>' +
                '<input id="newUsername" type="text" name="username"><br>' +
                '<label for="newPassword">Password:</label><br>' +
                '<input id="newPassword" type="password" name="password"><br>' +
                '<label for="newPassword2">Re-Enter Password:</label><br>' +
                '<input id="newPassword2" type="password" name="passwordretyped"><br>' +
                '<label for="newEmail">Email:</label><br>' +
                '<input id="newEmail" type="text" name="email"><br>' +
                '<input id="submit" type="submit" value="Create">' +
            '</form>';
    });

=======
/**
 * Created by John on 4/12/14.
 */

/*function initializeSideBar(database) {
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
}*/

$(document).ready(function(){
    /*initializeSideBar(database);*/

    $("#register").click(function(){
        var center = document.getElementById("center");
        center.innerHTML = '' +
            '<div id="title">New User Registration</div>' +
            '<form method="post" action="register">' +
                '<label for="newUsername">Username:</label><br>' +
                '<input id="newUsername" type="text" name="username"><br>' +
                '<label for="newPassword">Password:</label><br>' +
                '<input id="newPassword" type="password" name="password"><br>' +
                '<label for="newPassword2">Re-Enter Password:</label><br>' +
                '<input id="newPassword2" type="password" name="passwordretyped"><br>' +
                '<label for="newEmail">Email:</label><br>' +
                '<input id="newEmail" type="text" name="email"><br>' +
                '<input id="submit" type="submit" value="Create">' +
            '</form>';
    });
});