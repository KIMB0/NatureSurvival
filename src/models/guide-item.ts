export class GuideItem {

  public name: string;
  public heading1: string;
  public description1: string;
  public heading2: string;
  public description2: string;
  public image: string;

  constructor(name, heading1, description1, heading2, description2, image){
    this.name = name,
    this.heading1 = heading1,
    this.description1 = description1,
    this.heading2 = heading2,
    this.description2 = description2,
    this.image = image
  }
  
}
