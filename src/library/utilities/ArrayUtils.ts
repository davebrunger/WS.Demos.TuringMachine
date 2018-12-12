export module ArrayUtils {
    export function flapMap<TSource, TResult>(array : TSource[], callback : (item : TSource, index : number) => TResult[]): TResult[] {
        return array.map(callback).reduce((a1, a2) => a1.concat(a2));
    }
}