const DATA =  {
  'name': 1,
  'items': [
    {
      'name': 2,
      'items': [
        {
          'name': 3
        },
        {
          'name': 4
        }
      ]
    },
    {
      'name': 5,
      'items': [
        {
          'name': 6
        }
      ]
    }
  ]
}

function getTree(data, padStart) {
  const nameStr = data.name.toString();
  console.log(nameStr.padStart(nameStr.length + padStart, '-'))

  if (data.items) {
    data.items.forEach(item => getTree(item, padStart + 1))
  }
}

getTree(DATA, 0)