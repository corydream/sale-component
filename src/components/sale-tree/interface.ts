import { SaleTreeNode } from '@shared/sale-tree/sale-tree-node';

export interface SaleFormatEmitEvent {
  eventName: string;
  node: SaleTreeNode;
  event: MouseEvent | DragEvent;
  dragNode?: SaleTreeNode;
  selectedKeys?: SaleTreeNode[];
  checkedKeys?: SaleTreeNode[];
  matchedKeys?: SaleTreeNode[];
  nodes?: SaleTreeNode[];
  keys?: string[];
}

export interface SaleFormatBeforeDropEvent {
  dragNode: SaleTreeNode;
  node: SaleTreeNode;
  pos: number;
}
