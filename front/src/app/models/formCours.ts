import { FormControl } from "@angular/forms";
import { LevelEnum } from "../../enum/level";

export interface FormCours { 
    professor: FormControl<string | null>;
    level : FormControl<LevelEnum|null> 
}