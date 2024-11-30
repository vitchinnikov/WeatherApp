export const createApiActions = (baseAction) => {
    const INITIAL = 'INITIAL';
    const DEFAULT = 'DEFAULT';
    const REQUEST = 'REQUEST';
    const SUCCESS = 'SUCCESS';
    const FAILURE = 'FAILURE';
    const FINALLY = 'FINALLY';

    return {
        [DEFAULT]: baseAction,
        [INITIAL]: `${baseAction}_${INITIAL}`,
        [REQUEST]: `${baseAction}_${REQUEST}`,
        [SUCCESS]: `${baseAction}_${SUCCESS}`,
        [FAILURE]: `${baseAction}_${FAILURE}`,
        [FINALLY]: `${baseAction}_${FINALLY}`,
    };
};

export function action(type, payload = {}) {
    return { type, ...payload };
}
