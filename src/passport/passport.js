import JwtStrategy from 'passport-jwt';
import UserModel from '../models/Users';

const { Strategy, ExtractJwt } = JwtStrategy;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'ilovetocode2019';
module.exports = passport => {
    passport.use(
        new Strategy(opts, (jwtPayLoad, next) => {
            const { email } = jwtPayLoad;
            const user = UserModel.findByEmail(email);
            if (user) {
                next(null, user);
            } else {
                next(null, false);
            }
        })
    );
};