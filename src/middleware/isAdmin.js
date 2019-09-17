const isAdmin = (req, res, next) => {
    if (req.user.isAdmin === false) {
        return res.status(401).json({
            status: 401,
            message: 'You are not an admin',
        });
    }
    return next();
};
export default isAdmin;