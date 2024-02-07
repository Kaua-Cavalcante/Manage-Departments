using EvoSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EvoSystem.Data.Map
{
    public class FuncionarioMap : IEntityTypeConfiguration<FuncionarioModel>
    {
        public void Configure(EntityTypeBuilder<FuncionarioModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Foto).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Rg).IsRequired().HasMaxLength(10);
            builder.Property(x => x.DepartamentoId).IsRequired();
            builder.HasOne(x => x.Departamento);
        }
    }

}
