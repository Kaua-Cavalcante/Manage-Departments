using EvoSystem.Data.Map;
using EvoSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace EvoSystem.Data
{
    public class EvoSystemDBContext : DbContext
    {
        public EvoSystemDBContext(DbContextOptions<EvoSystemDBContext> options) : base(options) 
        {
        }

        public DbSet<FuncionarioModel> Funcionarios { get; set; }
        public DbSet<DepartamentoModel> Departamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new FuncionarioMap());
            modelBuilder.ApplyConfiguration(new DepartamentoMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}
