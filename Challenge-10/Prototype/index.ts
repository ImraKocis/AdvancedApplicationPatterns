class Images {
  public loadImagesFromDb(): CustomImage[] {
    return [
      new CustomImage("img1"),
      new CustomImage("img2"),
      new CustomImage("img3"),
    ];
  }
}

class CustomImage {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  public clone() {
    return new CustomImage(`cloned ${this.name}`);
  }

  public imageData() {
    console.log(`original-${this.name}`);
  }
  public blur() {
    console.log(`blurred ${this.clone().name}`);
  }

  public sepia() {
    console.log(`sepia ${this.clone().name}`);
  }

  public imageName() {
    return `original-${this.name}`;
  }
}

const client = () => {
  const images = new Images().loadImagesFromDb();

  images.map((image) => {
    image.blur();
    image.sepia();
  });
};

client();
