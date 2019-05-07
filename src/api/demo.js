import request from '@/utils/request'

export function demo(query) {
  return request({
    url: '/demo/demo1',
    method: 'get',
    params: query
  })
}
