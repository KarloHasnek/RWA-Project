import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityModule } from './city/city.module';
import { City } from './city/city.entity';
import { CourseModule } from './course/course.module';
import { SemesterModule } from './semester/semester.module';
import { Course } from './course/course.entity';
import { Semester } from './semester/semester.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';
import { TestModule } from './test/test.module';
import { FacultyModule } from './faculty/faculty.module';
import { Faculty } from './faculty/faculty.entity';
import { StudyModule } from './study/study.module';
import { Study } from './study/study.entity';
import { NotificationModule } from './notification/notification.module';
import { Notification } from './notification/notification.entity';
import { Profesor } from './profesor/profesor.entity';
import { ProfesorModule } from './profesor/profesor.module';
import { Test } from '@nestjs/testing';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { FilterModule } from './filter/filter.module';
import { Filter } from './filter/filter.entity';
import { ReplyController } from './reply/reply.controller';
import { ReplyService } from './reply/reply.service';
import { EmailModule } from './mail/email.module';
import { StudentFacultyModule } from './student-faculty/studentFaculty.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '138.197.185.254',
      port: 3306,
      username: 'user1',
      password: 'secret',
      database: 'rwa_merlin',
      entities: [City, Course, Semester, Student, Notification, Profesor, Faculty, Study, Test, User, Filter],
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
    CityModule,
    CourseModule,
    SemesterModule,
    StudentModule,
    TestModule,
    FacultyModule,
    StudentFacultyModule,
    StudyModule,
    NotificationModule,
    ProfesorModule,
    UserModule,
    AuthModule,
    FilterModule,
    EmailModule,
  ],
  controllers: [AppController, ReplyController],
  providers: [AppService, ReplyService],
})
export class AppModule { }
