namespace Kingdom.Models;

public class Game : IHasCreator
{
  public string Name { get; set; }
  public bool isRanked { get; set; }
  public string kingId { get; set; }
  public string rebelId { get; set; }
  public string winnerId { get; set; }
  public int mapId { get; set; }

  #region IHasCreator Additions
  public string CreatorId { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
  public Account Creator { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

  #endregion

  #region IDbItem Additions
  public int Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
  public DateTime CreatedAt { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
  public DateTime UpdatedAt { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

  #endregion
}