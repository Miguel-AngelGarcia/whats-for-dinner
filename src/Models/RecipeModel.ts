class RecipeModel {
  id: number;
  title: string;
  website?: string;
  url: string;
  category: string;
  description: string;
  img?: string;

  constructor(
    id: number,
    title: string,
    website: string,
    url: string,
    category: string,
    description: string,
    img: string
  ) {
    this.id = id;
    this.title = title;
    this.website = website;
    this.url = url;
    this.category = category;
    this.description = description;
    this.img = img;
  }
}

export default RecipeModel;
