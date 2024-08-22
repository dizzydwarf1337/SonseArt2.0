using AutoMapper;
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
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id;
            public Product product = default!;
        }

        class Handler : IRequestHandler<Command>
        {
            public Handler(IMapper mapper,IProductRepository productRepository)
            {
                _mapper = mapper;
                _productRepository = productRepository;
            }

            private IMapper _mapper;
            private IProductRepository _productRepository;

            public async Task  Handle(Command request, CancellationToken cancellationToken)
            {
                var product = await _productRepository.GetProductAsync(request.Id);   
                _mapper.Map(request.product,product);
                await _productRepository.UpdateProductAsync(product);
            }
        }
    }
}
