import { Request, Response } from 'express';

export const cadastro = (req: Request, res: Response)=>{
    res.render('pages/cadastro');
};

export const editar = (req: Request, res: Response)=>{
    res.render('pages/editarCadastro');
};