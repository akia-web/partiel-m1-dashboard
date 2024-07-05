import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Member } from './members';

@Entity()
export class Contact {
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

    @Column({ type: 'int' })
    member_id: number

    @OneToOne(() => Member, member => member.contact)
    @JoinColumn({ name: 'member_id' })
    member: Member;
}