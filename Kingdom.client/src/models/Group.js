

export class Group {
  contstructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.gameId = data.gameId;
    this.wealth = data.wealth;
    this.tax = data.tax;
    this.pop = data.pop;
    this.alliance = data.alliance;
  }
}