using Domain.Models;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Persistence.Database;
namespace Persistence.Repos
{
    public class ProductRepo : IProductRepository
    {
        private readonly ApplicationContext _context;
        
        public ProductRepo (ApplicationContext context)
        {
            _context = context;
        }
        
        public async Task AddProductAsync(Product product)
        {
            await _context.Products.AddAsync(product);
        }
        
        public async Task DeleteProductAsync(Guid id)
        {
           var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
            }  
        }

        public async Task<List<Product>>GetAllProductsAsync()
        {
          return await _context.Products.ToListAsync();
        }
        
        public async Task<Product> GetProductAsync(Guid id)
        { 
          return await _context.Products.FindAsync(id);
        }
        
        public async Task UpdateProductAsync(Product product)
        {
            _context.Update(product);
            await _context.SaveChangesAsync();
        }
    }
}
