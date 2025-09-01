using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TODOAPI.models
{
    public class TodoModel
    {
        public int Id { get; set; }

        public string Titile { get; set; } = string.Empty;

        public bool IsDone { get; set; } = false;
    }
}