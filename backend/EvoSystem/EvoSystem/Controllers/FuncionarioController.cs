using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EvoSystem.Models;
using EvoSystem.Repositorios.Interfaces;

namespace EvoSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        private readonly IFuncionarioRepositorio _funcionarioRepositorio;

        public FuncionarioController(IFuncionarioRepositorio funcionarioRepositorio)
        {
            _funcionarioRepositorio = funcionarioRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<FuncionarioModel>>> BuscarTodosFuncionarios()
        {
            List<FuncionarioModel> funcionarios = await _funcionarioRepositorio.BuscarFuncionarios();
            return Ok(funcionarios);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<FuncionarioModel>>> BuscarPorId(int id)
        {
            FuncionarioModel funcionario = await _funcionarioRepositorio.BuscarPorId(id);
            return Ok(funcionario);
        }

        [HttpGet("by-department/{departamentoId}")]
        public async Task<ActionResult<List<FuncionarioModel>>> BuscarPorDepartamento(int departamentoId)
        {
            List<FuncionarioModel> funcionarios = await _funcionarioRepositorio.BuscarPorDepartamento(departamentoId);
            return Ok(funcionarios);
        }

        [HttpPost]
        public async Task<ActionResult<FuncionarioModel>> Adicionar([FromBody] FuncionarioModel funcionarioModel)
        {
            FuncionarioModel funcionario = await _funcionarioRepositorio.Adicionar(funcionarioModel);
            return Ok(funcionario);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<FuncionarioModel>> Atualizar([FromBody] FuncionarioModel funcionarioModel, int id)
        {
            funcionarioModel.Id = id;
            FuncionarioModel funcionario = await _funcionarioRepositorio.Atualizar(funcionarioModel, id);
            return Ok(funcionario);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<FuncionarioModel>> Apagar(int id)
        {
            bool apagado = await _funcionarioRepositorio.Apagar(id);
            return Ok(apagado);
        }
    }
}
