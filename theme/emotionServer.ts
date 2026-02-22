import createEmotionServer from '@emotion/server/create-instance';
import muiCache from './emotionCache';

export const emotionServer = createEmotionServer(muiCache);
