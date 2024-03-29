export enum MarkCount {
  LOW = 0.25, // Просмотр
  MIDDLE = 0.5, // Полный просмотр
  UPPER_MIDDLE = 0.75, // Просмотр с кликом на отзывы и элементы
  HIGH = 1, // В избранное
}

export interface FilterItem {
  key: string
  title: string
  value: number
  isSelected: boolean
}

export interface FilterGroup {
  title: string
  key: string
  type: 'select-single' | 'select-multi' | 'slider'
  startSliderValue?: number
  endSliderValue?: number
  placeholder: string
  filters: Array<FilterItem>
}
