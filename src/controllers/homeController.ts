import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { sequelize } from '../instances/mysql';
import { Cards } from '../models/Cards';

export const home = async (req: Request, res: Response)=>{

    const cards = await Cards.findAll();

    try{
        await sequelize.authenticate();
        console.log("Conexão estabelicida com sucesso");
    }catch(error){
        console.log("Deu problema: ",error)
    }
    res.render('pages/home',{
        cards
    });
};