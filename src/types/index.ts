export interface Response {
  id: number;
  brand: string;
  name: string;
  price: number;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: null;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: Date;
  updated_at: Date;
  product_api_url: string;
  api_featured_image: string;
  product_colors: ProductColor[];
  [x: string]: any;
}

export interface ProductColor {
  hex_value: string;
  colour_name: string;
}
