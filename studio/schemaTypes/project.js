import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags (technologies used)',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'image',
      title: 'Project image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'liveLink',
      title: 'Live link',
      type: 'url',
    }),
  ],
})