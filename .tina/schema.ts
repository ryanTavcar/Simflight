import { defineSchema } from "@tinacms/cli";
import type { TinaCollection, TinaTemplate, TinaField } from "@tinacms/cli";

const heroBlockSchema: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Text",
      name: "text",
      ui: {
        component: "markdown",
      },
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

const defaultFeature = {
  title: "Simulators",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  image: {
    src: "/images/helicopter-feature.png",
    alt: "Helicopter hero image"
  }
}

const featureBlockSchema: TinaTemplate = {
  name: "features",
  label: "Features",
  ui: {
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature]
    }
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "object",
          label: "Text",
          name: "text",
          fields: [
            {
              type: "string",
              name: "item1",
              label: "Item 1",
            },
            {
              type: "string",
              name: "item2",
              label: "Item 2",
            },
            {
              type: "string",
              name: "item3",
              label: "Item 3",
            },
          ],
        },
        {
          type: "object",
          label: "Image",
          name: "image",
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image",
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
}

const aboutBlockSchema: TinaTemplate = {
  label: "About",
  name: "about",
  ui: {
    defaultItem: {
      title: "Our Mission",
      text: "To maintain our leading position of providing quality built Category B approved Synthetic Trainers. The Company first began in 1995 trading as Support Pilot Services. It provided quality ground based IFR training using a LINK Airtrainer model AT-67. This trainer was first built in the early sixties and used for many years by Ansett Australia for airline pilot training. It has two axii of motion in pitch and roll and uses vacuum tubes yet is an excellent IFR trainer. It is still used by the company today. Support Pilot Services still trades today selling Mike (lip) lights to the Australasian market as an exclusive agent for Seitz Scientific Industries, USA.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Text",
      name: "text",
      ui: {
        component: "textarea"
      },
    },      
  ],
};

const defaultProduct = {
  title: "product",
  text: "This is where you might talk about the product, if this wasn't just filler text.",
  image: {
    src: "/images/helicopter-feature.png",
    alt: "Helicopter hero image"
  }
}

const productsBlockSchema: TinaTemplate = {
  label: "Products",
  name: "products",
  ui: {
    defaultItem: {
      items: [defaultProduct, defaultProduct, defaultProduct]
    }
  },
  fields: [
    {
      type: "object",
      label: "product Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultProduct,
        },
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          ui: {
            component: "textarea"
          },
        },
        {
          type: "object",
          label: "Image",
          name: "image",
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image",
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          type: "string",
          label: "Keywords",
          name: "keywords",
        }
      ],
    },
  ],
};

export default defineSchema({
  collections: [
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [heroBlockSchema, featureBlockSchema, aboutBlockSchema],
        },
      ],
    },
    {
      label: "Products List",
      name: "products",
      path: "content/products",
      fields: [
        {
          type: "string",
          label: "category",
          name: "category",
        },
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          ui: {
            component: "textarea"
          },
        },
        {
          type: "object",
          label: "Image",
          name: "image",
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image",
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          type: "string",
          label: "Keywords",
          name: "keywords",
          list: true,
        }
      ],
    },
    {
      label: "News List",
      name: "news",
      path: "content/news",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "excerpt",
          name: "excerpt",
          ui: {
            component: "textarea"
          },
        },
        {
          type: "datetime",
          label: "Posted Date",
          name: "date",
          ui: {
            dateFormat: "DD MM YYYY",
            timeFormat: "hh:mm A",
          },
        },
        {
          type: "image",
          name: "heroImg",
          label: "Hero Image",
        },
        {
          type: "string",
          label: "Keywords",
          name: "keywords",
          list: true,
        },
        {
          type: "string",
          label: "Body",
          ui: {
            component: "markdown",
          },
          name: "body",
          isBody: true,
        },
      ],
    },
    {
      label: "404",
      name: "fourOhFour",
      path: "content/fourOhFour",
      fields: [
        {
          type: "string",
          label: "Headline",
          name: "headline",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
        },
        {
          type: "object",
          label: "Image",
          name: "image",
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image",
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          label: "Actions",
          name: "actions",
          type: "object",
          list: true,
          ui: {
            defaultItem: {
              label: "Action Label",
              type: "button",
              icon: true,
              link: "/",
            },
          },
          fields: [
            {
              label: "Label",
              name: "label",
              type: "string",
            },
            {
              label: "Type",
              name: "type",
              type: "string",
              options: [
                { label: "Button", value: "button" },
                { label: "Link", value: "link" },
              ],
            },
            {
              label: "Icon",
              name: "icon",
              type: "boolean",
            },
            {
              label: "Link",
              name: "link",
              type: "string",
            },
          ],
        },
      ]
    },
  ],
});
