using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EvoSystem.Models;
using EvoSystem.Repositorios.Interfaces;

namespace EvoSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartamentoController : ControllerBase
    {
        private readonly IDepartamentoRepositorio _departamentoRepositorio;

        public DepartamentoController(IDepartamentoRepositorio departamentoRepositorio)         
        {
            _departamentoRepositorio = departamentoRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<DepartamentoModel>>> ListarTodos()
        {
            List<DepartamentoModel> departamentos = await _departamentoRepositorio.BuscarTodosDepartamentos();
            if(!departamentos.Any())
            {
                throw new Exception(message: "Erro ao acessar a base de dados.");
            }

            return Ok(departamentos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<DepartamentoModel>>> BuscarPorId(int id)
        {
            DepartamentoModel departamento = await _departamentoRepositorio.BuscarPorId(id);
            return Ok(departamento);
        }

        [HttpPost]
        public async Task<ActionResult<DepartamentoModel>> Adicionar([FromBody] DepartamentoModel departamentoModel)
        {
            DepartamentoModel departamento = await _departamentoRepositorio.Adicionar(departamentoModel);
            return Ok(departamento);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<DepartamentoModel>> Atualizar([FromBody] DepartamentoModel departamentoModel, int id)
        {
            departamentoModel.Id = id;
            DepartamentoModel departamento = await _departamentoRepositorio.Atualizar(departamentoModel, id);
            return Ok(departamento);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<DepartamentoModel>> Apagar(int id)
        {
            bool apagado = await _departamentoRepositorio.Apagar(id);
            return Ok(apagado);
        }
    }
}
