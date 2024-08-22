using Domain.Models;

namespace Domain.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductAsync(Guid id);
        Task<List<Product>> GetAllProductsAsync();
        Task AddProductAsync(Product product);
        Task UpdateProductAsync(Product product);
        Task DeleteProductAsync(Guid id);
    }
}
