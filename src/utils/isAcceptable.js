import invalidatingFields from './invalidatingFields'

export default ({ item }) => {
  const dirtyKeys = item.dirtyKeys()
  const fields = invalidatingFields({ item })
  const candidates = fields.filter(a => dirtyKeys.includes(a))
  return candidates.length === 0
}
