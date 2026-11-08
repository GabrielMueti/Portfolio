import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'main', title: 'Main', default: true },
    { name: 'about', title: 'About' },
    { name: 'contact', title: 'Contact' },
    { name: 'text', title: 'Section text' },
    { name: 'seo', title: 'Browser & Google' },
  ],
  fields: [
    // ---------- MAIN ----------
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Shown in the navbar, the top of the page and the footer.',
      type: 'string',
      group: 'main',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'The short sentence under the name (max 160 characters).',
      type: 'text',
      rows: 2,
      group: 'main',
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: 'cv',
      title: 'CV / Resume (PDF)',
      description: 'Upload a PDF. A download button appears on the home page.',
      type: 'file',
      options: { accept: '.pdf' },
      group: 'main',
    }),

    // ---------- ABOUT ----------
    defineField({
      name: 'profileImage',
      title: 'Profile photo',
      type: 'image',
      options: { hotspot: true },
      group: 'about',
    }),
    defineField({
      name: 'aboutText',
      title: 'About me',
      description: 'A short bio. Press Enter twice for a new paragraph.',
      type: 'text',
      rows: 6,
      group: 'about',
    }),
    defineField({
      name: 'skills',
      title: 'Skills / services',
      description: 'Type one, press Enter, then the next. Do not paste a whole list.',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      group: 'about',
    }),

    // ---------- CONTACT ----------
    defineField({
      name: 'email',
      title: 'Contact email',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone number',
      description: 'Optional. Example: +254 700 000 000',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'Optional. Example: Nairobi, Kenya',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'socials',
      title: 'Social links',
      type: 'array',
      group: 'contact',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label (e.g. LinkedIn)',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Link',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: { select: { title: 'label', subtitle: 'url' } },
        },
      ],
    }),

    // ---------- SECTION TEXT ----------
    defineField({ name: 'heroGreeting', title: 'Greeting above the name', description: 'Default: Hello, I\'m', type: 'string', group: 'text' }),
    defineField({ name: 'heroButtonText', title: 'Main button text', description: 'Default: View My Work', type: 'string', group: 'text' }),
    defineField({ name: 'cvButtonText', title: 'CV button text', description: 'Default: Download CV', type: 'string', group: 'text' }),
    defineField({ name: 'aboutHeading', title: 'About heading', description: 'Default: About Me', type: 'string', group: 'text' }),
    defineField({ name: 'skillsHeading', title: 'Skills heading', description: 'Default: Skills', type: 'string', group: 'text' }),
    defineField({ name: 'projectsHeading', title: 'Projects heading', description: 'Default: Projects', type: 'string', group: 'text' }),
    defineField({ name: 'projectsSubtitle', title: 'Projects subtitle', type: 'string', group: 'text' }),
    defineField({ name: 'contactHeading', title: 'Contact heading', description: 'Default: Let\'s work together', type: 'string', group: 'text' }),
    defineField({ name: 'contactSubtitle', title: 'Contact subtitle', type: 'string', group: 'text' }),

    // ---------- SEO ----------
    defineField({
      name: 'seoTitle',
      title: 'Browser tab title',
      description: 'Also the title shown in Google. Example: Jane Doe | Frontend Developer',
      type: 'string',
      group: 'seo',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Description for Google',
      description: 'One or two sentences (max 160 characters).',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (rule) => rule.max(160),
    }),
  ],
})