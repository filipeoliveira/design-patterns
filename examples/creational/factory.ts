abstract class Phone {

    abstract turnOn(): void
    abstract turnOff(): void
}

class XiaomiPhone {
    public turnOn(): void {
        console.log("Turning on XiaomiPhone")
    }

    public turnOff(): void {
        console.log("Turning off XiaomiPhone")
    }
}

class IPhone {
    public turnOn(): void {
        console.log("Turning on XiaomiPhone")
        // specific method to run only in Iphone implementation
        //checkInternet()
    }

    public turnOff(): void {
        console.log("Turning off XiaomiPhone")
        // specific method to run only in Iphone implementation
        // sendBackupToIcloud()
    }
}


class PhoneFactory {
    public createPhone(type: string) : Phone {
        let phone: Phone = null;

        if (type == "xiaomi") {
            phone = new XiaomiPhone();
        }
        else if (type == "apple") {
            phone = new IPhone();
        }

        return phone;

    }
}

class PhoneStore {
    private factory: PhoneFactory;

    // requires a PhoneFactory object to be passed to this constructor
    constructor(factory: PhoneFactory) {
        this.factory = factory
    }

    public order(phoneType: string) {
        let phone: Phone

        phone = this.factory.createPhone(phoneType);

        // Phone is created. Now we can use it as a setup, making sure that all phones returned
        // are turned on, for example.
        phone.turnOn();

        return phone;
    }

}

// Utilization
function factoryExample() {
    const factory = new PhoneFactory()
    const phoneStore = new PhoneStore(factory)

    let phone1 = phoneStore.order("xiaomi");
    console.log(phone1);
}

factoryExample()


// TODO factory method vs factory object example