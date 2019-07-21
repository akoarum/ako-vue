---
inject: true
append: true
to: '<%= story ? `stories/${category}.ts` : null %>'
---
  .add('<%= name %>', () => ({
    components: { <%= name %> },
    template: `
      <<%= name %> />
    `
  }), { info: {} })