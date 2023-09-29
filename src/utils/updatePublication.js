import isAcceptable from './isAcceptable'

export default ({ item }) => {
  const status = item.get('reviewableStatus')
  switch (status) {
    case 'accepted': {
      const isReviewable = isAcceptable({ item })
      if (!isReviewable) {
        item.set('reviewableStatus', 'toreview')
      }
    } break
    default: break
  }
}
