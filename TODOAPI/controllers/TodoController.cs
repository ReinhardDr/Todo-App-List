using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TODOAPI.Data;
using TODOAPI.Dto;
using TODOAPI.mappers;

namespace TODOAPI.controllers
{
    [Route("api/todo")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ApplicationDbContext _dBContext;

        public TodoController(ApplicationDbContext dbContext)
        {
            _dBContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var todo = _dBContext.Todos.ToList();

            return Ok(todo);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetTodoById(int id)
        {
            var todo = await _dBContext.Todos.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            return Ok(todo);
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreatetodoRequestDto createTodoRequest)
        {
            var todoModel = createTodoRequest.TotodoFromCreateDto();
            _dBContext.Todos.Add(todoModel);
            _dBContext.SaveChanges();
            return CreatedAtAction(nameof(GetTodoById), new { id = todoModel.Id }, todoModel.MakeTodoDto());
        }
        [HttpPut]
        [Route("{id}")]// Specify thằng id này để lấy nó cập nhật 
        public IActionResult Update([FromRoute] int id, [FromBody] TodoUpdateDto todoUpdateDto)
        {
            var todoModel = _dBContext.Todos.FirstOrDefault(x => x.Id == id);
            if (todoModel == null)
            {
                return NotFound();
            }
            //Đây là cách hoạt động của Update
            todoModel.Titile = todoUpdateDto.Titile;
            todoModel.IsDone = todoModel.IsDone;

            _dBContext.SaveChanges();

            return Ok(todoModel.MakeTodoDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var todoModel = _dBContext.Todos.FirstOrDefault(x => x.Id == id);

            if (todoModel == null)
            {
                return NotFound();
            }
            _dBContext.Todos.Remove(todoModel);
            _dBContext.SaveChanges();

            return NoContent();
        }
    };
}