// "use server";

// import { client } from "@/sanity/lib/client";

// export interface IProduct {
//     image: string;
//     slug: {current: string};
//     tags: string[];
//     price: number;
//     quantity: number;
//     description: string;
//     features: string[];
//     dimensions: {
//       width: string;
//       height: string;
//       depth: string;
//     };
//     category: string;
//     brand: string;
//   }

// export const getProducts= async()=>{
    
// const Data: IProduct[] =await client.fetch(`*[_type == "product"][]{
//     "image":image.asset->url,
//     slug,
//     tags,
//     price,
//     quantity,
//     description,
//     features,
//     dimensions{
//     width,
//     height,
//     depth,
//     },
//     "category":category->name,
//     "brand":brand->name
//   }`);

//   return Data
// }