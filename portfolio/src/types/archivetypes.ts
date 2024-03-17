interface Archive {
    id: number;
    attributes: {
      archive: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
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
  
  interface ArchivePreviewPage {
    data: Archive[];
    meta: PaginationMeta;
  }
  
export type { Archive, ArchivePreviewPage, PaginationMeta };