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
    public class Create
    {
       public class Command : IRequest
        {
            public Product product =default!;
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly IProductRepository _productRepository;

            public Handler(IProductRepository productRepository) => _productRepository = productRepository;
            
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                await _productRepository.AddProductAsync(request.product);
            }
        }
    }
}
