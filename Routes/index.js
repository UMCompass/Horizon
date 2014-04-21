/**
 * Created by John on 4/21/14.
 */


exports.authorize = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (!username || !password) {
        req.flash('authorize', 'Must provide username and password');
        res.redirect('/');
    }
    else {
        res.redirect('../checklist')
        /*users.validate(username, password, function (err, user) {
            if (err) {
                req.flash('authorize', err);
                res.redirect('/');
            }
            else {
                req.session.user = user;
                res.redirect('../checklist');
            }
        });*/
    }
};