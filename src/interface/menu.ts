export interface menuItem {
  level: number
  name: string
  id: string
  icon?: string
  children?: menuItem[]
}
