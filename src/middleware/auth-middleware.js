import { prismaClient } from "../application/database";

export const AuthMiddleware = async (req, res, next) => {
    const token = req.get('Authorization');
    if (!token) {
        res.status(401).json(
            {
                errors: 'Anautorized'
            }
        ).end();
    } else {
        const user = await prismaClient.user.findFirst({
            where: {
                token: token
            }
        });
        if (!user) {
            res.status(401).json(
                {
                    errors: 'Anautorized'
                }
            ).end();
        } else {
            req.user = user;
            next();
        }
    }
}