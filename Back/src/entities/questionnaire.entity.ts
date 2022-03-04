import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Questionnaire {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_utilisateur: number;
    
}