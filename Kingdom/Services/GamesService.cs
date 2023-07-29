namespace Kingdom.Services;

public class GamesService
{
  private readonly GamesRepository _gamesRepo;

  public GamesService(GamesRepository gamesRepo)
  {
    _gamesRepo = gamesRepo;
  }

  public Game CreateGame(Game data, Account userInfo)
  {
    data.CreatorId = userInfo.Id;

    Game game = _gamesRepo.CreateGame(data);
    game.Creator = userInfo;
    return game;
  }
}