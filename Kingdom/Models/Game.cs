namespace Kingdom.Models;

public class Game : IHasCreator
{
  public string Name { get; set; }
  public bool IsRanked { get; set; }
  public string KingId { get; set; }
  public string RebelId { get; set; }
  public string WinnerId { get; set; }
  public int MapId { get; set; }

  #region IHasCreator Additions
  public string CreatorId { get; set; }
  public Account Creator { get; set; }

  #endregion

  #region IDbItem Additions
  public int Id { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime UpdatedAt { get; set; }

  #endregion
}