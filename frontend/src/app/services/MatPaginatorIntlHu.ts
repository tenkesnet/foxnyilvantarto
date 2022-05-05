import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlHu extends MatPaginatorIntl {
  override itemsPerPageLabel = 'sorok száma oldalanként';
  override nextPageLabel = 'Következő oldal';
  override previousPageLabel = 'Előző oldal';
  override lastPageLabel = 'Utolsó oldal';
  override firstPageLabel = "Első oldal";

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0 / ' + length;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' / ' + length;
  };
}
