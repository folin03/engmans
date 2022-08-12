import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'firstName',
    disableDuplicate: true,
    defaultColumns: [
      'firstName',
      'lastName',
      'role',
      'phoneNumber',
      'email'
    ]
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      if (user.role === 'admin') {
        return true;
      }
    },
    update: ({ req: { user } }) => {
      if (user.role === 'admin') {
        return true;
      }
    },
    delete: ({ req: { user } }) => {
      if (user.role === 'admin') {
        return true;
      }
    },
    unlock: ({ req: { user } }) => {
      if (user.role === 'admin') {
        return true;
      }
    },
  },
  fields: [
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
      name: 'phoneNumber',
      type: 'text',
      required: true
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Admin',
          value: 'admin'
        },
        {
          label: 'Engineer',
          value: 'engineer'
        },
        {
          label: 'Office Staff',
          value: 'office_staff'
        }
      ]
    }
  ],
};

export default Users;