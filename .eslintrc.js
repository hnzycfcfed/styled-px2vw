module.exports = {
    extends: 'eslint:recommended',
    env: {
        browser: true,
        node: true,
        jasmine: true,
        jest: true,
        es6: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    plugins: [
        'babel',
    ],
    rules: {
        /**
         *  "off" 或 0 - 关闭规则
            "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
            "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
         */
        'no-useless-escape': 1,
        'no-extra-boolean-cast': 0,
        'no-console': 0,
        'no-constant-condition': 0,
        'no-import-assign': 0,
        'no-setter-return': 0,
        'no-dupe-else-if': 0
    }
}
