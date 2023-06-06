import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({
    name: 'cities'
})
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

}