using Microsoft.EntityFrameworkCore;
using EvoSystem.Data;
using EvoSystem.Models;
using EvoSystem.Repositorios.Interfaces;

namespace EvoSystem.Repositorios
{
    public class FuncionarioRepositorio : IFuncionarioRepositorio
    {
        private readonly EvoSystemDBContext _dbContext;

        public FuncionarioRepositorio(EvoSystemDBContext evoSystemDBContext)
        {
                _dbContext = evoSystemDBContext;
        }

        public async Task<List<FuncionarioModel>> BuscarFuncionarios()
        {
            return await _dbContext.Funcionarios.ToListAsync();
        }

        public async Task<FuncionarioModel> BuscarPorId(int id)
        {
            return await _dbContext.Funcionarios.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<FuncionarioModel>> BuscarPorDepartamento(int departamentoId)
        {
            var funcionariosQuery = _dbContext.Funcionarios.Where(x => x.DepartamentoId == departamentoId);

            var funcionarios = await funcionariosQuery.ToListAsync();

            return funcionarios;
        }

        public async Task<FuncionarioModel> Adicionar(FuncionarioModel funcionario)
        {
            await _dbContext.Funcionarios.AddAsync(funcionario);
            await _dbContext.SaveChangesAsync();

            return funcionario;
        }

        public async Task<FuncionarioModel> Atualizar(FuncionarioModel funcionario, int id)
        {
            FuncionarioModel funcionarioPorId = await BuscarPorId(id);
            
            if(funcionarioPorId == null)
            {
                throw new Exception($"Funcionário para o ID: {id} não foi encontrado no banco de dados.");
            }

            funcionarioPorId.Nome = funcionario.Nome;
            funcionarioPorId.Foto = funcionario.Foto;
            funcionarioPorId.Rg = funcionario.Rg;
            funcionarioPorId.DepartamentoId = funcionario.DepartamentoId;

            _dbContext.Funcionarios.Update(funcionarioPorId);
            await _dbContext.SaveChangesAsync();

            return funcionarioPorId;
        }

        public async Task<bool> Apagar(int id)
        {
            FuncionarioModel funcionarioPorId = await BuscarPorId(id);

            if (funcionarioPorId == null)
            {
                throw new Exception($"Funcionário para o ID: {id} não foi encontrado no banco de dados.");
            }

            _dbContext.Funcionarios.Remove(funcionarioPorId);
            await _dbContext.SaveChangesAsync();

            return true;
        }

    }
}
