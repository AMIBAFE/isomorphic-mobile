import * as path from 'path';
import Loadable from 'react-loadable/lib';

export default Loadable({
    loader: () => require('./index.tsx'),
    LoadingComponent: () => null,
    serverSideRequirePath: path.join(__dirname, './index.tsx'),
    webpackRequireWeakId: () => require.resolveWeak('./index.tsx'),
});