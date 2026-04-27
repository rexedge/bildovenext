import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
     return [
          {
               url: "https://www.bildovefinancialservices.com",
               lastModified: new Date(),
               changeFrequency: "yearly",
               priority: 1,
          },
          {
               url: "https://www.bildovefinancialservices.com/about",
               lastModified: new Date(),
               changeFrequency: "yearly",
               priority: 1,
          },
          {
               url: "https://www.bildovefinancialservices.com/contact",
               lastModified: new Date(),
               changeFrequency: "yearly",
               priority: 1,
          },
          {
               url: "https://www.bildovefinancialservices.com/event",
               lastModified: new Date(),
               changeFrequency: "yearly",
               priority: 1,
          },
          {
               url: "https://www.bildovefinancialservices.com/products",
               lastModified: new Date(),
               changeFrequency: "yearly",
               priority: 1,
          },
          {
               url: "https://www.bildovefinancialservices.com/services",
               lastModified: new Date(),
               changeFrequency: "yearly",
               priority: 1,
          },
          {
               url: "https://www.bildovefinancialservices.com/testimonials",
               lastModified: new Date(),
               changeFrequency: "yearly",
               priority: 1,
          },
          {
               url: "https://www.bildovefinancialservices.com/event/how-to-be-debt-free",
               lastModified: new Date(),
               changeFrequency: "yearly",
               priority: 1,
          },
     ];
}
