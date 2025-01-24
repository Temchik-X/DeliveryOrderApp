using Microsoft.EntityFrameworkCore;
using DeliveryOrderAPI.Models;

namespace DeliveryOrderAPI.Data
{
    public class DeliveryContext : DbContext
    {
        public DeliveryContext(DbContextOptions<DeliveryContext> options) : base(options) { }

        public DbSet<Order> Orders { get; set; }
    }
}
