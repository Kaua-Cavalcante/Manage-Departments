using EvoSystem.Models;

namespace EvoSystem.Repositorios.Interfaces
{
    public interface IFuncionarioRepositorio
    {
        Task<List<FuncionarioModel>> BuscarFuncionarios();
        Task<FuncionarioModel> BuscarPorId(int id);
        Task<List<FuncionarioModel>> BuscarPorDepartamento(int departamentoId);
        Task<FuncionarioModel> Adicionar(FuncionarioModel funcionario);
        Task<FuncionarioModel> Atualizar(FuncionarioModel funcionario, int id);
        Task<bool> Apagar(int id);
    }
}
