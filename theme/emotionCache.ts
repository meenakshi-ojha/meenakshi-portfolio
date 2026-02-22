import createCache from '@emotion/cache';

// Use a unique key for MUI to avoid conflicts
const muiCache = createCache({ key: 'mui', prepend: true });

export default muiCache;
