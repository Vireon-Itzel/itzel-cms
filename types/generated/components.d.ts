import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'facebook',
        'instagram',
        'linkedin',
        'x',
        'youtube',
        'tiktok',
        'whatsapp',
      ]
    >;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    order: Schema.Attribute.Integer;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    ogImage: Schema.Attribute.Media<'images'>;
    seoDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    seoText: Schema.Attribute.Blocks;
    seoTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.social-link': LayoutSocialLink;
      'seo.seo': SeoSeo;
    }
  }
}
