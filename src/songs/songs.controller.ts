import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

    @Post()
    create() {
        return "Crate a new song"
    };
    @Get()
    findAll() {
        return "Find all songs"
    };

    @Get(':id')
    findOne() {
        return "Fetch Song on the base on id"
    };

    @Put(':id')
    update() {
        return "Update Song on the base on id"
    };
    @Delete(':id')
    delete() {
        return "Delete Song on the base on id"
    };

}
