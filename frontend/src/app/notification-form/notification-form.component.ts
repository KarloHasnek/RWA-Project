import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CourseDto } from '../services/course/course.dto';
import { CourseListService } from '../services/cache/course-list.service';

@Component({
  selector: 'app-notification-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule],
  templateUrl: './notification-form.component.html',
  styleUrl: './notification-form.component.scss'
})
export class NotificationFormComponent implements OnInit {

  courses: CourseDto[] = [];

  constructor(private courseListService: CourseListService) { }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  notificationForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  ngOnInit(): void {
    this.courses = this.courseListService.getData();
  }

}
