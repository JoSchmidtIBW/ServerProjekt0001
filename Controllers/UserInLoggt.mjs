export default class User {
    constructor(ma_NummerU,vornameU,nachnameU,passwortU,istChefU) {
        this.ma_NummerU = ma_NummerU;
        this.vornameU = vornameU;
        this.nachnameU = nachnameU;
        this.passwortU = passwortU;
        this.istChefU = istChefU;
    }
    getMa_NummerU() {
        return this.ma_NummerU;
    }
    setMa_NummerU(ma_NummerU) {
        this.ma_NummerU = ma_NummerU;
    }
    getVornameU() {
        return this.vornameU;
    }
    setVornameU(vornameU) {
        this.vornameU = vornameU;
    }
    getNachnameU() {
        return this.nachnameU;
    }
    setNachnameU(nachnameU) {
        this.nachnameU = nachnameU;
    }
    getPasswortU() {
        return this.passwortU;
    }
    setPasswortU(passwortU) {
        this.passwortU = passwortU;
    }
    getIstChefU() {
        return this.istChefU;
    }
    setIstChefU(istChefU) {
        this.istChefU = istChefU;
    }
}