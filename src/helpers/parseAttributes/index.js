import enumerate from '../enumerate'
import highlight from '../highlight'

const explainAttrOperator = attr => {
  const value = highlight(attr.value)

  switch (attr.operator) {
    case '=':
      return 'is ' + value
    case '*=':
      return 'contains ' + value
    case '^=':
      return 'starts with ' + value
    case '$=':
      return 'ends with ' + value
    case '~=':
      return 'is a space-separated list of values, one of which is ' + value
    case '|=':
      return 'is an hyphen-separated list of values, one of which is ' + value
  }
}

const explainAttr = attr =>
  'an attribute ' +
  (attr.value
    ? `${highlight(attr.name)} whose value ${explainAttrOperator(attr)}`
    : highlight(attr.name))

export default ({ attrs = [] }) => {
  if (attrs.length === 0) {
    return ''
  }

  return enumerate(attrs.map(explainAttr))
}
