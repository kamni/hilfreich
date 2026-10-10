using Microsoft.AspNetCore.Mvc;

namespace hilfreichAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class HomeController : ControllerBase
{
    // GET
    public object Index()
    {
        return Ok();
    }

    // POST
    [HttpPost]
    public object Test()
    {
        return Ok("Message Received");
    }
}