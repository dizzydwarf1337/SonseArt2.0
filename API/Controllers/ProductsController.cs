using Application.Products;
using Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            return await Mediator.Send(new GetProduct.Query { Id = id });
        }
        [HttpGet]
        public async Task<List<Product>> GetAllProducts()
        {
            return await Mediator.Send(new GetAllProducts.Query());
        }
        [HttpPost]
        public async Task Create(Product Product)
        {
            await Mediator.Send(new Create.Command { product = Product });
        }
        [HttpPut("{id}")]
        public async Task Edit(Guid id, Product Product)
        {
            await Mediator.Send(new Edit.Command { Id = id, product = Product });
        }
        [HttpDelete("{id}")]
        public async Task Delete(Guid id)
        {
            await Mediator.Send(new Delete.Command { Id = id });

        }
    }
}
