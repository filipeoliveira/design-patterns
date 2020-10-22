// Example classes
class Paypal {
    callInternAPIs() {
        return "Calling Paypal APIs\n"
    }

    checkAccountAvailability() {
        console.log("Checking account Availability for Paypal")
    }
}


class Picpay {
    callInternAPIs() {
        return "Calling Picpay APIs\n"
    }

    sendMetrics() {
        console.log("Sending metrics to Picpay APIs")
    }

    checkAccountAvailability() {
        console.log("Checking account Availability for Picpay")
    }
}

class PaymentFacade {
    protected paypal: Paypal;
    protected picpay: Picpay;

    constructor(picpay: Picpay = null, paypal: Paypal = null) {
        this.picpay = picpay || new Picpay();
        this.paypal = paypal || new Paypal();
    }

    public operation(): string {
        console.log("Facade initializes subsystems\n")

        let result = 'Starting ... :\n';
        // specific logic of complex operations here
        this.picpay.checkAccountAvailability()
        this.paypal.checkAccountAvailability()
        this.picpay.sendMetrics()
        
        result += this.picpay.callInternAPIs()
        result += this.paypal.callInternAPIs()

        return result
    }

}

function facadeExample() {
    // The biggest advantage here is that this functions does not have to know
    // how the PaymentFacade operation method works internally.

    const facade = new PaymentFacade()
    const result = facade.operation()
    console.log(result)
}

facadeExample()
