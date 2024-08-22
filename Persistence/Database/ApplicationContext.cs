using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Database
{
    public class ApplicationContext : DbContext   
    {
        public DbSet<Product> Products { get; set; } = default!;
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }
    }
}
