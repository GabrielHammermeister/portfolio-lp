import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
   // component generator
   plop.setGenerator('component', {
      description: 'application component logic',
      prompts: [
         {
            type: 'input',
            name: 'name',
            message: 'component name please'
         }
      ],
      actions: [
         {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.index.tsx',
            templateFile: 'templates/components/index.tsx.hbs'
         },
         {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
            templateFile: 'templates/components/styles.ts.hbs'
         },
         {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: 'templates/components/stories.tsx.hbs'
         },
         {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
            templateFile: 'templates/components/test.tsx.hbs'
         }
      ]
   })
}
