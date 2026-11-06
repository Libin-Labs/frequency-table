import * as api from '@lp-labs/frequency-table';
import { frequencyTable } from '@lp-labs/frequency-table';
const rows = frequencyTable(['blue', 'red', 'blue']);
if (rows[0]?.value !== 'blue' || rows[0].count !== 2) throw new Error('Count mismatch');
// @ts-expect-error invalid argument must be rejected by declarations
api.frequencyTable([1, 2]);
