import type { Schema, Struct } from '@strapi/strapi';

export interface BlogArticleContent extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_contents';
  info: {
    displayName: 'article-content';
  };
  attributes: {
    articleContent: Schema.Attribute.Blocks;
  };
}

export interface BlogArticleImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_images';
  info: {
    displayName: 'article-image';
  };
  attributes: {
    articleImage: Schema.Attribute.Media<'images' | 'files'>;
    iframeVideoYoutube: Schema.Attribute.String;
  };
}

export interface BlogArticleQuote extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_quotes';
  info: {
    displayName: 'article-quote';
  };
  attributes: {
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    quoteText: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 800;
      }>;
  };
}

export interface ContentBrandSpecialty extends Struct.ComponentSchema {
  collectionName: 'components_content_brand_specialties';
  info: {
    displayName: 'brand-specialty';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface ContentEvent extends Struct.ComponentSchema {
  collectionName: 'components_content_events';
  info: {
    displayName: 'event';
  };
  attributes: {
    descriptionRegistrer: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'D\u00E9janos tus datos para enviarte m\u00E1s informaci\u00F3n sobre este evento.'>;
    endDate: Schema.Attribute.Date;
    endTime: Schema.Attribute.Time;
    eventType: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    image: Schema.Attribute.Media<'images'>;
    instructionsRegisterSuccess: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    locationLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    locationUrlMaps: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    startDate: Schema.Attribute.Date;
    startTime: Schema.Attribute.Time;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    titleRegisterSuccess: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    titleRegistrer: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }> &
      Schema.Attribute.DefaultTo<'No te pierdas nada'>;
  };
}

export interface ContentLegalContent extends Struct.ComponentSchema {
  collectionName: 'components_content_legal_contents';
  info: {
    displayName: 'legal-content';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    imageHero: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    SEO: Schema.Attribute.Component<'seo.seo', false>;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
  };
}

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

export interface ProductFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_product_faq_items';
  info: {
    displayName: 'faq-Item';
  };
  attributes: {
    answer: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    question: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface ProductTechnicalFeature extends Struct.ComponentSchema {
  collectionName: 'components_product_technical_features';
  info: {
    displayName: 'technical-feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    feature: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface ProductTechnicalSheet extends Struct.ComponentSchema {
  collectionName: 'components_product_technical_sheets';
  info: {
    displayName: 'technical-sheet';
  };
  attributes: {
    groupTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    technicalFeature: Schema.Attribute.Component<
      'product.technical-feature',
      true
    >;
  };
}

export interface ProductTechnicalSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_product_technical_specifications';
  info: {
    displayName: 'technical-Specifications';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
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
      'blog.article-content': BlogArticleContent;
      'blog.article-image': BlogArticleImage;
      'blog.article-quote': BlogArticleQuote;
      'content.brand-specialty': ContentBrandSpecialty;
      'content.event': ContentEvent;
      'content.legal-content': ContentLegalContent;
      'layout.social-link': LayoutSocialLink;
      'product.faq-item': ProductFaqItem;
      'product.technical-feature': ProductTechnicalFeature;
      'product.technical-sheet': ProductTechnicalSheet;
      'product.technical-specifications': ProductTechnicalSpecifications;
      'seo.seo': SeoSeo;
    }
  }
}
