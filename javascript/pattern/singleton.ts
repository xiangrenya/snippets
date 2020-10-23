class Singleton {
    private _name: string;
    private static _instance: Singleton;
    private constructor(name: string) {
        this._name = name;
    }
    public static getInstance(name: string): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton(name);
        }
        return Singleton._instance;
    }
    public getName(): string {
        return this._name;
    }
    public setName(name: string): void {
        this._name = name;
    }
}

const foo = Singleton.getInstance('foo');
const bar = Singleton.getInstance('bar');
console.log(foo.getName());
console.log(bar.getName());