export interface Menus {
  id: String
  name: String
  index: String //因为el-menu对应index
  children?: Menus[]
  icon?: String
}
