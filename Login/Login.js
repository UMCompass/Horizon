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
    console.log( "ready!" );
    initializeSideBar(database);

});