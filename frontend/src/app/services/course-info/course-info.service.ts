import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CourseParticipant } from "./course-participant.dto";

@Injectable({ 
    providedIn: 'root' 
})
export class CourseInfoService {


    constructor(private http: HttpClient,){}


    getCourseInfo(studentID: number, profesorID: number, courseID: number): Observable<any> {
        if (studentID && courseID) {
            return this.http.get<any>(`http://localhost:3000/Courses/${studentID}/student-course-info?courseID=${courseID}`)
        } else if(profesorID && courseID) {   
            return this.http.get<any>(`http://localhost:3000/courses/${profesorID}/profesor-course-info?courseID=${courseID}`)
        } else {
            throw console.error(`Student ID ${studentID}, Profesor ID ${profesorID} or course ID ${courseID} does not have valid input`);
        }
    }

    getParticipants(courseID: number): Observable<CourseParticipant[]> {
        if(courseID) {
            return this.http.get<CourseParticipant[]>(`http://localhost:3000/Courses/${courseID}/participants-of-course`)
        } else {
            throw console.error(`Invalid course id ==> ${courseID}, can not retrieve the participants`);
        }
    }
}