using Microsoft.AspNetCore.Mvc;

namespace hilfreichAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class HomeController : ControllerBase
{
    private ILogger<HomeController> _logger;
    
    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    
    // GET
    public object Index()
    {
        _logger.LogInformation("API Get request endpoint hit.");
        return Ok();
    }

    // POST
    [HttpPost]
    public object Test()
    {
        _logger.LogInformation("Post message received.");
        return Ok("Message Received");
    }
}