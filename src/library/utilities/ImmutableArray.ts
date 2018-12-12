// An "Immutable" wrapper of the standard array
// Useful to avoid bugs.
export class ImmutableArray<T> {
    private readonly array : T[];
    public readonly length : number;

    private constructor(array : T[])
    {
        this.array = array;
        this.length = array.length;
    }

    public static newImmutableArray<T>() : ImmutableArray<T>
    {
        return new ImmutableArray<T>([]);
    }

    public push(value : T) : ImmutableArray<T>
    {
        var newArray = this.array.slice();
        newArray.push(value);
        return new ImmutableArray(newArray);
    }

    public getValue(index : number) : T {
        return this.array[index];
    }

    public map<TResult>(callback : (value : T, index : number) => TResult) : ImmutableArray<TResult> {
        return new ImmutableArray<TResult>(this.array.map(callback));
    }

    public insert(position : number, value : T) : ImmutableArray<T>
    {
        var newArray = this.array.slice();
        newArray.splice(position, 0, value);
        return new ImmutableArray(newArray);
    }

    public replace(position : number, value : T) : ImmutableArray<T>
    {
        var newArray = this.array.slice();
        newArray.splice(position, 1, value);
        return new ImmutableArray(newArray);
    }

    public toArray() : T[] {
        return this.array.slice();
    }
}