import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { Member } from './members';
import { Course } from './courses';

@Entity()
export class InscriptionCourse {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column({ type: 'int' })
    member_id: number

    @Column({ type: 'int' })
    course_id: number

    @ManyToOne(() => Member, member => member.inscriptionCourses)
    @JoinColumn({ name: 'member_id' })
    member: Member;

    @ManyToOne(() => Course, course => course.inscriptionCours)
    @JoinColumn({ name: 'course_id' })
    course: Course;
}