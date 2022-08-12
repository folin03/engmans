import { CollectionConfig } from 'payload/types';

const JobSheets: CollectionConfig = {
  slug: 'job-sheets',
  admin: {
    useAsTitle: 'siteName',
    defaultColumns: [
      'site',
      'equipment',
      'assignedToUser',
      'expectedDayAndTime',
      'jobFinished',
    ]
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'equipment',
      type: 'text',
      required: true
    },
    {
      name: 'site', // required
      type: 'relationship', // required
      relationTo: 'sites', // required
      hasMany: false,
      required: true
    },
    {
      name: 'assignedToUser', // required
      type: 'relationship', // required
      relationTo: 'users', // required
      hasMany: false,
      required: true
    },
    {
      name: 'createdBy',
      type: 'text',
      required: true,
    },
    {
      name: 'expectedDayAndTime',
      type: 'date',
      required: true,
    },
    {
      name: 'jobStartedAt',
      type: 'date',
    },
    {
      name: 'jobFinishedAt',
      type: 'date',
    },
    {
      name: 'jobDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'workDone',
      type: 'textarea',
    },
    {
      name: 'returnVisitNeeded',
      type: 'checkbox',
    },
    {
      name: 'jobFinished',
      type: 'checkbox',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'maintenance', // required
      type: 'group', // required
      fields: [ // required
        {
          name: 'mainVoltage',
          type: 'number',
        },
        {
          name: 'auxVoltage',
          type: 'number',
        },
        {
          name: 'auxCurrent',
          type: 'number',
        },
        {
          name: 'allSensorsWorking',
          type: 'checkbox',
        },
        {
          name: 'remoteControl',
          type: 'checkbox',
        },
        {
          name: 'remoteMonitoring',
          type: 'checkbox',
        },
        {
          name: 'policeResponse',
          type: 'checkbox',
        },
        {
          name: 'allSignalsWorking',
          type: 'checkbox',
        },
        {
          name: 'systemPassed',
          type: 'checkbox',
        },
        {
          name: 'notes',
          type: 'textarea',
        }
      ]
    }
  ]
};

export default JobSheets;