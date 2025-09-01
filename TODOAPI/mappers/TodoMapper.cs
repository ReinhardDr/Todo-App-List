using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TODOAPI.Dto;
using TODOAPI.models;

namespace TODOAPI.mappers
{
    public static class TodoMapper
    {
        public static TodoDto MakeTodoDto(this TodoModel todoModel)
        {
            return new TodoDto
            {
                Id = todoModel.Id,
                Titile = todoModel.Titile,
                IsDone = todoModel.IsDone
            };
        }
        public static TodoModel TotodoFromCreateDto(this CreatetodoRequestDto todoReqDto)
        {
            return new TodoModel
            {
                Titile = todoReqDto.Titile,
                IsDone = todoReqDto.IsDone
            };
        }
    }
}