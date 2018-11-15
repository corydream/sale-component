
export interface MenuItem {
  parentId: number;
  childId: number;
  id: number;
  route: string;
  title: string;
  selected: boolean;
  expanded: boolean;
  children: Array<MenuItem> | null;
}
