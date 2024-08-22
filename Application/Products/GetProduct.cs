using Domain.Interfaces;
using Domain.Models;
using MediatR;

namespace Application.Products
{
    public class GetProduct
    {
        public class Query : IRequest<Product>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Product>
        {
            private readonly IProductRepository _productRepository;
            public Handler (IProductRepository productRepository)
            {
                _productRepository = productRepository;
            }
            public async Task<Product> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _productRepository.GetProductAsync(request.Id);
            }
        }
    }
}
