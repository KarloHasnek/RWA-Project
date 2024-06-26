import { Controller, Get, Param } from '@nestjs/common';
import { ProfesorService } from './profesor.service';

@Controller('profesors')
export class ProfesorController {
    constructor(private profesorService: ProfesorService) {
        console.log('profesorService:', profesorService);
    }

    @Get()
    getAll() {
        return this.profesorService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: number) {
        return this.profesorService.getById(id);
    }

    @Get(':id/notifications')
    getNotificationByProfesorId(@Param('id') id: number) {
        return this.profesorService.getNotificationByProfesorId(id);
    }  
      
    @Get('/:id/courses')
    getCourseByProfesor(@Param('id') id: number) {
        return this.profesorService.getCourseByProfesor(id)
    }
    @Get('/:id/city')
    getCitythroughProfesor(@Param('id') id: number) {
        return this.profesorService.getCitythroughProfesor(id);
    }
}
