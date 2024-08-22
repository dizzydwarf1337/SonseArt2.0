using AutoMapper;


namespace Application.Core
{
    public class ProductProfile : Profile 
    {
        public ProductProfile()
        {
            CreateMap<Domain.Models.Product, Domain.Models.Product>().ForMember(dest=>dest.Id,opt=>opt.Ignore());
        }
    }
}
