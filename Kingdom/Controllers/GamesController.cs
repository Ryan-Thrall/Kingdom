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

  [Authorize]
  [HttpPost]
  public async Task<ActionResult<Game>> CreateGame([FromBody] Game data)
  {
    // Access User Info or throw error
    var userInfo = await _auth0.GetUserInfoAsync<Account>(HttpContext);
    if (userInfo == null || userInfo.Id == null)
    {
      throw new Exception("Cannot Access Account. Relogin and try again.");
    }

    Game game = _gamesServ.CreateGame(data, userInfo);
    return Ok(game);
  }
}