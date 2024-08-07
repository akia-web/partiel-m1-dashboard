import { inscriptionCourse } from "./inscriptionCours";

export interface Cours {
    id: number; 
    professor: string;
    category: string;
    level: string;
    age_category: string;
    jour: string;
    heure: string;
    inscriptionCours? : inscriptionCourse[];
}