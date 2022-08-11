import { CollectionConfig } from 'payload/types';

const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'firstName',
    disableDuplicate: true,
    defaultColumns: [
      'firstName',
      'lastName',
      'phoneNumber',
      'email'
    ]
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'select',
      options: [
        {
          label: 'Mr',
          value: 'mr'
        },
        {
          label: 'Mrs',
          value: 'mrs'
        },
        {
          label: 'Miss',
          value: 'miss'
        },
        {
          label: 'Them',
          value: 'them'
        }
      ]
    },
    {
      name: 'companyName',
      type: 'text',
    },
    {
      name: 'firstName',
      type: 'text',
      required: true
    },
    {
      name: 'lastName',
      type: 'text',
      required: true
    },
    {
      name: 'email',
      type: 'text',
      required: true
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true
    },
    {
      name: 'notes',
      type: 'textarea',
    },
  ],
};

export default Clients;