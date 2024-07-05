import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Contact } from './contact';
import { Course } from './courses';
import { InscriptionCourse } from './inscription-course';

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

    @Column({length:50})
    status: string;

    @Column()
    birthday: Date;

    @OneToOne(() => Contact, contact => contact.member)
    contact: Contact;

    @OneToMany(() => InscriptionCourse, inscriptionCourse => inscriptionCourse.member)
    inscriptionCourses: InscriptionCourse[];
}