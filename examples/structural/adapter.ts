class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.\n';
    }
}


class Adaptee {
    public specificRequest(): string {
        return '         EXAMPLE request with a string in ALL Case and with trailing spaces    .'
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().toLowerCase().trim();
        return `Adapter: (FORMATTED) ${result}`;
    }
}

// Utilization

function adapterExample(target: Target) {
    console.log(target.request())
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
adapterExample(target);

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}\n`);


console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
adapterExample(adapter);