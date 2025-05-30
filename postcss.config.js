import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import postcssCombineMediaQuery from 'postcss-combine-media-query';
import postcssCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssReporter from 'postcss-reporter';
import postcssDiscardDuplicates from 'postcss-discard-duplicates';

export default {
    plugins: [
        postcssImport,
        postcssUrl,
        postcssCombineMediaQuery,
        postcssCombineDuplicatedSelectors({
            removeDuplicatedProperties: true,
            removeDuplicatedValues: false,
        }),
        autoprefixer,
        postcssDiscardDuplicates(),
        cssnano({
            preset: 'default',
        }),
        postcssReporter,
    ],
};
