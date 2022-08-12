import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Clients from './collections/Clients';
import Sites from './collections/Sites';
import JobSheets from './collections/JobSheets';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Clients,
    Sites,
    JobSheets
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
