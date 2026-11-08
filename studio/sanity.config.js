import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const singletonTypes = ['siteSettings']

export default defineConfig({
  name: 'default',
  title: 'My Portfolio',

  projectId: 'hzp7vlc4', 
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.documentTypeListItem('project').title('Projects'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Don't offer "create new Site Settings"
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },

  document: {
    // Only allow publish / discard / restore on the settings page (no delete or duplicate)
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(({ action }) =>
            action && ['publish', 'discardChanges', 'restore'].includes(action)
          )
        : input,
  },
})