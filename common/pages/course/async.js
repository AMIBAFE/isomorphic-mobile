import * as path from 'path';
import Loadadle from 'react-loadable/lib';
export default Loadadle( {
    loader: () => require('./index.tsx'),
    LoadingComponent : () => null,
    serverSlideRequirePath: path.join(__dirname, './index.tsx'),
    webpackRequireWeakId: () => require.resolveWeak('./index.tsx'),
});