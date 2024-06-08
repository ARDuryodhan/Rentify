const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin
    if(!adminRole){
        return res.status(401).json({error:"Access Detain, You Don't have Admin Rights"})
    }
    // console.log(req.user);
    // res.status(200).json({message:req.user.isAdmin})
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
