import { CollectionConfig } from 'payload/types';

const Sites: CollectionConfig = {
  slug: 'sites',
  admin: {
    useAsTitle: 'siteName',
    disableDuplicate: true,
    defaultColumns: [
      'siteName',
      'client',
      'address',
      'address.city',
      'postcode',
    ]
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true
    },
    {
      name: 'client', // required
      type: 'relationship', // required
      relationTo: 'clients', // required
      hasMany: false,
      required: true
    },
    {
      name: 'address', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'buildingNumberOrName',
          type: 'text',
          required: true,
        },
        {
          name: 'street',
          type: 'text',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'postcode',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
        }
      ],
    },
    {
      name: 'siteManager', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
        {
          name: 'phoneNumber',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        }
      ],
    },
    {
      name: 'systemsInstalled', // required
      type: 'array', // required
      minRows: 0,
      maxRows: 100,
      fields: [ // required
        {
          name: 'systemType',
          type: 'text',
          required: true,
        },
        {
          name: 'manufacturer',
          type: 'text',
          required: true,
        },
        {
          name: 'model',
          type: 'text',
        },
        {
          name: 'notes',
          type: 'textarea',
        }
      ]
    },
    {
      name: 'siteNotes', // required
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
          name: 'lastEdit',
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

export default Sites;