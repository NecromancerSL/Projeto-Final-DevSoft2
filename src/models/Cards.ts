import {Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/mysql';
import { Express } from 'express';

export interface CardsInterface extends Model {
    
    id: number;
    name: string;
    cmc: string;
    type: string;
    collection: string;
    priceaverage: number;
    img:string;
}

export const Cards = sequelize.define<CardsInterface>("Cards", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    cmc: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    collection: {
        type: DataTypes.STRING
    },
    priceaverage: {
        type: DataTypes.FLOAT
    },
    img: {
        type: DataTypes.STRING
    }},
    {
        tableName: 'cards',
        timestamps: false
    } 
);


sequelize.sync();   