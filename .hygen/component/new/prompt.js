module.exports = [
  {
    type: 'select',
    name: 'category',
    message: 'category?',
    choices: ['atoms', 'molecules', 'organisms', 'projects', 'presenters']
  },
  {
    type: 'input',
    name: 'name',
    message: 'name?'
  },
  {
    type: 'toggle',
    name: 'test',
    message: 'Create test?',
    enabled: 'Yes',
    disabled: 'No'
  },
  {
    type: 'toggle',
    name: 'story',
    message: 'Add story?',
    enabled: 'Yes',
    disabled: 'No'
  }
]
