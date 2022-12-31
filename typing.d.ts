interface Brand {
  Name: string;
  Tagline: string;
  Logo: Image[];
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}
