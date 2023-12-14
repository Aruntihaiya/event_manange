import db from './../models/index';
const User = db.user;
const jwt = require('jsonwebtoken');

const apiAuth = async (req, res, next) => {
  if (!(req.headers && req.headers['x-token'])) {
    return res.status(401).json({ message: 'Token is not provided', success: false });
  }

  const token = req.headers['x-token'];

  try {
    const decoded = jwt.verify(token, "the-super-strong-secrect");
    console.log(decoded, 'hghjghj');

    req.decodedUser = decoded.userss; // Store the decoded user data in req.decodedUser
    console.log('req.decodedUser:', req.decodedUser);

    // Check if 'phoneNumber' property is present in decoded user data
    if (!req.decodedUser.mobile) {
      return res.status(401).json({ message: 'Invalid user data in the token', success: false });
    }

    const user = await User.findOne({
      where: { mobile: req.decodedUser.mobile },
    });
    console.log('user:', user);

    if (!user) {
      return res.status(401).json({ message: 'User not found in the system', success: false });
    }

    const reqUser = { ...user.get() };
    reqUser.userId = user.id;
    req.user = reqUser;

    return next();
  } catch (error) {
    console.error('Error decoding token:', error);
    return res.status(401).json({ message: 'Incorrect token provided, try re-login', success: false });
  }
};

export default apiAuth;
