/**
 * Created by Yu on 2017/2/28.
 *
 * Response
 * {
 * status: 0-success, 1-error, 2-not login, 3-no authority, 4- 5-
 *
 * }
 *
 *
 */
authority = {
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            return res.send({status:2});
        }
        next();
    },

    checkAuthorityLevel1: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            return res.send({status:2});
        }else if(req.session.user.authorityType!=1){
            return res.send({status:3});
        }
        next();
    },
    checkAuthorityLevel2: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            return res.send({status:2});
        }else if(req.session.user.authorityType!=2){
            return res.send({status:3});
        }
        next();
    },
    checkAuthorityLevel3: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            return res.send({status:2});
        }else if(req.session.user.authorityType!=3){
            return res.send({status:3});
        }
        next();
    }
};
module.exports = authority;