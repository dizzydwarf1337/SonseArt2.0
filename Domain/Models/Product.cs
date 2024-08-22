using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class Product
    {
        public Guid Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(5, 2)")]
        public decimal Price { get; set; }

        [MaxLength(100)]
        public string? Description { get; set; }

        public string? Image { get; set; } = default!;
        public Product(string name, decimal price, string? description, string? image)
        {
            Name = name;
            Price = price;
            Description = description;
            Image = image;
        }
    }
}
