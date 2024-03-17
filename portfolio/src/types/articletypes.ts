interface ArticleContentText {
    type: 'text';
    text: string;
  }
  
  interface ArticleContentParagraph {
    type: 'paragraph';
    children: ArticleContentText[];
  }
  
  type ArticleContent = ArticleContentParagraph[];
  
  interface ArticleTagAttributes {
    tag: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  interface ArticleTag {
    id: number;
    attributes: ArticleTagAttributes;
  }
  
  interface ArticleArchiveAttributes {
    archive: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  interface ArticleArchive {
    data: {
      id: number;
      attributes: ArticleArchiveAttributes;
    };
  }
  
  interface ArticleAttributes {
    title: string;
    date_published: string;
    content: ArticleContent;
    excerpt: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    portfolio_blog_tags: {
      data: ArticleTag[];
    };
    portfolio_blog_archive: ArticleArchive;
  }
  
  interface Article {
    id: number;
    attributes: ArticleAttributes;
  }
  
  interface ArticleResponse {
    data: Article;
    meta: {};
  }
  
export type { ArticleContent, ArticleTag, ArticleArchive, ArticleAttributes, Article, ArticleResponse };