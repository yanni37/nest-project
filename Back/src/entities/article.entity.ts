import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        nullable: true
    }
    )
    full_article: string;

    @Column({
        nullable: true
    })
    published: boolean;

    @Column({
        nullable: true
    })
    has_qcm: boolean;
}