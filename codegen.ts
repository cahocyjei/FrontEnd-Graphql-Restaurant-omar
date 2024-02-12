import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'http://127.0.0.1:3000/graphql',
   documents: ['service/queries.graphql'],
   generates: {
      'service/graphql.tsx': {
        preset: 'client',
      }
   }
}
export default config