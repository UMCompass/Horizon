function displaySettingsItem(settingsItem){
    var center = document.getElementById('center');
    center.innerHTML = "";
    setTitle(settingsItem.innerHTML);

    var form = document.createElement('form');
    if (settingsItem.id === "username") {
        form.setAttribute('action', 'changeUsername')
        form.innerHTML = "" +
            '<label for="newUsername">New Username:</label><br>' +
            '<input id="newUsername" type="text" name="username"><br>' +
            '<input id="submit" type="submit" value="Change Username">'
    }
    else if (settingsItem.id === "password") {
        form.setAttribute('action', 'changePassword')
        form.innerHTML = "" +
            '<label for="newPassword">New Password:</label><br>' +
            '<input id="newPassword" type="password" name="password1"><br>' +
            '<label for="newPassword2">Re-Enter New Password:</label><br>' +
            '<input id="newPassword2" type="password" name="password2"><br>' +
            '<input id="submit" type="submit" value="Change Password">'
    }
    else if (settingsItem.id === "email") {
        form.setAttribute('action', 'changeEmail')
        form.innerHTML = "" +
            '<label for="newEmail">Email:</label><br>' +
            '<input id="newEmail" type="text" name="email"><br>' +
            '<input id="submit" type="submit" value="Change Email">'
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
