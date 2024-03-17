interface BlogTag {
  id: number;
  attributes: {
    tag: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface BlogArchive {
  data: {
    id: number;
    attributes: {
      archive: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface BlogPost {
  id: number;
  attributes: {
    title: string;
    date_published: string;
    excerpt: string;
    portfolio_blog_tags: {
      data: BlogTag[];
    };
    portfolio_blog_archive: BlogArchive;
  };
}

interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface BlogPreviewPage {
  data: BlogPost[];
  meta: PaginationMeta;
}

export type { BlogTag, BlogArchive, BlogPost, PaginationMeta, BlogPreviewPage };
