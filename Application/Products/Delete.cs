using Domain.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Products
{
    public class Delete
    {
        public class Command : IRequest
        {

            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly IProductRepository _productRepository;

            public Handler(IProductRepository productRepository)
            {
                _productRepository = productRepository;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
               await _productRepository.DeleteProductAsync(request.Id);
            }
        }
    }
}
