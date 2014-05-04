function displaySettingsItem(settingsItem){
    var center = document.getElementById('center');
    center.innerHTML = "";
    center.innerHTML = "" +
        "<div id='navMenu'>" +
        "<div id='navChecklist'>" +
        "<div class='navContainer'><a href='/Checklist' id='checklist'>Checklist</a></div>" +
        "</div>" +
        "<div id='navSettings'>" +
        "<div class='navContainer'><a href='/settings' id='settings'>Settings</a></div>" +
        "</div>" +
        "<div id='navForums'>" +
        "<div class='navContainer'>Forums</div>" +
        "</div>" +
        "<div id='navLogout'>" +
        "<div class='nacContainer'><a href='/logout' id='logout'>Logout</a></div>" +
        "</div>" +
        "</div>";
    setTitle(settingsItem.innerHTML);

    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'settingUpdate');

    if (settingsItem.id === "username") {
        form.innerHTML = "" +
            '<label for="newUsername">New Username:</label><br>' +
            '<input id="newUsername" type="text" name="newUser"><br>' +
            '<input id="submit" type="submit" value="Change Username">'
    }
    else if (settingsItem.id === "password") {
        form.innerHTML = "" +
            '<label for="newPassword">New Password:</label><br>' +
            '<input id="newPassword" type="password" name="newPass"><br>' +
            '<label for="newPassword2" >Re-Enter New Password:</label><br>' +
            '<input id="newPassword2" type="password" name="newPass2"><br>' +
            '<input id="submit" type="submit" value="Change Password">'
    }
    else if (settingsItem.id === "email") {
        form.innerHTML = "" +
            '<label for="newEmail">Email:</label><br>' +
            '<input id="newEmail" type="text" name="newEmail"><br>' +
            '<input id="submit" type="submit" value="Change Email">'
    }
    else if (settingsItem.id === "userType") {
        form.innerHTML = "" +
            '<label for="newType">Select an Account Type:</label><br>' +
            '<select id="newType" name="newType"> <option value="Student">Student</option> <option value="Designer">Designer</option> </select><br>' +
            '<input id="submit" type="submit" value="Change Account Type">'
    }

    center.appendChild(form);
}

function setTitle(title){
    var center = document.getElementById('center');
    var titleBox = document.createElement('div');
    titleBox.setAttribute('id', 'title')
    titleBox.innerHTML = "Change " + title;
    center.appendChild(titleBox)
}

$(document).ready(function(){

    $("#sidebarMenu>li").click(function(){
        var that = $(this);
        var sel = $("#sidebarMenu>li.selected");
        if (sel.length!=0){
            sel.removeClass("selected")
        }

        this.classList.add("selected");
        displaySettingsItem(this);
    });

});
