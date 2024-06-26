import { Controller, Get, Param, Query } from '@nestjs/common';

import { CourseService } from './course.service';
import { Course } from './course.entity';
import { Semester } from 'src/semester/semester.entity';
import { Student } from 'src/student/student.entity';
import { Notification } from 'src/notification/notification.entity';
import { Profesor } from 'src/profesor/profesor.entity';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/roles/roles.enum';

@Controller('Courses')
export class CourseController {
    constructor(private courseService: CourseService) {
        // console.log('courseService:', courseService);
    }

    @Roles(Role.Profesor)
    @Get()
    getAll(): Promise<Course[]> {
        return this.courseService.getAll();
    }

    @Roles(Role.Student, Role.Profesor)
    @Get('/:id')
    getById(@Param('id') id: number): Promise<Course> {
        return this.courseService.getById(id);
    }

    @Get(':id/semester')
    getSemesterThroughCourse(@Param('id') id: number): Promise<Semester> {
        return this.courseService.getSemesterThroughCourse(id);
    }

    @Get(':id/students')
    getStudentsByCourse(@Param('id') id: number): Promise<Student[]> {
        return this.courseService.getStudentsByCourse(id);
    } 

    @Get(':id/profesors')
    getProfesorsByCourse(@Param('id') id: number): Promise<Profesor[]> {
        return this.courseService.getProfesorsByCourse(id);
    }

    @Get(':id/notifications') 
    getNotificationsThroughCourse(@Param('id') id: number): Promise<Notification[]> {
        return this.courseService.getNotificationsThroughCourse(id);
    }

    @Get(':id/course-semester-info')
    getCoursesWithSemesterInfo(
        @Param('id') id: number,
        @Query('type') type: 'student' | 'profesor'
    ): Promise<any[]> {
        if(type === 'student') {
            return this.courseService.getCoursesWithSemesterInfo(id, null);
        } else if (type === 'profesor') {
            return this.courseService.getCoursesWithSemesterInfo(null, id);
        } else {
            throw new Error('Invalid type provided');
        }
    }

    @Get(':id/student-course-info')
    getStudentCourseInfo(
        @Param('id') studentID: number,
        @Query('courseID') courseID: number
    ): Promise<any> {
        return this.courseService.getStudentCourseInfo(studentID, courseID)
    }

    @Get(':id/profesor-course-info')
    getProfesorCourseInfo(
        @Param('id') profesorID: number,
        @Query('courseID') courseID: number
    ): Promise<any> {
        return this.courseService.getProfesorCourseInfo(profesorID, courseID)
    }

    @Get(':id/participants-of-course')
    getAllParticipantsOfTheCourse(@Param('id') id: number): Promise<any> {
        return this.courseService.getAllParticipantsOfTheCourse(id)
    }
    
}