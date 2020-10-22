class Singleton {
    private static instance: Singleton;

    private constructor() {

    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    // Singleton business logic
    public someBusiness() {

    }
}

// Utilization

function singletonExample() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    // note the '===' here.
    if (instance1 === instance2) {
        console.log("It works. We are using the same instance for two variables.")
    }
    else {
        console.log("Something went wrong.")
    }
}

singletonExample();