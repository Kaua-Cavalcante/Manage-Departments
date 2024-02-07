using EvoSystem.Models;

namespace EvoSystem.Repositorios.Interfaces
{
    public interface IDepartamentoRepositorio
    {
        Task<List<DepartamentoModel>> BuscarTodosDepartamentos();
        Task<DepartamentoModel> BuscarPorId(int id);
        Task<DepartamentoModel> Adicionar(DepartamentoModel departamento);
        Task<DepartamentoModel> Atualizar(DepartamentoModel departamento, int id);
        Task<bool> Apagar(int id);
    }
}
