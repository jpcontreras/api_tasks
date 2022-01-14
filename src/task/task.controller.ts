import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDTO: TaskDTO) {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => reject('Error en Petición'), 2000);
    // });
    return this.taskService.create(taskDTO);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDto: TaskDTO) {
    return this.taskService.update(id, taskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.taskService.delete(id);
  }

  /*
    // Params Decorator
    @Post(':id/description/:description/is-done/:isDone')
    post(
        @Param('id') id: number, 
        @Param('description') description: string,
        @Param('isDone') isDone: boolean
    ){
        return { id, description, isDone };
    }

    // Query Params Decorator
    @Post()
    post1(
        @Query('id') id: number, 
        @Query('description') description: string,
        @Query('isDone') isDone: boolean
    ){
        return { id, description, isDone };
    }

    @Post()
    post2(
        @Body('id') id: number, 
        @Body('description') description: string,
        @Body('isDone') isDone: boolean
    ){
        return { id, description, isDone };
    }

    @Get('done')
    get(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Put()
    put(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Patch()
    patch(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Delete()
    delete(@Req() req: Request){
        return `method ${req.method}`;
    }
    */
}
