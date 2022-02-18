"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Basics","items":[{"type":"link","label":"Installation","href":"/docs/basics/installation","docId":"basics/installation"},{"type":"link","label":"Configuration","href":"/docs/basics/configuration","docId":"basics/configuration"},{"type":"link","label":"Usage","href":"/docs/basics/usage","docId":"basics/usage"},{"type":"link","label":"Prisma version check","href":"/docs/basics/prisma-version","docId":"basics/prisma-version"},{"type":"link","label":"Nest JS","href":"/docs/basics/nest-js","docId":"basics/nest-js"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Advanced","items":[{"type":"link","label":"Exposing selected models","href":"/docs/advanced/exposing-models","docId":"advanced/exposing-models"},{"type":"link","label":"Exposing selected actions","href":"/docs/advanced/exposing-actions","docId":"advanced/exposing-actions"},{"type":"link","label":"Hiding model fields","href":"/docs/advanced/hiding-field","docId":"advanced/hiding-field"},{"type":"link","label":"Adding model fields","href":"/docs/advanced/adding-fields","docId":"advanced/adding-fields"},{"type":"link","label":"Custom operations","href":"/docs/advanced/custom-operations","docId":"advanced/custom-operations"},{"type":"link","label":"Renaming model","href":"/docs/advanced/renaming-model","docId":"advanced/renaming-model"},{"type":"link","label":"Renaming field","href":"/docs/advanced/renaming-field","docId":"advanced/renaming-field"},{"type":"link","label":"Unchecked scalars input","href":"/docs/advanced/unchecked-scalars","docId":"advanced/unchecked-scalars"},{"type":"link","label":"Applying decorators","href":"/docs/advanced/additional-decorators","docId":"advanced/additional-decorators"},{"type":"link","label":"Emit selected blocks","href":"/docs/advanced/emit-blocks","docId":"advanced/emit-blocks"},{"type":"link","label":"Simple resolvers","href":"/docs/advanced/simple-resolvers","docId":"advanced/simple-resolvers"},{"type":"link","label":"Prisma path","href":"/docs/advanced/custom-prisma-import","docId":"advanced/custom-prisma-import"}],"collapsible":true,"collapsed":true}],"examples":[{"type":"link","label":"Examples","href":"/docs/examples","docId":"examples"}]},"docs":{"advanced/adding-fields":{"id":"advanced/adding-fields","title":"Adding fields to model type","description":"If you want to add a field to the generated type like User, you have to create a proper @FieldResolver for that:","sidebar":"docs"},"advanced/additional-decorators":{"id":"advanced/additional-decorators","title":"Additional decorators for CRUD resolvers and Prisma classes and fields","description":"Additional decorators for Prisma schema resolvers","sidebar":"docs"},"advanced/custom-operations":{"id":"advanced/custom-operations","title":"Custom operations","description":"You can also add custom queries and mutations to the schema as always, using the generated PrismaClient:","sidebar":"docs"},"advanced/custom-prisma-import":{"id":"advanced/custom-prisma-import","title":"Custom Prisma import path","description":"If you have a complex repository structure, e.g. with multiple Prisma clients generated, you can provide a custom Prisma import path as a generator option:","sidebar":"docs"},"advanced/emit-blocks":{"id":"advanced/emit-blocks","title":"Emit only selected blocks","description":"If you don\'t want to have generated all the CRUD API with all resolvers, arguments, inputs, outputs, models, etc., you can provide an emitOnly generator option, which accepts a string list of values","sidebar":"docs"},"advanced/exposing-actions":{"id":"advanced/exposing-actions","title":"Exposing selected Prisma actions only","description":"If you want to expose only certain Prisma actions, like findManyUser or createOneUser, you can import resolver classes only for them, instead of the whole model XYZCrudResolver.","sidebar":"docs"},"advanced/exposing-models":{"id":"advanced/exposing-models","title":"Exposing selected models Prisma CRUD actions","description":"If you want to expose only CRUD Prisma actions for selected models, you can import crud resolver classes only for that models, instead of the all-in-one resolvers object.","sidebar":"docs"},"advanced/hiding-field":{"id":"advanced/hiding-field","title":"Hiding Prisma model field in GraphQL schema","description":"Sometimes you may want to not expose some fields in GraphQL schema.","sidebar":"docs"},"advanced/renaming-field":{"id":"advanced/renaming-field","title":"Changing exposed model type field name","description":"You can also change the name of the model type fields exposed in GraphQL Schema.","sidebar":"docs"},"advanced/renaming-model":{"id":"advanced/renaming-model","title":"Changing exposed model type name","description":"You can also change the name of the model types exposed in GraphQL Schema.","sidebar":"docs"},"advanced/simple-resolvers":{"id":"advanced/simple-resolvers","title":"Simple resolvers (performance)","description":"If you don\'t have any global middlewares and you want to tune the generated schema performance, you can turn on the simpleResolvers generator option:","sidebar":"docs"},"advanced/unchecked-scalars":{"id":"advanced/unchecked-scalars","title":"Unchecked scalars input","description":"GraphQL does not support input unions, hence it\'s not possible to support both normal inputs and unchecked scalars input at the same time like the Prisma does.","sidebar":"docs"},"basics/configuration":{"id":"basics/configuration","title":"Configuration","description":"Creating generator block","sidebar":"docs"},"basics/installation":{"id":"basics/installation","title":"Installation","description":"Be aware that due to usage of some ES2019 and newer Node.js features, you also have to use Node.js v12.4.0 or newer.","sidebar":"docs"},"basics/nest-js":{"id":"basics/nest-js","title":"Nest JS","description":"typegraphql-nestjs","sidebar":"docs"},"basics/prisma-version":{"id":"basics/prisma-version","title":"Prisma version verification","description":"Checking installed Prisma version","sidebar":"docs"},"basics/usage":{"id":"basics/usage","title":"Usage","description":"Having installed all the deps and configured the Prisma generator, let\'s see the capabilities of typegraphql-prisma.","sidebar":"docs"},"examples":{"id":"examples","title":"Examples","description":"In the GitHub repository you can find a few examples of using the TypeGraphQL Prisma integration:"},"intro":{"id":"intro","title":"Introduction","description":"Let\'s discover TypeGraphQL Prisma in less than 3 minutes.","sidebar":"docs"}}}')}}]);