namespace Kingdom.Controllers;

[ApiController]
[Route("api/[controller]")]

public class GamesController : ControllerBase
{
  private readonly GamesService _gamesServ;
  private readonly Auth0Provider _auth0;

  public GamesController(Auth0Provider auth0, GamesService gamesServ)
  {
    _auth0 = auth0;
    _gamesServ = gamesServ;
  }
}