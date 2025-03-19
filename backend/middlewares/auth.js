import jwt from "jsonwebtoken";
 export const verifyToken = async (req, resp, next) => {
    try {
        const bearerHeader = req.header("Authorization");
        if (!bearerHeader) {
            return resp.status(403).json({ message: "Access Denied" });
        }
        else {
            const bearer = bearerHeader.split(" ");
            const token = bearer[1];//the token is the second object after splitting
            const ifVerified=jwt.verify(token,process.env.JWT_SECRET);
            console.log(ifVerified);
            console.log("balhblah");
            req.user=ifVerified;
            console.log(req.user);
            next();
        }
    }
    catch(error){
        resp.status(500).json({error:error.message});
    }
};

