import { Unauthenticated } from '../error/index.js';
import jwt from 'jsonwebtoken';


const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new Unauthenticated('Authentication invalid!');
    }

    const token = authHeader.split(' ')[1];

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);
        req.user = {userId: payload.userId};
        return next();
    }catch(err){
        throw new Unauthenticated('Authorization token missing!');
    }
}

export default auth;