/**
 * Created by John on 4/12/14.
 */

database = {
    "School_Name": "UMass"
};

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

/*exports.authorize = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (!username || !password) {
        req.flash('authorize', 'Must provide username and password');
        res.redirect('/');
    }
    else {
        users.validate(username, password, function (err, user) {
            if (err) {
                req.flash('authorize', err);
                res.redirect('/');
            }
            else {
                req.session.user = user;
                res.redirect('/posts');
            }
        });
    }
};*/

$(document).ready(function(){
    /*initializeSideBar(database);*/

    $("#register").click(function(){
        var center = document.getElementById("center");
        center.innerHTML = '' +
            '<form action="database">' +
                '<label for="newUsername">Username:</label><br>' +
                '<input id="newUsername" type="text" name="username"><br>' +
                '<label for="newPassword">Password:</label><br>' +
                '<input id="newPassword" type="password" name="password"><br>' +
                '<label for="newPassword2">Re-Enter Password:</label><br>' +
                '<input id="newPassword2" type="password" name="password"><br>' +
                '<label for="newEmail">Email:</label><br>' +
                '<input id="newEmail" type="text" name="email"><br>' +
                '<input type="submit" value="Create">' +
            '</form>';
    })

});