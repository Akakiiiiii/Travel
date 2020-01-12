import $axios from './index'

export function getCardsData() {
  const url = '/getCardsData'
  return $axios.get(url)
}
export function getTableData() {
  const url = '/getTableList'
  return $axios.get(url)
}
