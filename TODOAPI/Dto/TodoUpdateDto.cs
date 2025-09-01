using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TODOAPI.Dto
{
    public class TodoUpdateDto
    {
        public string Titile { get; set; } = "";

        public bool IsDone { get; set; } = false;
    }
}