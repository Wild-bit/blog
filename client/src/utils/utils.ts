export const getAssetsFile = (url: string) => {
    return new URL(`../img/${url}`, import.meta.url).href
 }