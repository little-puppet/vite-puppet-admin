import {ConfigEnv, UserConfigExport} from 'vite';
import vue from '@vitejs/plugin-vue'
import {viteMockServe} from 'vite-plugin-mock'
import viteSvgIcons from 'vite-plugin-svg-icons'
import {resolve} from 'path'


export default ({command}: ConfigEnv): UserConfigExport => {
    const prodMock = true;
    return {
        base: "./",
        // logLevel: 'error',
        build: {
            outDir: "dist", //打包文件名称
            assetsDir: "assets", //打包静态文件的存储地址
            chunkSizeWarningLimit: 1300,
            cssCodeSplit: true,
            brotliSize: false,
            emptyOutDir: false,
        },
        server: {
            open: true,
            host: '0.0.0.0',
            port: 3888,
            proxy: {
                '/dev': {
                    target: 'http://127.0.0.1:8888',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/dev/, '')
                }
            }
        },
        plugins: [
            vue(),
            viteMockServe({
                mockPath: 'mock',
                localEnabled: command === 'serve',
                prodEnabled: command !== 'serve' && prodMock,
                ignore: ((fileName: string) => {
                    if (process.env.NODE_ENV == 'dev_api') {
                        return true
                    }
                    return !fileName.startsWith("modules/");

                }),
                injectCode: `
                    import { setupProdMockServer } from '../mock';
                    setupProdMockServer(); `,
                logger: true,
            }),
            viteSvgIcons({
                // 配置路劲在你的src里的svg存放文件
                iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[name]'
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
                    additionalData: `
                        @import "@/styles/variables.scss";
                        @import "@/styles/mixins.scss";`
                }
            }
        },
        optimizeDeps: {
            include: []
        },
        resolve: {
            alias: {
                // 键必须以斜线开始和结束
                '@': resolve(__dirname, './src')
            }
        }
    };
};
