import { Request, Response, Router } from "express";
import { UserRepository } from "../repositories/user.repository";

const utilsRouter = Router();

utilsRouter.get("/ping", async (req: Request, res: Response) => {
    try {
        const userId = Number(req.query.userId);

        if (isNaN(userId)) {
            return res.status(400).json({ error: "userId inválido" });
        }
        
        //db keep alive
        await UserRepository.findOne({
            where: { id: userId },
        });

        res.json();
    } catch (err) {
        res.status(500).json({
            error: "Error al obtener órdenes",
            detail: err,
        });
    }
});

export default utilsRouter;
