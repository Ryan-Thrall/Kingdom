namespace Kingdom.Services;

public class GamesService
{
  private readonly GamesRepository _gamesRepo;

  public GamesService(GamesRepository gamesRepo)
  {
    _gamesRepo = gamesRepo;
  }
}