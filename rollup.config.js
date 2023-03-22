import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'code.js',
            format: 'cjs'
        },
        watch: {
            include: 'src/**'
        },
        plugins: [typescript()]
    },
    {
        input: 'src/ui.ts',
        output: {
            file: 'ui/bundler/build/ui.js',
            format: 'cjs'
        },
        watch: {
            include: 'src/**'
        },
        plugins: [typescript()]
    }
];