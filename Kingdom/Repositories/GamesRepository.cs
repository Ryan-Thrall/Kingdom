namespace Kingdom.Repositories;

public class GamesRepository : BaseRepo
{
  public GamesRepository(IDbConnection db) : base(db)
  {

  }

  public Game CreateGame(Game data)
  {
    string sql = @"
    INSERT INTO games(creatorId, name, isRanked, mapId)
    VALUES (@CreatorId, @Name, @IsRanked, @MapId);
    SELECT LAST_INSERT_ID()
    ;";

    // Set The Created Time for this game
    data.CreatedAt = DateTime.Now;
    data.UpdatedAt = DateTime.Now;

    // Run the sql and return the game object
    data.Id = _db.ExecuteScalar<int>(sql, data);
    return data;
  }
}