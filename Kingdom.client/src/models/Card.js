

export class Card {
  contstructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.faction = data.faction;
    this.type = data.type;
    this.value = data.value;
    this.text = data.text;
  }
}