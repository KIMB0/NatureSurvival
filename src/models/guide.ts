import { GuideItem } from './guide-item'

export class Guide{

  public title: string;
  public description: string;
  public image: string;
  public guideItem: Array<GuideItem>

  constructor(title, description, image, guideItem){
    this.title = title,
    this.description = description,
    this.image = image,
    this.guideItem = guideItem
  }

}
