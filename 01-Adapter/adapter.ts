interface EuSocket {
    giveEuCurrent(): string
}

interface LaptopProps {
    giveLaptopName():string
}

interface GbSocket {
    giveGbCurrent(): string
}

class StandardEuSocket implements EuSocket{
    public giveEuCurrent(): string {
        return "current from EU socket";
    }
}

class StandardBgSocket implements GbSocket{
    giveGbCurrent(): string {
        return "current from GB socket"
    }

}

class Laptop implements LaptopProps {
    public giveLaptopName(): string {
        return 'ThinkPad';
    }
}

class Charger {
    public charge(laptop: Laptop, euSocket: EuSocket){
        return `Charging laptop ${laptop.giveLaptopName()} with ${euSocket.giveEuCurrent()}`
    }
}

class Adapter implements StandardEuSocket{
    private gbSocket: GbSocket;
    constructor(gbSocket: GbSocket) {
        this.gbSocket = gbSocket
    }

    public adapt():string{
        return this.gbSocket.giveGbCurrent()
    }

    giveEuCurrent(): string {
        return "";
    }
}
const test = new Charger()
const laptop = new Laptop()
const gb = new StandardBgSocket()
const adapter = new Adapter(gb)

console.log(test.charge(laptop, adapter))
