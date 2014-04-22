/**
 * Adapted from workshop 5
 */

/*pseudo code implementation of changeUsername*/
exports.changeUsername = function(req, res) {
    var newUserName = req.body.username;
    if (newUserName !== ""){
        if (database.changeUserName(userID, newUserName)) {
            req.session.user.username = newUserName;
            req.flash("changeUsername", "Username successfully changed to: " + newUserName)
        }
        else {
            req.flash("changeUsername", "There seems to be a server error, please try again.")
        }
    }
    else {
        req.flash("changeUsername", "Oh my god, fill in the fucking box. There's only one, it's not that hard, idiot.")
    }
}

/*pseudo code implementation of changePassword*/
exports.changePassword = function(req, res) {
    var newPassword1 = req.body.password1;
    var newPassword2 = req.body.password2;
    if (newPassword1 !== "" && newPassword2 !== ""){
        if (newPassword1 === newPassword2){
            if (database.changeUserName(userID, newPassword1)) {
                req.session.user.password = newPassword1;
            }
            else {
                req.flash("changePassword", "There seems to be a server error, please try again.")
            }
        }
        else {
            req.flash("changePassword", "You're a fucking idiot, learn to type a God damned password." +
                "Try again and make sure they match this time, asshole.")
        }
    }
    else {
        req.flash("changePassword", "First day on the internet? Hey Shitforbrains, " +
            "You have to fill in both text boxes. Please try again.")
    }
}

/*pseudo code implementation of changeEmail*/
exports.changeEmail = function(req, res) {
    var newEmail = req.body.email;
    if (newEmail !== ""){
        if (database.changeUserName(userID, newEmail)) {
            req.session.user.email = newEmail;
            req.flash("changeEmail", "Email successfully changed to: " + newEmail)
        }
        else {
            req.flash("changeEmail", "There seems to be a server error, please try again.")
        }
    }
    else {
        req.flash("changeEmail", "Holy shit, all you have to do is fill in that one box." +
            "You're a fucking idiot.")
    }
}