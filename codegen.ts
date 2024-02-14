import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://nestgraphql-restaurant-production.up.railway.app/graphql",
  documents: "src/service/queries.graphql",
  emitLegacyCommonJSImports: false,
  generates: {
    "src/service/graphql-ts/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
