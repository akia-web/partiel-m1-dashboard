import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    last_name: string;

    @Column({ length: 50 })
    first_name: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 20 })
    phone: string;

    @Column({ length: 100 })
    address: string;

    @Column({ length: 10 })
    postal_code: string;

    @Column({ length: 50 })
    city: string;
}