import { NextApiRequest, NextApiResponse } from 'next';
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';

import { createClient } from '../../prismicio';

export default async function preview(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  const client = createClient({ req });
  console.log(req)
  setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
}
