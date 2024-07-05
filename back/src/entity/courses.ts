import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, ManyToOne, OneToMany} from 'typeorm';
import { Member } from './members';
import { InscriptionCourse } from './inscription-course';

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column({ length: 50 })
    professor: string;

    @Column({ length: 50 })
    category: string;

    @Column({ length: 50 })
    level: string;

    @Column({ length: 50 })
    age_category: string;

    @Column()
    date: Date;

    @OneToMany(() => InscriptionCourse, inscriptionCourse => inscriptionCourse.course)
    inscriptionCours: InscriptionCourse[];

}