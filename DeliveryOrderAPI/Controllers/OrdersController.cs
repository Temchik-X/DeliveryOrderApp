using Microsoft.AspNetCore.Mvc;
using DeliveryOrderAPI.Data;
using DeliveryOrderAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DeliveryOrderAPI.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrdersController : ControllerBase
    {
        private readonly DeliveryContext _context;

        public OrdersController(DeliveryContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetOrders() => Ok(await _context.Orders.ToListAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null) return NotFound();
            return Ok(order);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(Order order)
        {
            order.OrderNumber = Guid.NewGuid().ToString().Substring(0, 8).ToUpper();
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }

        [HttpGet("test")]
        public IActionResult TestCors()
        {
            return Ok("CORS is working!");
        }
    }
}
