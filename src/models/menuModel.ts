export interface MenuModel {
  component: string,
  createTime: string,
  icon: string,
  id: number,
  name: string,
  path:string,
  pid: string,
  sortNo: number,
  status: number,
  updateTime: string,
  children: MenuModel[]
}
