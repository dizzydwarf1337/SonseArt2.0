using Domain.Interfaces;
using Domain.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Products
{
    public class GetAllProducts
    {
        public class Query : IRequest<List<Product>>{}
        public class Handler : IRequestHandler<Query, List<Product>>
        {
            private readonly IProductRepository _productRepository;
            public Handler(IProductRepository productRepository)
            {
                _productRepository = productRepository;
            }
            public async Task<List<Product>> Handle(Query request, CancellationToken cancellationToken)
            {
               return await _productRepository.GetAllProductsAsync();
            }
        }
    }
}
