export module EnumUtils {
    export function GetValues<T>(enumType : any) : T[] {
        return Object.keys(enumType).filter(k => isNaN(k as any)).map(k => enumType[k] as T);
    }
}