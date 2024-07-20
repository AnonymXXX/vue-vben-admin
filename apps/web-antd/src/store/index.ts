import type { InitStoreOptions } from '@vben-core/stores';

import type { App } from 'vue';

import { initStore, storeToRefs } from '@vben-core/stores';

/**
 * @zh_CN 初始化pinia
 * @param app vue app 实例
 */
async function setupStore(app: App, options: InitStoreOptions) {
  const pinia = await initStore(options);
  app.use(pinia);
}

export { setupStore, storeToRefs };

export { useAccessStore } from './modules/access';
export { useAppStore } from './modules/app';