import { Body, Controller, Delete, Get, Param, Post, Put,Request } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getAllTasks(): Promise<Task[]> {
    return await this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number): Promise<Task> {
    return await this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() task: Partial<Task>): Promise<Task> {
    return await this.tasksService.createTask(task);
  }

  @Put(':id')
  async updateTask(@Param('id') id: number, @Body() task: Partial<Task>): Promise<Task> {
    return await this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    await this.tasksService.deleteTask(id);
  }
}


