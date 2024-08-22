using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence.Database
{
    public static class Seed
    {
        public static async Task SeedData (ApplicationContext _context)
        {
            if (_context.Products.Any())
            {
                await Task.CompletedTask;
            }
            else
            {
                var product = new List<Product>
                {
                    new("Product 1",100,"Description 1",""),
                    new("Product 2",200,"Description 2",""),
                    new("Product 3",300,"Description 3",""),
                    new("Product 4",400,"Description 4",""),
                    new("Product 5",500,"Description 5",""),
                };
                await _context.Products.AddRangeAsync(product);
                await _context.SaveChangesAsync();
            }
        }
    }
}
