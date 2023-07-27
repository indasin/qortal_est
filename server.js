const path = require("path")

const uiCore = require('./core/ui-core.js')
const createServer = uiCore('server')

const config = require('./config/config.js')

const pluginsController = require('./plugins/default-plugins.js')
const qortalPlugins = pluginsController('plugins')

const plugins = [
    ...qortalPlugins
]

const rootDir = process.env.NODE_ENV === 'production' ? __dirname : __dirname


const conf = {
    ...config,
    build: {
        ...config.build,
        options: {
            ...config.build.options,
            outputDir: path.join(rootDir, '/builtWWW')
        }
    }
}

const server = createServer(conf, plugins)
server.start()
