using EvoSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EvoSystem.Data.Map
{
    public class DepartamentoMap : IEntityTypeConfiguration<DepartamentoModel>
    {
        public void Configure(EntityTypeBuilder<DepartamentoModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Sigla).IsRequired().HasMaxLength(255);
        }
    }
}
