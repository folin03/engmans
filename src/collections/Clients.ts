import { CollectionConfig } from 'payload/types';

const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'firstName',
    disableDuplicate: true,
    defaultColumns: [
      'companyName',
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
      name: 'companyName',
      type: 'text',
    },
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
      type: 'email',
      required: true
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: true
    },
    {
      name: 'notes', // required
      type: 'array', // required
      minRows: 0,
      maxRows: 1000,
      fields: [ // required
        {
          name: 'created',
          type: 'date',
          required: true,
        },
        {
          name: 'createdBy',
          type: 'text',
          required: true
        },
        {
          name: 'lastEdited',
          type: 'date',
        },
        {
          name: 'editedBy',
          type: 'text',
        },
        {
          name: 'note',
          type: 'textarea',
          required: true
        }
      ]
    }
  ],
};

export default Clients;